import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { OpenSource } from './components/OpenSource'
import { Awards } from './components/Awards'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { profile } from './content'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Highlights />
        <Experience />
        <Projects />
        <OpenSource />
        <Awards />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer">
        © {new Date().getFullYear()} {profile.name} · Built with React · Three.js · Framer Motion
      </footer>
    </>
  )
}
