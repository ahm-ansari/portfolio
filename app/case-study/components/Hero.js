import { heroMeta, kpis } from '@/app/data';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.eyebrow}>◆ Workforce Intelligence Platform</div>
        <h1 className={styles.heading}>
          Hiring Analytics for<br />
          <em>Chennai Manpower Agency</em>
        </h1>
        <p className={styles.sub}>
          End-to-end data science project transforming 7,500 candidate records into
          actionable recruitment intelligence — reducing attrition, optimising
          sourcing, and enabling predictive screening.
        </p>
        <div className={styles.metaRow}>
          {heroMeta.map((m) => (
            <div key={m.label} className={styles.metaItem}>
              <span className={styles.metaLabel}>{m.label}</span>
              <span className={styles.metaValue}>{m.value}</span>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.kpiStrip}>
        {kpis.map((k) => (
          <div key={k.label} className={styles.kpiItem}>
            <span className={styles.kpiNum}>{k.num}</span>
            <span className={styles.kpiLbl}>{k.label}</span>
          </div>
        ))}
      </div>
    </>
  );
}
