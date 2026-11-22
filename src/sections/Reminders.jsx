import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Astro, Panda, Brain, Flask, Planet, Moon, Cat } from '../art/index.jsx'
import { reminders } from '../data/content.js'
import { sparkleFrom } from '../fx.js'
import { HiddenStar } from '../ui.jsx'

const Art = ({ k }) => ({
  panda: <Panda className="r-art" />, flask: <Flask className="r-art" color="#8defff" mini />,
  astro: <Astro className="r-art" />, brain: <Brain className="r-art" />,
  planet: <Planet className="r-art" a="#ffe08a" b="#ff7eb6" />,
  moon: <div className="r-art moon-cat"><Moon className="r-moon" /><Cat className="r-cat" /></div>,
}[k])

export default function Reminders() {
  const [open, setOpen] = useState({})
  const reduce = useReducedMotion()
  return (
    <section className="reminders" id="reminders">
      <HiddenStar id="s2" style={{ top: '10px', right: '9%' }} />
      <h2 className="hand sec-title">Some little reminders… just for you</h2>
      <div className="r-grid">
        {reminders.map((r, i) => (
          <motion.button key={r.id} type="button" className={`r-card ${open[r.id] ? 'open' : ''}`}
            initial={reduce ? false : { opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .4 }} transition={{ delay: i * .08, duration: .6 }}
            whileHover={reduce ? {} : { y: -6 }} aria-expanded={!!open[r.id]}
            onClick={(e) => { sparkleFrom(e); setOpen(o => ({ ...o, [r.id]: !o[r.id] })) }}>
            <Art k={r.art} />
            <span className="r-text"><span>{r.text}</span>
              <motion.small initial={false} animate={{ height: open[r.id] ? 'auto' : 0, opacity: open[r.id] ? 1 : 0 }}>{r.more}</motion.small>
            </span>
          </motion.button>
        ))}
      </div>
      <p className="tiny-hint hand">tap a card for a bonus note</p>
    </section>
  )
}
