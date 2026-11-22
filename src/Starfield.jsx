import { useEffect, useRef } from 'react'

export default function Starfield() {
  const ref = useRef(null)
  useEffect(() => {
    const c = ref.current, g = c.getContext('2d')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0, h = 0, stars = [], shoot = null, raf = 0, t = 0, running = true
    const fit = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth; h = window.innerHeight
      c.width = w * dpr; c.height = h * dpr
      g.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.min(220, Math.floor((w * h) / 7000))
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h, r: Math.random() * 1.4 + .3,
        p: Math.random() * 6.28, s: Math.random() * .03 + .008,
        hue: [260, 300, 190, 40, 0][(Math.random() * 5) | 0],
      }))
      draw()
    }
    function draw() {
      g.clearRect(0, 0, w, h)
      const off = window.scrollY
      for (const s of stars) {
        const a = reduce ? .6 : .35 + .65 * Math.abs(Math.sin(s.p + t * s.s))
        const y = ((s.y - off * .04 * s.r) % h + h) % h
        g.fillStyle = `hsla(${s.hue},${s.hue ? 80 : 0}%,${s.hue ? 82 : 100}%,${a})`
        g.beginPath(); g.arc(s.x, y, s.r, 0, 6.283); g.fill()
      }
      if (shoot) {
        const k = shoot
        const grad = g.createLinearGradient(k.x, k.y, k.x - k.vx * 8, k.y - k.vy * 8)
        grad.addColorStop(0, 'rgba(255,255,255,.9)'); grad.addColorStop(1, 'rgba(255,255,255,0)')
        g.strokeStyle = grad; g.lineWidth = 1.6
        g.beginPath(); g.moveTo(k.x, k.y); g.lineTo(k.x - k.vx * 8, k.y - k.vy * 8); g.stroke()
      }
    }
    function tick() {
      if (!running) return
      t++
      if (shoot) { shoot.x += shoot.vx; shoot.y += shoot.vy; if (shoot.x > w + 80 || shoot.y > h + 80) shoot = null }
      else if (Math.random() < .002) shoot = { x: Math.random() * w * .6, y: Math.random() * h * .35, vx: 9, vy: 4 }
      draw()
      raf = requestAnimationFrame(tick)
    }
    const vis = () => {
      running = !document.hidden
      if (running && !reduce) { cancelAnimationFrame(raf); raf = requestAnimationFrame(tick) }
    }
    fit()
    window.addEventListener('resize', fit)
    document.addEventListener('visibilitychange', vis)
    if (!reduce) raf = requestAnimationFrame(tick)
    else window.addEventListener('scroll', draw, { passive: true })
    return () => {
      running = false
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', fit)
      window.removeEventListener('scroll', draw)
      document.removeEventListener('visibilitychange', vis)
    }
  }, [])
  return <canvas ref={ref} className="starfield" aria-hidden="true" />
}
