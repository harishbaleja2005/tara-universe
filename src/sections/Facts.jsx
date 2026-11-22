import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Dna, FlaskConical, Orbit, Sigma, RefreshCw, Shuffle } from 'lucide-react'
import { facts } from '../data/content.js'
import { Brain } from '../art/index.jsx'
import { sparkle } from '../fx.js'
import { HiddenStar } from '../ui.jsx'

const icons = { Biology: Dna, Chemistry: FlaskConical, Physics: Orbit, Maths: Sigma }
const names = Object.keys(facts)
const pick = (n, not) => { let i; do { i = Math.floor(Math.random() * n) } while (n > 1 && i === not); return i }

export default function Facts() {
  const [sub, setSub] = useState('Biology')
  const [idx, setIdx] = useState(0)
  const seen = useRef(new Set())
  const [count, setCount] = useState(1)

  const next = (e, s = sub) => {
    const i = pick(facts[s].length, s === sub ? idx : -1)
    setSub(s); setIdx(i)
    seen.current.add(`${s}${i}`); setCount(seen.current.size)
    if (e) sparkle(e.clientX, e.clientY)
  }
  if (!seen.current.size) seen.current.add('Biology0')

  return (
    <section className="facts" id="facts">
      <HiddenStar id="s4" style={{ top: '12%', right: '6%' }} />
      <div className="facts-inner">
        <div className="facts-art"><Brain className="brain-big" /></div>
        <div className="facts-body">
          <h2 className="hand sec-title left">Fun science facts!</h2>
          <div className="tabs" role="tablist">
            {names.map((n) => { const I = icons[n]; return (
              <button key={n} type="button" role="tab" aria-selected={sub === n} className={sub === n ? 'on' : ''}
                onClick={(e) => next(e, n)}><I size={16} /> {n}</button>) })}
          </div>
          <div className="fact-card" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.p key={`${sub}${idx}`} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .3 }}>
                <span className="hand did">Did you know?</span> {facts[sub][idx]}
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="fact-actions">
            <button type="button" className="ghost-btn" onClick={(e) => next(e)}><RefreshCw size={16} /> Another {sub.toLowerCase()} fact</button>
            <button type="button" className="ghost-btn" onClick={(e) => next(e, names[pick(names.length, names.indexOf(sub))])}><Shuffle size={16} /> Surprise me</button>
            <span className="counter">{count} of 20 facts discovered</span>
          </div>
        </div>
      </div>
    </section>
  )
}
