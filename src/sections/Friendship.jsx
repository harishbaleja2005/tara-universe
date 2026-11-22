import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { envelopes } from '../data/content.js'
import { Butterfly } from '../art/index.jsx'
import { sparkleFrom } from '../fx.js'

const bars = [['Intelligence', 87, 'var(--cyan)'], ['Random questions', 10, 'var(--pink)'], ['Unpredictable behaviour', 3, 'var(--gold)']]

export default function Friendship() {
  const [open, setOpen] = useState(null)
  const reduce = useReducedMotion()
  return (
    <section className="friendship" id="friendship">
      <Butterfly className="bf bf1" /><Butterfly className="bf bf2" />
      <h2 className="sec-title">Some people simply make <em>the world more interesting.</em></h2>
      <p className="sec-sub wide">Good friendships aren't about being perfect every day. They're about appreciating the little things, laughing at random nonsense, sharing interesting thoughts, and being comfortable enough to be yourself.</p>

      <div className="env-row">
        {envelopes.map((e) => {
          const on = open === e.id
          return (
            <button key={e.id} type="button" className={`env ${on ? 'on' : ''}`} aria-expanded={on}
              onClick={(ev) => { setOpen(on ? null : e.id); if (!on) sparkleFrom(ev) }}>
              <span className="env-back"><span className="env-flap" /></span>
              <AnimatePresence>
                {on && <motion.span className="env-letter" initial={{ y: 20, opacity: 0 }} animate={{ y: reduce ? 0 : -46, opacity: 1 }} exit={{ y: 10, opacity: 0 }} transition={{ duration: .5 }}>{e.text}</motion.span>}
              </AnimatePresence>
              <span className="env-front" />
              <span className="env-label hand">{e.label}</span>
            </button>
          )
        })}
      </div>

      <motion.div className="research" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }}>
        <h3 className="hand">Highly unofficial research: Tara, by composition</h3>
        {bars.map(([l, v, c], i) => (
          <div className="bar-row" key={l}>
            <span>{l}</span>
            <div className="bar"><motion.i style={{ background: c }} initial={{ width: 0 }} whileInView={{ width: `${v}%` }} viewport={{ once: true }} transition={{ duration: 1.1, delay: .2 + i * .2 }} /></div>
            <b>{v}%</b>
          </div>
        ))}
        <small>Sample size: one. Peer review: pending.</small>
      </motion.div>
    </section>
  )
}
