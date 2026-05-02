import Section, { SectionLabel, SectionTitle } from '../../components/Section';
import { findings } from '../lib/data'; 
import styles from './Findings.module.css';

export default function FindingsSection() {
  return (
    <Section id="findings">
      <SectionLabel>Key Findings</SectionLabel>
      <SectionTitle>Critical Data Discoveries</SectionTitle>
      <div className={styles.grid}>
        {findings.map((f) => (
          <div key={f.title} className={styles.card}>
            <div className={styles.num} style={{ color: f.color }}>{f.num}</div>
            <h4 className={styles.cardTitle}>{f.title}</h4>
            <p className={styles.desc}>{f.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
