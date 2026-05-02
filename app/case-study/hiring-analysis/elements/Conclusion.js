import Section, { SectionLabel, SectionTitle } from '../../components/Section';
import { techStack, conclusionStats } from '../lib/data';
import styles from './Conclusion.module.css';

export function StackSection() {
  return (
    <Section id="stack">
      <SectionLabel>Project Structure</SectionLabel>
      <SectionTitle>GitHub-Ready Portfolio Project</SectionTitle>
      <div className={styles.stackGrid}>
        <div className={styles.card}>
          <h3 className={styles.cardH}>📁 Folder Structure</h3>
          <pre className={styles.pre}>{`chennai-manpower-analytics/
├── data/
│   ├── raw_hiring_data.csv
│   ├── clean_hiring_data.csv
│   ├── kpis.json
│   └── summary.json
├── notebooks/
│   ├── 01_data_generation.ipynb
│   ├── 02_eda_analysis.ipynb
│   ├── 03_predictive_model.ipynb
│   └── 04_insights_report.ipynb
├── src/
│   ├── generate_all.py
│   ├── data_cleaner.py
│   ├── feature_engineering.py
│   └── model_trainer.py
├── charts/  (12 PNG exports)
├── reports/
│   ├── case_study.html
│   └── stakeholder_deck.pptx
└── README.md`}</pre>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardH}>🛠 Tech Stack</h3>
          {techStack.map((t) => (
            <div key={t.name} className={styles.techItem}>
              <span className={styles.techName}>{t.name}</span>
              <span className={styles.techRole}>{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function ConclusionSection() {
  return (
    <Section id="conclusion">
      <SectionLabel>Conclusion</SectionLabel>
      <SectionTitle>Summary &amp; Strategic Outlook</SectionTitle>

      <blockquote className={styles.callout}>
        <p>
          "This analysis demonstrates that the Chennai Manpower Agency's primary challenge is not a volume
          problem — it is a precision problem. The data reveals highly actionable patterns: salary gaps drive
          attrition, LinkedIn drives quality, and attitude scores predict selection. Fixing these three levers
          alone could generate over ₹6 lakhs in annual savings while improving client satisfaction scores
          across all 15 accounts."
        </p>
        <cite>— Case Study Conclusion, Workforce Intelligence Platform, April 2026</cite>
      </blockquote>

      <div className={styles.statRow}>
        {conclusionStats.map((s) => (
          <div key={s.label} className={styles.pill}>
            <span className={styles.pillNum}>{s.num}</span>
            <span className={styles.pillLbl}>{s.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
