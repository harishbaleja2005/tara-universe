import { useId } from 'react'

const reduce = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function Girl() {
  const u = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 400 440" className="girl-svg" role="img" aria-label="Illustration of a cheerful girl with her hands on her cheeks">
      <defs>
        <linearGradient id={`h${u}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#7a4733" /><stop offset="1" stopColor="#3a1f19" /></linearGradient>
        <linearGradient id={`s${u}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#ffe6d6" /><stop offset="1" stopColor="#f8c3a8" /></linearGradient>
        <linearGradient id={`k${u}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#fff8f2" /><stop offset="1" stopColor="#e7d6cf" /></linearGradient>
        <filter id={`g${u}`}><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
      </defs>
      <g className="girl-breathe">
        <path d="M200 42C112 42 84 122 92 202C98 272 72 332 92 410L310 410C330 332 302 272 308 202C316 122 288 42 200 42Z" fill={`url(#h${u})`} />
        <path d="M66 440C70 362 108 320 170 292L230 292C292 320 330 362 334 440Z" fill={`url(#k${u})`} />
        <path d="M120 400q10-30 6-60M280 400q-10-30-6-60M200 340v100" stroke="#d9c4bb" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".7" />
        <rect x="176" y="248" width="48" height="56" rx="22" fill="#f2b99f" />
        <ellipse cx="200" cy="192" rx="84" ry="88" fill={`url(#s${u})`} />
        <ellipse cx="156" cy="218" rx="22" ry="12" fill="#ff8fa8" opacity=".55" />
        <ellipse cx="244" cy="218" rx="22" ry="12" fill="#ff8fa8" opacity=".55" />
        <g className="girl-eyes" stroke="#3a1f19" strokeWidth="5" strokeLinecap="round" fill="none">
          <path d="M150 188Q168 168 186 188" /><path d="M214 188Q232 168 250 188" />
          <path d="M148 184l-6-4M252 184l6-4" strokeWidth="3.5" />
        </g>
        <path d="M184 224Q200 246 216 224Z" fill="#e0687e" stroke="#c2566b" strokeWidth="3" strokeLinejoin="round" />
        <path d="M197 208q3 4 6 0" stroke="#e5a58f" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M114 176C116 92 158 62 200 64C244 62 286 94 288 176C264 138 238 116 204 112C168 116 140 138 114 176Z" fill={`url(#h${u})`} />
        <path d="M150 100Q176 82 204 90M226 84Q252 90 266 112" stroke="#a0674c" strokeWidth="4" fill="none" strokeLinecap="round" opacity=".6" />
        <path d="M100 216C84 290 98 346 86 404C122 382 132 304 126 236Z" fill={`url(#h${u})`} />
        <path d="M300 216C316 290 302 346 314 404C278 382 268 304 274 236Z" fill={`url(#h${u})`} />
        <path d="M96 446L124 268" stroke={`url(#k${u})`} strokeWidth="52" strokeLinecap="round" />
        <path d="M304 446L276 268" stroke={`url(#k${u})`} strokeWidth="52" strokeLinecap="round" />
        <path d="M112 300l20 8M288 300l-20 8" stroke="#d9c4bb" strokeWidth="4" strokeLinecap="round" />
        <ellipse cx="128" cy="240" rx="25" ry="27" fill={`url(#s${u})`} />
        <ellipse cx="272" cy="240" rx="25" ry="27" fill={`url(#s${u})`} />
        <path d="M118 232q-6 8 0 16M280 248q6-8 0-16" stroke="#e5a58f" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <g transform="translate(272 118)">
          {[0, 72, 144, 216, 288].map(a => <ellipse key={a} cx="0" cy="-11" rx="7" ry="11" fill="#ffb3d4" transform={`rotate(${a})`} />)}
          <circle r="5" fill="#ffd36b" />
        </g>
        <g filter={`url(#g${u})`} transform="translate(0 -6)">
          <path d="M168 62L173 32L187 50L200 24L213 50L227 32L232 62Z" fill="#ffd36b" stroke="#ffb84d" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="200" cy="30" r="3" fill="#fff" />
        </g>
      </g>
    </svg>
  )
}

export function Cat({ star = false, className = '' }) {
  return (
    <svg viewBox="0 0 200 150" className={className} role="img" aria-label="A sleepy white cat">
      <path d="M170 120Q206 110 190 76" stroke="#fff" strokeWidth="14" fill="none" strokeLinecap="round" />
      <ellipse cx="100" cy="114" rx="80" ry="34" fill="#fff" />
      <path d="M62 50L58 12L90 36Z M138 50L142 12L110 36Z" fill="#fff" stroke="#f1e6ff" strokeWidth="2" strokeLinejoin="round" />
      <path d="M66 42L65 24L80 36Z M134 42L135 24L120 36Z" fill="#ffc2d9" />
      <ellipse cx="100" cy="72" rx="48" ry="40" fill="#fff" />
      <path d="M72 70q9-9 18 0M110 70q9-9 18 0" stroke="#4a3560" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M96 82l4 4 4-4Z" fill="#ff9ab8" />
      <path d="M92 90q4 5 8 0q4 5 8 0" stroke="#4a3560" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <ellipse cx="68" cy="86" rx="9" ry="5" fill="#ffb3cf" opacity=".6" /><ellipse cx="132" cy="86" rx="9" ry="5" fill="#ffb3cf" opacity=".6" />
      <path d="M52 80l-18-4M52 86l-18 4M148 80l18-4M148 86l18 4" stroke="#d8c8f0" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="74" cy="132" rx="16" ry="10" fill="#fff" stroke="#f1e6ff" strokeWidth="2" />
      <ellipse cx="126" cy="132" rx="16" ry="10" fill="#fff" stroke="#f1e6ff" strokeWidth="2" />
      {star && <path d="M100 100l5 11 12 1-9 8 3 12-11-6-11 6 3-12-9-8 12-1Z" fill="#ffd36b" stroke="#ffb84d" strokeWidth="1.5" strokeLinejoin="round" />}
    </svg>
  )
}

export function Astro({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <rect x="34" y="62" width="52" height="40" rx="16" fill="#f4efff" />
      <rect x="26" y="66" width="14" height="30" rx="7" fill="#d9ceff" /><rect x="80" y="66" width="14" height="30" rx="7" fill="#d9ceff" />
      <rect x="40" y="96" width="14" height="18" rx="7" fill="#e6dcff" /><rect x="66" y="96" width="14" height="18" rx="7" fill="#e6dcff" />
      <circle cx="60" cy="40" r="28" fill="#f7f3ff" />
      <rect x="40" y="28" width="40" height="26" rx="13" fill="#2a1b6b" />
      <path d="M47 36q6-5 14-3" stroke="#8defff" strokeWidth="3" fill="none" strokeLinecap="round" opacity=".8" />
      <circle cx="60" cy="80" r="4" fill="#ff9ecf" />
      <path d="M100 26l3 7 7 1-5 5 2 7-7-4-7 4 2-7-5-5 7-1Z" fill="#ffd36b" />
    </svg>
  )
}

export function Panda({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <circle cx="60" cy="56" r="44" fill="#bfeaff" opacity=".25" stroke="#bfeaff" strokeWidth="2" />
      <circle cx="38" cy="30" r="10" fill="#2b2140" /><circle cx="82" cy="30" r="10" fill="#2b2140" />
      <circle cx="60" cy="52" r="26" fill="#fff" />
      <ellipse cx="49" cy="50" rx="7" ry="9" fill="#2b2140" transform="rotate(-18 49 50)" />
      <ellipse cx="71" cy="50" rx="7" ry="9" fill="#2b2140" transform="rotate(18 71 50)" />
      <circle cx="50" cy="49" r="2.4" fill="#fff" /><circle cx="70" cy="49" r="2.4" fill="#fff" />
      <ellipse cx="60" cy="60" rx="4" ry="3" fill="#2b2140" />
      <path d="M55 65q5 4 10 0" stroke="#2b2140" strokeWidth="2" fill="none" strokeLinecap="round" />
      <ellipse cx="60" cy="92" rx="22" ry="16" fill="#fff" />
      <path d="M60 78l4 9 10 1-8 7 2 10-8-5-8 5 2-10-8-7 10-1Z" fill="#ffd36b" stroke="#ffb84d" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

export function Brain({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <path d="M60 22L22 38l38 16 38-16Z" fill="#241a5c" /><path d="M40 48v12q20 12 40 0V48l-20 8Z" fill="#2f2272" />
      <path d="M98 38v22" stroke="#ffd36b" strokeWidth="2.5" /><circle cx="98" cy="64" r="3.5" fill="#ffd36b" />
      <path d="M32 78C22 66 32 54 44 58C48 48 70 48 74 58C88 54 98 66 88 78C96 90 82 102 70 98C64 108 48 108 44 98C32 102 22 90 32 78Z" fill="#ff9ecf" />
      <path d="M60 60v38M44 72q8 4 16 0M60 82q10 4 20-2M44 90q8-4 16 0" stroke="#e66fa8" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <g stroke="#2a1b6b" strokeWidth="2.6" fill="rgba(255,255,255,.25)"><circle cx="47" cy="80" r="9" /><circle cx="73" cy="80" r="9" /><path d="M56 80h8" fill="none" /></g>
      <path d="M52 92q8 6 16 0" stroke="#2a1b6b" strokeWidth="2.4" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function Flask({ className = '', color = '#7dffb0', mini = false }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 100 120" className={className} aria-hidden="true">
      <defs><clipPath id={`c${id}`}><path d="M40 14h20v32l28 52q4 14-10 14H22q-14 0-10-14l28-52Z" /></clipPath></defs>
      <g clipPath={`url(#c${id})`}>
        <rect x="0" y="70" width="100" height="60" fill={color} opacity=".85" />
        {!mini && <g className="bubbles"><circle cx="40" cy="92" r="4" fill="#fff" opacity=".7" /><circle cx="58" cy="86" r="3" fill="#fff" opacity=".7" /><circle cx="50" cy="100" r="2.5" fill="#fff" opacity=".7" /></g>}
      </g>
      <path d="M40 14h20v32l28 52q4 14-10 14H22q-14 0-10-14l28-52Z" fill="rgba(255,255,255,.1)" stroke="#e8dcff" strokeWidth="3" strokeLinejoin="round" />
      <rect x="36" y="8" width="28" height="8" rx="4" fill="#e8dcff" />
    </svg>
  )
}

export function Planet({ className = '', a = '#ffb3d4', b = '#8b5cf6' }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 140 140" className={className} aria-hidden="true">
      <defs><radialGradient id={`p${id}`} cx=".35" cy=".3"><stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} /></radialGradient></defs>
      <path d="M18 88C4 70 40 54 80 52" stroke="#ffd36b" strokeWidth="4" fill="none" opacity=".0" />
      <circle cx="70" cy="70" r="36" fill={`url(#p${id})`} />
      <ellipse cx="70" cy="74" rx="62" ry="16" fill="none" stroke="#ffd36b" strokeWidth="4" transform="rotate(-18 70 74)" opacity=".9" strokeDasharray="190 40" />
      <circle cx="58" cy="60" r="6" fill="#fff" opacity=".2" /><circle cx="84" cy="82" r="8" fill="#fff" opacity=".15" />
    </svg>
  )
}

export function Moon({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <path d="M78 14A48 48 0 1 0 108 86A38 38 0 0 1 78 14Z" fill="#ffe08a" />
      <circle cx="40" cy="70" r="6" fill="#f5c85c" opacity=".7" /><circle cx="58" cy="94" r="4" fill="#f5c85c" opacity=".7" />
      <path d="M84 70Q96 68 98 84L98 90H76Z" fill="#fff" />
    </svg>
  )
}

export function Dna({ className = '', height = 320 }) {
  const rungs = 15, still = reduce()
  const items = Array.from({ length: rungs }, (_, i) => {
    const y = 14 + i * ((height - 28) / (rungs - 1))
    const vals = (ph) => Array.from({ length: 9 }, (_, k) => (50 + 34 * Math.sin(ph + (k / 8) * 6.283)).toFixed(1)).join(';')
    const ph = i * 0.62
    return { y, a: 50 + 34 * Math.sin(ph), b: 50 - 34 * Math.sin(ph), va: vals(ph), vb: vals(ph + Math.PI), i }
  })
  return (
    <svg viewBox={`0 0 100 ${height}`} className={className} aria-hidden="true">
      {items.map((r) => (
        <g key={r.i}>
          <line x1={r.a} x2={r.b} y1={r.y} y2={r.y} stroke="#8defff" strokeWidth="2" opacity=".55">
            {!still && <><animate attributeName="x1" dur="6s" repeatCount="indefinite" values={r.va} /><animate attributeName="x2" dur="6s" repeatCount="indefinite" values={r.vb} /></>}
          </line>
          <circle cx={r.a} cy={r.y} r="5.5" fill="#c77dff">{!still && <animate attributeName="cx" dur="6s" repeatCount="indefinite" values={r.va} />}</circle>
          <circle cx={r.b} cy={r.y} r="5.5" fill="#ff9ecf">{!still && <animate attributeName="cx" dur="6s" repeatCount="indefinite" values={r.vb} />}</circle>
        </g>
      ))}
    </svg>
  )
}

export function Butterfly({ className = '' }) {
  return (
    <svg viewBox="0 0 80 70" className={className} aria-hidden="true">
      <g className="wing-l"><path d="M40 34C26 6 4 8 8 30C10 46 28 48 40 38Z" fill="#c77dff" /><path d="M40 40C30 52 18 64 28 64C38 64 40 52 40 40Z" fill="#ff9ecf" /></g>
      <g className="wing-r"><path d="M40 34C54 6 76 8 72 30C70 46 52 48 40 38Z" fill="#c77dff" /><path d="M40 40C50 52 62 64 52 64C42 64 40 52 40 40Z" fill="#ff9ecf" /></g>
      <rect x="38" y="24" width="4" height="28" rx="2" fill="#2a1b6b" />
    </svg>
  )
}

// Subject artwork for the four science cards
export function SubjectArt({ id }) {
  if (id === 'bio') return (
    <div className="sart"><Dna className="sart-dna" height={200} /><Butterfly className="sart-bf" />
      <svg viewBox="0 0 80 80" className="sart-cell" aria-hidden="true"><circle cx="40" cy="40" r="32" fill="rgba(125,255,176,.18)" stroke="#7dffb0" strokeWidth="2.5" /><circle cx="44" cy="38" r="11" fill="#7dffb0" opacity=".55" /><circle cx="26" cy="52" r="4" fill="#fff" opacity=".6" /><circle cx="52" cy="58" r="3" fill="#fff" opacity=".6" /></svg>
    </div>)
  if (id === 'chem') return (
    <div className="sart"><Flask className="sart-flask" color="#ff9ecf" />
      <svg viewBox="0 0 120 100" className="sart-mol" aria-hidden="true"><g stroke="#e8dcff" strokeWidth="3"><path d="M60 50L24 28M60 50L96 28M60 50V90" /></g><circle cx="60" cy="50" r="14" fill="#c77dff" /><circle cx="24" cy="28" r="9" fill="#8defff" /><circle cx="96" cy="28" r="9" fill="#8defff" /><circle cx="60" cy="90" r="8" fill="#ffd36b" /></svg>
    </div>)
  if (id === 'phys') return (
    <div className="sart"><Planet className="sart-planet" />
      <svg viewBox="0 0 120 120" className="sart-orbit" aria-hidden="true"><ellipse cx="60" cy="60" rx="52" ry="20" fill="none" stroke="#8defff" strokeWidth="1.6" strokeDasharray="4 6" transform="rotate(-24 60 60)" /><circle cx="104" cy="46" r="5" fill="#ffd36b" /></svg>
    </div>)
  return (
    <div className="sart sart-math"><span className="inf">∞</span><span className="pi">π</span><span className="sig">∑</span><span className="eq">e<sup>iπ</sup>+1=0</span></div>)
}

export function Molecule({ className = '' }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <g stroke="#e8dcff" strokeWidth="2.4" opacity=".8"><path d="M30 40L60 24L90 40V76L60 92L30 76Z" fill="none" /><path d="M60 24V8M90 76l16 10M30 76L14 86" /></g>
      {[[30, 40, '#c77dff'], [60, 24, '#8defff'], [90, 40, '#ff9ecf'], [90, 76, '#ffd36b'], [60, 92, '#c77dff'], [30, 76, '#8defff']].map(([x, y, c], i) => <circle key={i} cx={x} cy={y} r="7" fill={c} />)}
      <circle cx="60" cy="8" r="5" fill="#fff" /><circle cx="106" cy="86" r="5" fill="#fff" /><circle cx="14" cy="86" r="5" fill="#fff" />
    </svg>
  )
}
