import { useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { subjects } from '../data/content.js'
import { SubjectArt } from '../art/index.jsx'
import { sparkleFrom } from '../fx.js'
import { HiddenStar } from '../ui.jsx'

function Card({ s, i }) {
  const [flip, setFlip] = useState(false)
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const move = (e) => {
    if (reduce || e.pointerType === 'touch') return
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5
    ref.current.style.setProperty('--rx', `${-y * 9}deg`)
    ref.current.style.setProperty('--ry', `${x * 11}deg`)
  }
  const leave = () => { ref.current.style.setProperty('--rx', '0deg'); ref.current.style.setProperty('--ry', '0deg') }
  return (
    <motion.div className="tilt" initial={reduce ? false : { opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: .3 }} transition={{ delay: i * .1, duration: .7 }}>
      <button ref={ref} type="button" className={`s-card ${s.tone} ${flip ? 'flipped' : ''}`} onPointerMove={move} onPointerLeave={leave}
        aria-pressed={flip} onClick={(e) => { setFlip(f => !f); sparkleFrom(e) }}>
        <span className="face front">
          <SubjectArt id={s.id} />
          <span className="s-name">{s.name}</span>
          <span className="s-line">{s.line}</span>
          <span className="s-flip hand">tap to flip</span>
        </span>
        <span className="face back">
          <span className="s-name">{s.name} lab note</span>
          <span className="s-line">{s.back}</span>
          <span className="s-flip hand">tap to flip back</span>
        </span>
      </button>
    </motion.div>
  )
}

export default function Science() {
  return (
    <section className="science" id="science">
      <HiddenStar id="s3" style={{ bottom: '4%', left: '5%' }} />
      <h2 className="sec-title">Science &amp; Tara: <em>a perfect combination</em></h2>
      <p className="sec-sub">Four subjects, four slightly unscientific observations.</p>
      <div className="s-grid">{subjects.map((s, i) => <Card key={s.id} s={s} i={i} />)}</div>
    </section>
  )
}
