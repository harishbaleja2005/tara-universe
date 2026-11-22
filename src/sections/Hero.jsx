import { useState } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Atom, Sparkles } from 'lucide-react'
import { Girl, Cat, Dna, Flask, Planet } from '../art/index.jsx'
import { heroBubbles, notes } from '../data/content.js'
import { HiddenStar, useUi } from '../ui.jsx'
import { sparkle, confetti } from '../fx.js'

const links = [['Home', '#top'], ['Science Vibes', '#science'], ['Cute Facts', '#facts'], ['Special Messages', '#jar'], ['Just For You', '#final']]
const NOTE_TARGET = { bio: 'bio', chem: 'chem', phys: 'phys', math: 'math' }

export function Nav() {
  const { found, toast } = useUi()
  return (
    <header className="nav">
      <a className="brand" href="#top"><Atom size={22} /><span>For Tara</span></a>
      <nav aria-label="Sections">{links.map(([l, h]) => <a key={h} href={h}>{l}</a>)}</nav>
      <button className="pill-btn" type="button" onClick={(e) => { sparkle(e.clientX, e.clientY); toast('Confirmed by a panel of experts (one friend, mildly biased): you are amazing.') }}>
        You're amazing!
      </button>
      <span className="star-count" title="Hidden stars found">✦ {found.length}/5</span>
    </header>
  )
}

export default function Hero() {
  const [b, setB] = useState(0)
  const reduce = useReducedMotion()
  const { scrollY } = useScroll()
  const yGirl = useTransform(scrollY, [0, 600], [0, reduce ? 0 : -40])
  const yDna = useTransform(scrollY, [0, 600], [0, reduce ? 0 : 70])
  const stagger = { hidden: {}, show: { transition: { staggerChildren: .14, delayChildren: .15 } } }
  const rise = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: .8, ease: [.22, 1, .36, 1] } } }

  return (
    <section className="hero" id="top">
      <HiddenStar id="s1" style={{ top: '14%', left: '47%' }} />
      <motion.div className="hero-copy" variants={stagger} initial="hidden" animate="show">
        <motion.p variants={rise} className="hand hello">Hello, explorer ✨</motion.p>
        <motion.h1 variants={rise}><span className="name">Tara…</span><span className="tagline">You make ordinary days brighter</span></motion.h1>
        <motion.p variants={rise} className="lead">In a world of formulas and theories, you are the delightfully unpredictable variable. 
          <span className="hand"> Curious mind. Great humour. Excellent chaos.</span></motion.p>
        <motion.a variants={rise} href="#science" className="cta" onClick={(e) => sparkle(e.clientX, e.clientY)}>
          <Sparkles size={18} /> Explore Something Special
        </motion.a>
      </motion.div>

      <div className="hero-stage">
        <motion.div className="girl-wrap" style={{ y: yGirl }}>
          <div className="halo" />
          <div className="swirl" aria-hidden="true" />
          <Girl />
          <Cat className="hero-cat" star />
          <button type="button" className="bubble" onClick={(e) => { setB((b + 1) % heroBubbles.length); sparkle(e.clientX, e.clientY) }} aria-label="Tap for another compliment">
            {heroBubbles[b]}
          </button>
        </motion.div>
      </div>

      <div className="hero-side">
        <div className="notes-board">
          <h2 className="hand board-title">Science &amp; You = Perfect Combo!</h2>
          <div className="notes-grid">
            {notes.map((n, i) => (
              <motion.a key={n.id} href="#science" className={`note ${n.tone}`} style={{ rotate: [-2, 1.5, 2, -1.5][i] }}
                whileHover={reduce ? {} : { rotate: 0, y: -6, scale: 1.04 }} onClick={(e) => sparkle(e.clientX, e.clientY)}>
                <b>{n.subject}</b><span>{n.line}</span>
              </motion.a>
            ))}
          </div>
        </div>
        <motion.div className="side-dna" style={{ y: yDna }} aria-hidden="true"><Dna height={260} /></motion.div>
        <div className="side-flasks" aria-hidden="true"><Flask color="#7dffb0" mini /><Flask color="#c77dff" mini /></div>
        <Planet className="float-planet" />
      </div>
    </section>
  )
}
