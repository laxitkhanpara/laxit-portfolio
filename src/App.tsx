import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Navbar, type Tab } from './components/Navbar'
import { About } from './components/About'
import { Resume } from './components/Resume'
import { Portfolio } from './components/Portfolio'
import { Contact } from './components/Contact'

export default function App() {
  const [tab, setTab] = useState<Tab>('About')

  return (
    <div className="app">
      <div className="layout">
        <Sidebar />
        <div className="card article has-scrollbar">
          <Navbar active={tab} onChange={setTab} />
          {tab === 'About' ? <About /> : null}
          {tab === 'Resume' ? <Resume /> : null}
          {tab === 'Portfolio' ? <Portfolio /> : null}
          {tab === 'Contact' ? <Contact /> : null}
        </div>
      </div>
    </div>
  )
}
