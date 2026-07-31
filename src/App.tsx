import { useState } from 'react'
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

  return (
    <div className="app">
      <div className="bg-orb bg-orb-a" aria-hidden />
      <div className="bg-orb bg-orb-b" aria-hidden />
      <div className="layout">
        <Sidebar />
        <div className="card article has-scrollbar">
          <Navbar active={tab} onChange={setTab} />
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
      </div>
    </div>
  )
}
