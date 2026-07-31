import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Sidebar } from './components/Sidebar'
import { Navbar, type Tab } from './components/Navbar'
import { About } from './components/About'
import { Resume } from './components/Resume'
import { Portfolio } from './components/Portfolio'
import { Contact } from './components/Contact'
import { pageTransition } from './motion'

export default function App() {
  const [tab, setTab] = useState<Tab>('About')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [tab])

  return (
    <div className="app">
      <div className="bg-orb bg-orb-a" aria-hidden />
      <div className="bg-orb bg-orb-b" aria-hidden />
      <div className="layout">
        <Sidebar />
        <main className="card article">
          <Navbar active={tab} onChange={setTab} />
          <div className="article-scroll" ref={scrollRef}>
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={pageTransition.initial}
                animate={pageTransition.animate}
                exit={pageTransition.exit}
                transition={pageTransition.transition}
              >
                {tab === 'About' ? <About /> : null}
                {tab === 'Resume' ? <Resume /> : null}
                {tab === 'Portfolio' ? <Portfolio /> : null}
                {tab === 'Contact' ? <Contact /> : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  )
}
