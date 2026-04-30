import Section, { SectionLabel, SectionTitle } from './Section';
import { recommendations, timeline, projections } from '@/app/data';
import styles from './Recommendations.module.css';

export default function RecommendationsSection() {
  return (
    <Section id="recommendations">
      <SectionLabel>Strategic Recommendations</SectionLabel>
      <SectionTitle>8 Evidence-Based Actions</SectionTitle>

      <div className={styles.recGrid}>
        {recommendations.map((r) => (
          <div key={r.id} className={styles.recCard} style={{ '--accent': r.accent }}>
            <span className={styles.recId}>{r.id}</span>
            <h4 className={styles.recTitle}>{r.title}</h4>
            <p className={styles.recDesc}>{r.desc}</p>
            <div className={styles.recImpact} style={{ color: r.impactColor }}>
              ↑ {r.impact}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.bottomGrid}>
        <div className={styles.timelineCard}>
          <h3 className={styles.cardHeading}>Implementation Timeline</h3>
          <div className={styles.timeline}>
            {timeline.map((t) => (
              <div key={t.phase} className={styles.timelineItem}>
                <div className={styles.phase}>{t.phase}</div>
                <div className={styles.tlTitle}>{t.title}</div>
                <div className={styles.tlDesc}>{t.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.projCard}>
          <h3 className={styles.projHeading}>Projected Impact (12 Months)</h3>
          {projections.map((p) => (
            <div key={p.label} className={styles.progressItem}>
              <div className={styles.progressHeader}>
                <span className={styles.progressLabel}>{p.label}</span>
                <span className={styles.progressVal}>{p.val}</span>
              </div>
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${p.width}%`, background: p.color }} />
              </div>
            </div>
          ))}
          <p className={styles.projNote}>*Projections based on ~3,100 joinings/year at ₹3,233 avg cost/hire</p>
        </div>
      </div>
    </Section>
  );
}
