import Section, { SectionLabel, SectionTitle, SectionDesc } from './Section';
import { problems, objectives } from '../hiring-analysis/lib/data';
import styles from './Overview.module.css';

export function OverviewSection() {
  return (
    <Section id="overview">
      <SectionLabel>Project Overview</SectionLabel>
      <SectionTitle>Business Context &amp; Problem Statement</SectionTitle>
      <SectionDesc>
        The Chennai Manpower Agency operates as an outsourcing partner supplying skilled and
        semi-skilled workers to 15 major client companies across manufacturing, IT, healthcare,
        and industrial sectors. Despite steady demand growth, systemic recruitment inefficiencies
        erode margins and damage client relationships.
      </SectionDesc>
      <div className={styles.grid}>
        {problems.map((p) => (
          <div key={p.title} className={styles.card}>
            <div className={styles.icon} style={{ background: p.bg }}>{p.icon}</div>
            <div>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function ObjectivesSection() {
  return (
    <Section id="objectives">
      <SectionLabel>Project Objectives</SectionLabel>
      <SectionTitle>Measurable Goals &amp; Success Criteria</SectionTitle>
      <div className={styles.objGrid}>
        {objectives.map((o) => (
          <div key={o.title} className={styles.objCard}>
            <div className={styles.objIcon} style={{ background: o.bg }}>{o.icon}</div>
            <h3>{o.title}</h3>
            <p>{o.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
