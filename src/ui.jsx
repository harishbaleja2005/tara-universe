import { createContext, useCallback, useContext, useMemo, useRef, useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { registerFx, confetti, sparkle } from './fx.js'
import { starMessages } from './data/content.js'

const Ctx = createContext(null)
export const useUi = () => useContext(Ctx)
export const TOTAL_STARS = 5

export function FxLayer() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current
    const fit = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      c.width = window.innerWidth * dpr
      c.height = window.innerHeight * dpr
      c.getContext('2d').setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    fit()
    registerFx(c)
    window.addEventListener('resize', fit)
    return () => { window.removeEventListener('resize', fit); registerFx(null) }
  }, [])
  return <canvas ref={ref} className="fx-layer" aria-hidden="true" />
}

export function UiProvider({ children }) {
  const [msg, setMsg] = useState(null)
  const [found, setFound] = useState([])
  const timer = useRef(0)

  const toast = useCallback((text) => {
    setMsg({ text, k: Date.now() })
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setMsg(null), 3800)
  }, [])

  const foundRef = useRef([])
  const find = useCallback((id) => {
    if (foundRef.current.includes(id)) return
    const next = [...foundRef.current, id]
    foundRef.current = next
    setFound(next)
    toast(next.length === TOTAL_STARS
      ? 'All 5 hidden stars found! You officially out-explored this website. ✨'
      : starMessages[next.length - 1])
    if (next.length === TOTAL_STARS) setTimeout(() => confetti(), 200)
  }, [toast])

  const value = useMemo(() => ({ toast, find, found }), [toast, find, found])
  return (
    <Ctx.Provider value={value}>
      {children}
      <div className="toast-wrap" role="status" aria-live="polite">
        <AnimatePresence>
          {msg && (
            <motion.div key={msg.k} className="toast" initial={{ opacity: 0, y: 24, scale: .95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12 }}>
              {msg.text}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Ctx.Provider>
  )
}

export function HiddenStar({ id, className = '', style }) {
  const { find, found } = useUi()
  const got = found.includes(id)
  return (
    <button type="button" className={`hidden-star ${got ? 'got' : ''} ${className}`} style={style}
      aria-label={got ? 'Hidden star, already found' : 'A hidden star. Tap to collect it'}
      onClick={(e) => { find(id); const r = e.currentTarget.getBoundingClientRect(); sparkle(r.left + r.width / 2, r.top + r.height / 2) }}>
      ✦
    </button>
  )
}
