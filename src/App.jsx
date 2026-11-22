import Starfield from './Starfield.jsx'
import { UiProvider, FxLayer } from './ui.jsx'
import Hero, { Nav } from './sections/Hero.jsx'
import Reminders from './sections/Reminders.jsx'
import Science from './sections/Science.jsx'
import Facts from './sections/Facts.jsx'
import Friendship from './sections/Friendship.jsx'
import Jar from './sections/Jar.jsx'
import Final from './sections/Final.jsx'
import Footer from './sections/Footer.jsx'

export default function App() {
  return (
    <UiProvider>
      <div className="nebula" aria-hidden="true" />
      <Starfield />
      <Nav />
      <main>
        <Hero />
        <Reminders />
        <Science />
        <Facts />
        <Friendship />
        <Jar />
        <Final />
      </main>
      <Footer />
      <FxLayer />
    </UiProvider>
  )
}
