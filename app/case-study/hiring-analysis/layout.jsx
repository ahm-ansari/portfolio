import './hiring.css';

export const metadata = {
  title: 'Chennai Manpower Analytics — Workforce Intelligence Case Study',
  description:
    'End-to-end data science project analysing 7,500 candidate records to reduce attrition, optimise sourcing, and enable predictive screening for a Chennai staffing agency.',
  keywords: [
    'Hiring Process Analytics',
    'Attrition Analysis',
    'Data Science Case Study',
    'Recruitment Analytics',
    'Python SQL Data Analysis',
    'Power BI HR Dashboard',
    'ML Candidate Screening',
    'Abul Hassan Data Analyst',
  ],
  openGraph: {
    title: 'Chennai Manpower Analytics | Hiring Optimisation Case Study | Portfolio',
    description:
      '7,500 candidate records · 4 ML models · 8 KPIs · Full analytics case study with SQL, Power BI, and predictive screening roadmap.',
    url: 'https://ahm-ansari.vercel.app/case-study/hiring-analysis',
    images: [{ url: '/og-case-study.png', width: 1200, height: 630 }],
  },
};

export default function HiringLayout({ children }) {
  return children;
}
