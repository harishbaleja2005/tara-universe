import { useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { jarMessages } from '../data/content.js'
import { sparkle } from '../fx.js'

const shuffle = (a) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]] } return b }
const notePos = [[34, 104, -12], [104, 112, 8], [66, 134, 15], [120, 142, -6], [34, 150, 5], [90, 96, -18]]

export default function Jar() {
  const bag = useRef(shuffle(jarMessages))
  const [msg, setMsg] = useState(null)
  const [read, setRead] = useState(0)
  const reduce = useReducedMotion()

  const pull = (e) => {
    if (!bag.current.length) bag.current = shuffle(jarMessages)
    setMsg({ t: bag.current.pop(), k: Date.now() })
    setRead((r) => (r % jarMessages.length) + 1)
    sparkle(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2)
  }

  return (
    <section className="jar-sec" id="jar">
      <h2 className="sec-title">The special message jar</h2>
      <p className="sec-sub">Tap the jar and a glowing note floats out.</p>
      <div className="jar-stage">
        <button type="button" className="jar-btn" onClick={pull} aria-label="Open the jar and read a random note">
          <svg viewBox="0 0 200 280" className="jar-svg" aria-hidden="true">
            <defs>
              <radialGradient id="jglow" cx=".5" cy=".6"><stop offset="0" stopColor="#ffd36b" stopOpacity=".55" /><stop offset="1" stopColor="#ffd36b" stopOpacity="0" /></radialGradient>
              <linearGradient id="jglass" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#fff" stopOpacity=".3" /><stop offset=".3" stopColor="#fff" stopOpacity=".05" /><stop offset="1" stopColor="#fff" stopOpacity=".22" /></linearGradient>
            </defs>
            <ellipse cx="100" cy="170" rx="90" ry="100" fill="url(#jglow)" />
            <path d="M54 62h92v20q30 14 30 50v96q0 30-30 30H54q-30 0-30-30v-96q0-36 30-50Z" fill="url(#jglass)" stroke="#e8dcff" strokeWidth="3" />
            <rect x="48" y="38" width="104" height="26" rx="8" fill="#d9a35c" stroke="#b9823c" strokeWidth="2" />
            <path d="M62 38q38-24 76 0" stroke="#ff9ecf" strokeWidth="5" fill="none" strokeLinecap="round" />
            {notePos.map(([x, y, r], i) => (
              <g key={i} className="jar-note" style={{ animationDelay: `${i * .6}s` }} transform={`translate(${x} ${y}) rotate(${r})`}>
                <rect width="32" height="22" rx="3" fill="#fff6d6" stroke="#ffd36b" /><path d="M5 8h22M5 14h14" stroke="#e0a95a" strokeWidth="2" strokeLinecap="round" />
              </g>
            ))}
            <g className="fireflies">{[[60, 110], [140, 160], [90, 230], [120, 90]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="3" fill="#ffd36b" style={{ animationDelay: `${i * .8}s` }} />)}</g>
            <text x="100" y="196" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="22" fill="#fff" opacity=".95">You are</text>
            <text x="100" y="224" textAnchor="middle" fontFamily="Caveat, cursive" fontWeight="700" fontSize="32" fill="#ffe08a">Amazing</text>
            <text x="100" y="254" textAnchor="middle" fontFamily="Caveat, cursive" fontWeight="700" fontSize="32" fill="#ffe08a">Tara</text>
          </svg>
        </button>
        <div className="note-out" aria-live="polite">
          <AnimatePresence mode="wait">
            {msg ? (
              <motion.div key={msg.k} className="paper" initial={{ opacity: 0, y: reduce ? 0 : 40, scale: .8, rotate: -4 }} animate={{ opacity: 1, y: 0, scale: 1, rotate: -1.5 }} exit={{ opacity: 0 }} transition={{ type: 'spring', stiffness: 160, damping: 14 }}>
                {msg.t}
              </motion.div>
            ) : (
              <motion.div key="idle" className="paper idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Your note will appear here.</motion.div>
            )}
          </AnimatePresence>
          <button type="button" className="cta" onClick={pull}>Pull out a note</button>
          <span className="counter">{read} of {jarMessages.length} notes read</span>
        </div>
      </div>
    </section>
  )
}
