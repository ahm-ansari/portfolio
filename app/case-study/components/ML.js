import Section, { SectionLabel, SectionTitle, SectionDesc } from './Section';
import { mlMetrics } from '../hiring-analysis/lib/data';
import { MLChart } from './Charts';
import styles from './ML.module.css';

export default function MLSection() {
  return (
    <Section id="ml">
      <SectionLabel>Predictive Modelling</SectionLabel>
      <SectionTitle>Machine Learning Results</SectionTitle>
      <SectionDesc>
        Four classification algorithms were trained to predict candidate selection outcome.
        All models used stratified 80/20 train-test split with label encoding and standard scaling.
      </SectionDesc>

      <div className={styles.metricsRow}>
        {mlMetrics.map((m) => (
          <div key={m.label} className={styles.metric}>
            <div className={styles.metricNum} style={{ color: m.color }}>{m.num}</div>
            <div className={styles.metricLbl}>{m.label}</div>
          </div>
        ))}
      </div>

      <MLChart />
    </Section>
  );
}
