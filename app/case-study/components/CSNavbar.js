'use client';
import styles from './CSNavbar.module.css';
import Link from 'next/link';


export default function CSNavbar({ title, style, logo, links, year }) {
  return (
    <nav className={styles.nav} style={{ background: style }}>
      <Link className={styles.blink} href="/#projects"> ← Back to Portfolio </Link>
      <div className={styles.logo}>
        Case Study of  <span style={{ color: logo }}>{title}</span>
      </div>
      <ul className={styles.links}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <span className={styles.tag} style={{ background: logo }}>Case Study · {year}</span>
    </nav>
  );
}
