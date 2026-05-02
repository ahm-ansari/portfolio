import Section, { SectionLabel, SectionTitle, SectionDesc } from './Section';
import { methodSteps, schemaRows } from '../hiring-analysis/lib/data';
import styles from './Methodology.module.css';

const badgeColor = {
  String: styles.badgeTeal,
  Mixed: styles.badgeTeal,
  Categorical: styles.badgeTeal,
  Float: styles.badgeMed,
  Integer: styles.badgeMed,
  Binary: styles.badgeHigh,
};

export default function MethodologySection() {
  return (
    <Section id="methodology">
      <SectionLabel>Technical Approach</SectionLabel>
      <SectionTitle>Project Architecture &amp; Methodology</SectionTitle>
      <SectionDesc>
        A 6-phase end-to-end data science pipeline transforms raw recruiting logs into
        actionable intelligence, using Python as the primary language and a blend of
        statistical analysis and machine learning.
      </SectionDesc>

      <div className={styles.methodGrid}>
        {methodSteps.map((s) => (
          <div key={s.num} className={styles.methodCard} data-num={s.num}>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
            <div className={styles.techRow}>
              {s.tech.map((t) => (
                <span key={t} className={styles.techBadge}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.schemaHeader}>
        <SectionLabel>Dataset Schema</SectionLabel>
        <h3 className={styles.schemaTitle}>24-Column Candidate Record Structure</h3>
      </div>

      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Field</th><th>Type</th><th>Description</th><th>Coverage</th>
            </tr>
          </thead>
          <tbody>
            {schemaRows.map((r) => (
              <tr key={r.field}>
                <td><code>{r.field}</code></td>
                <td><span className={`${styles.badge} ${badgeColor[r.type] || styles.badgeTeal}`}>{r.type}</span></td>
                <td>{r.desc}</td>
                <td>{r.cov}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
