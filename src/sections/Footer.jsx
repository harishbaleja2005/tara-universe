import { HiddenStar } from '../ui.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <HiddenStar id="s5" style={{ top: '30%', left: '12%' }} />
      <p className="hand big-sign">Keep shining, Tara. The world needs your kind of curious.</p>
      <p className="flowers" aria-hidden="true">✿ ✧ ❀ ✦ ✿</p>
      <p className="signoff">Made with a lot of stars and a little code, by a friend who thinks you're pretty great.</p>
    </footer>
  )
}
