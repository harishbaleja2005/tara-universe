import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Cat } from '../art/index.jsx'
import { surprises } from '../data/content.js'
import { confetti, sparkle } from '../fx.js'

export default function Final() {
  const [out, setOut] = useState(null)
  const [n, setN] = useState(0)

  const done = (e) => {
    confetti(e.clientX, e.clientY)
    setOut('Experiment complete. Smile detected. Results are looking excellent. 🎉')
  }
  const more = (e) => {
    const t = surprises[n % surprises.length]
    setN(n + 1)
    sparkle(e.clientX, e.clientY); setTimeout(() => sparkle(e.clientX + 30, e.clientY - 20), 120)
    setOut(t)
  }
  return (
    <section className="final" id="final">
      <Cat className="final-cat" star />
      <h2 className="sec-title">One last little experiment!</h2>
      <p className="sec-sub wide">If this tiny universe managed to add even one smile to your day, then the experiment was successful.</p>
      <div className="final-actions">
        <button type="button" className="cta" onClick={done}>Mission accomplished!</button>
        <button type="button" className="ghost-btn big" onClick={more}>Show me another surprise</button>
      </div>
      <div className="final-out" aria-live="polite">
        <AnimatePresence mode="wait">
          {out && <motion.p key={out} initial={{ opacity: 0, y: 14, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0 }}>{out}</motion.p>}
        </AnimatePresence>
      </div>
    </section>
  )
}
