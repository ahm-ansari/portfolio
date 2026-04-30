import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.brand}>Chennai <span>Manpower</span> Analytics</div>
        <div className={styles.meta}>Workforce Intelligence Platform · Case Study · April 2026</div>
      </div>
      <div className={styles.metaRight}>
        Built with Python · pandas · scikit-learn · Matplotlib<br />
        Portfolio: Next.js · Charts: Chart.js · Dataset: 7,500 synthetic records
      </div>
    </footer>
  );
}
