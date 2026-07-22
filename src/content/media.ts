/** Media catalog mapped from your numbered prompt images (1–18). */

export const portrait = {
  alt: 'Laxit Khanpara — Software Engineer portrait',
  caption: 'Builder · AI Ninja · System architect',
}

export type Moment = {
  id: string
  title: string
  detail: string
  tag: string
  accent: string
  promptRef: string
}

export const moments: Moment[] = [
  {
    id: 'pu-hackathon',
    title: 'PU Code Hackathon',
    detail: '36-hour AR navigation sprint · CampusWay · Team with Richa & Riya Patel',
    tag: '3rd Place',
    accent: '#fb7185',
    promptRef: 'Image 8',
  },
  {
    id: 'codeshafe',
    title: 'Codeshafe Winner',
    detail: 'DSA Master — competitive programming recognition',
    tag: 'Winner',
    accent: '#f5b942',
    promptRef: 'Image 9',
  },
  {
    id: 'vadodara-win',
    title: 'Vadodara Hackathon 4.0',
    detail: '1st place among 200+ teams · GuruZone personalized AI education',
    tag: '1st Place',
    accent: '#2ee6d6',
    promptRef: 'Image 10',
  },
  {
    id: 'axpert',
    title: 'AXpert of the Month',
    detail: 'Aixtor · January 2026 · “AI Ninja” for GenAI adoption & delivery impact',
    tag: 'Employee of the Month',
    accent: '#ff6b4a',
    promptRef: 'Image 11',
  },
  {
    id: 'liferay-hackathon',
    title: 'Liferay Fragment Hackathon',
    detail: 'Marketplace Fragment Hackathon 2026 · Participant certificate',
    tag: 'Liferay',
    accent: '#7c9cff',
    promptRef: 'Image 14',
  },
  {
    id: 'liferay-ug',
    title: 'Liferay User Group Ahmedabad',
    detail: 'Junior Liferay Developer · Aixtor Technologies · Community meetup',
    tag: 'Community',
    accent: '#a78bfa',
    promptRef: 'Images 16–18',
  },
  {
    id: 'liferay-team',
    title: 'Liferay Hackathon Team',
    detail: 'Group recognition with certificates · collaborative engineering culture',
    tag: 'Team',
    accent: '#34d399',
    promptRef: 'Hackathon group photo',
  },
]

export const certVisuals = [
  {
    title: 'Liferay Application Developer',
    issued: 'May 2026',
    accent: '#2ee6d6',
    promptRef: 'Image 13',
  },
  {
    title: 'Building Enterprise Websites with Liferay',
    issued: 'Apr 2026',
    accent: '#7c9cff',
    promptRef: 'Image 15',
  },
  {
    title: 'Liferay Marketplace Fragment Hackathon 2026',
    issued: 'Apr 2026',
    accent: '#f5b942',
    promptRef: 'Image 14',
  },
]

export const projectMediaNotes: Record<string, string> = {
  integrari: 'Images 6 & 7 — RCS Devices + Voice AI Campaign Manager',
  'role-management': 'Images 1–3 — Sharshah HR admin & employee management',
  guruzone: 'Image 5 — GuruZone mentor discovery app',
  evoting: 'Image 4 — GiveVote e-voting platform',
  campusway: 'Image 8 — PU Hackathon team (AR navigation)',
}
