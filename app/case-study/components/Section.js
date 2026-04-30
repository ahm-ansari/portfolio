import styles from './Section.module.css';

export function SectionLabel({ children }) {
  return <div className={styles.label}>{children}</div>;
}

export function SectionTitle({ children }) {
  return <h2 className={styles.title}>{children}</h2>;
}

export function SectionDesc({ children }) {
  return <p className={styles.desc}>{children}</p>;
}

export default function Section({ id, children }) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.wrap}>{children}</div>
    </section>
  );
}
