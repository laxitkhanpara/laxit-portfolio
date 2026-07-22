import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Highlights } from './components/Highlights'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { OpenSource } from './components/OpenSource'
import { Awards } from './components/Awards'
import { MomentGallery } from './components/MomentGallery'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Cursor } from './components/Cursor'
import { ScrollProgress } from './components/ScrollProgress'
import { profile } from './content'

export default function App() {
  return (
    <>
      <Cursor />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Highlights />
        <Experience />
        <Projects />
        <OpenSource />
        <MomentGallery />
        <Awards />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer">
        © {new Date().getFullYear()} {profile.name} · Engineered to impress · React · Three.js · Motion
      </footer>
    </>
  )
}
