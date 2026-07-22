import './ProjectMockup.css'

type Variant = 'sharshah' | 'evoting' | 'guruzone' | 'integrari-devices' | 'integrari-voice' | 'default'

export function ProjectMockup({ variant, title }: { variant: Variant; title: string }) {
  switch (variant) {
    case 'sharshah':
      return <SharshahMock title={title} />
    case 'evoting':
      return <EvotingMock title={title} />
    case 'guruzone':
      return <GuruZoneMock title={title} />
    case 'integrari-devices':
      return <IntegrariDevicesMock title={title} />
    case 'integrari-voice':
      return <IntegrariVoiceMock title={title} />
    default:
      return (
        <div className="mockup mockup-default">
          <span>{title}</span>
        </div>
      )
  }
}

function SharshahMock({ title }: { title: string }) {
  return (
    <div className="mockup mockup-sharshah" aria-label={`${title} UI preview`}>
      <aside className="mock-sidebar">
        <div className="mock-logo">Sharshah</div>
        <div className="mock-nav active">Manage Employee</div>
        <div className="mock-nav">Department</div>
        <div className="mock-nav">Leaves & Holidays</div>
      </aside>
      <div className="mock-main">
        <div className="mock-top">
          <strong>User</strong>
          <span className="mock-btn">Add User</span>
        </div>
        <div className="mock-table">
          <div className="mock-row head">
            <span>Name</span>
            <span>Department</span>
            <span>Contact</span>
          </div>
          <div className="mock-row">
            <span>ironman patel</span>
            <span>Director · Main</span>
            <span>ironman@mail.com</span>
          </div>
          <div className="mock-row">
            <span>loki odinson</span>
            <span>Executive · Surat</span>
            <span>loki@mail.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function EvotingMock({ title }: { title: string }) {
  return (
    <div className="mockup mockup-evoting" aria-label={`${title} UI preview`}>
      <div className="mock-navbar">Home · Platforms · News · Chatting</div>
      <div className="mock-hero-evote">
        <div className="mock-photos" />
        <div>
          <h4>Vote for Change, Shape the Future</h4>
          <p>Explore elections, learn candidates, cast votes effortlessly.</p>
          <span className="mock-cta-green">Give The Vote</span>
        </div>
      </div>
    </div>
  )
}

function GuruZoneMock({ title }: { title: string }) {
  return (
    <div className="mockup mockup-guruzone" aria-label={`${title} UI preview`}>
      <div className="mock-phone">
        <div className="mock-phone-notch" />
        <div className="mock-phone-screen">
          <div className="mock-phone-title">Search Your Guru</div>
          <div className="mock-search">Search mentors, skills…</div>
          <div className="mock-chips">
            <span>All</span>
            <span>Flutter</span>
            <span>Android</span>
          </div>
          <div className="mock-mentor">
            <strong>Krushang Patel</strong>
            <small>IT Engineer · 4.7 ★</small>
            <div className="mock-skill-row">
              <span>Flutter</span>
              <span>Java</span>
              <span>ML</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mock-gz-copy">
        <h4>Search Your Guru</h4>
        <p>Connect with tutors from diverse backgrounds</p>
      </div>
    </div>
  )
}

function IntegrariDevicesMock({ title }: { title: string }) {
  return (
    <div className="mockup mockup-integrari" aria-label={`${title} UI preview`}>
      <div className="mock-int-header">
        <strong>Integrari</strong>
        <span>$12,472.64</span>
      </div>
      <div className="mock-int-body">
        <div className="mock-int-side">RCS · Device</div>
        <div className="mock-int-table">
          <div className="mock-row head purple">
            <span>Phone</span>
            <span>Agent</span>
            <span>Status</span>
          </div>
          <div className="mock-row">
            <span>+971 58…</span>
            <span>Integrari</span>
            <span className="ready">Ready</span>
          </div>
          <div className="mock-row">
            <span>+972 57…</span>
            <span>Aixtor</span>
            <span className="ready">Ready</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function IntegrariVoiceMock({ title }: { title: string }) {
  return (
    <div className="mockup mockup-integrari-voice" aria-label={`${title} UI preview`}>
      <div className="mock-kpis">
        <div>
          <b>1000</b>
          <small>Contacts</small>
        </div>
        <div>
          <b>600</b>
          <small>Dialed</small>
        </div>
        <div>
          <b>80</b>
          <small>Concurrent</small>
        </div>
        <div>
          <b>220</b>
          <small>Dispositions</small>
        </div>
      </div>
      <div className="mock-chart">
        <div className="mock-pie" />
        <div>
          <strong>Regional Breakdown</strong>
          <p>US 52% · Japan 30% · France 18%</p>
        </div>
      </div>
    </div>
  )
}

export function projectMockupVariant(id: string): Variant {
  const map: Record<string, Variant> = {
    integrari: 'integrari-devices',
    'role-management': 'sharshah',
    guruzone: 'guruzone',
    evoting: 'evoting',
  }
  return map[id] ?? 'default'
}

export function projectGalleryVariant(id: string): Variant[] {
  if (id === 'integrari') return ['integrari-devices', 'integrari-voice']
  if (id === 'role-management') return ['sharshah', 'sharshah']
  return [projectMockupVariant(id)]
}
