// Tiny canvas particle engine used for sparkles and confetti.
let canvas = null
let ctx = null
let parts = []
let raf = 0
const COLORS = ['#ffd36b', '#ff9ecf', '#c77dff', '#8defff', '#ffc9a8', '#ffffff']
const GLYPHS = ['✦', '✧', '★', '✿', '●', '·']

export function registerFx(el) {
  canvas = el
  ctx = el ? el.getContext('2d') : null
  if (!el) { cancelAnimationFrame(raf); parts = [] }
}

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function loop() {
  if (!ctx) return
  const w = canvas.clientWidth, h = canvas.clientHeight
  ctx.clearRect(0, 0, w, h)
  parts = parts.filter(p => p.life > 0 && p.y < h + 40)
  for (const p of parts) {
    p.vy += p.g
    p.x += p.vx
    p.y += p.vy
    p.vx *= 0.99
    p.rot += p.vr
    p.life -= 1
    ctx.save()
    ctx.globalAlpha = Math.max(0, Math.min(1, p.life / 30))
    ctx.translate(p.x, p.y)
    ctx.rotate(p.rot)
    ctx.fillStyle = p.color
    ctx.shadowColor = p.color
    ctx.shadowBlur = 8
    ctx.font = `${p.size}px sans-serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(p.glyph, 0, 0)
    ctx.restore()
  }
  raf = parts.length ? requestAnimationFrame(loop) : 0
  if (!parts.length) ctx.clearRect(0, 0, w, h)
}

function spawn(x, y, n, o) {
  if (!ctx || reduced()) return
  for (let i = 0; i < n; i++) {
    const a = o.spread === 'up' ? -Math.PI / 2 + (Math.random() - 0.5) * 1.6 : Math.random() * Math.PI * 2
    const s = o.speed * (0.4 + Math.random() * 0.8)
    parts.push({
      x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s, g: o.gravity,
      rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3,
      size: o.size[0] + Math.random() * (o.size[1] - o.size[0]),
      color: COLORS[(Math.random() * COLORS.length) | 0],
      glyph: GLYPHS[(Math.random() * GLYPHS.length) | 0],
      life: o.life * (0.7 + Math.random() * 0.5),
    })
  }
  if (!raf) raf = requestAnimationFrame(loop)
}

export const sparkle = (x, y) => spawn(x, y, 14, { speed: 4, gravity: 0.08, size: [10, 20], life: 50 })
export const confetti = (x = window.innerWidth / 2, y = window.innerHeight * 0.7) =>
  spawn(x, y, 90, { speed: 15, gravity: 0.32, size: [14, 28], life: 110, spread: 'up' })
export const sparkleFrom = (e) => {
  const r = e.currentTarget.getBoundingClientRect()
  sparkle(r.left + r.width / 2, r.top + r.height / 2)
}
