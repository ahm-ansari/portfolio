export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="container footer__inner">
        <div className="footer__logo">
          AH<span>.</span>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} Abul Hassan Mohamed Ansari · Doha, Qatar
        </p>
        <nav className="footer__links" aria-label="Footer navigation">
          <a href="https://linkedin.com/in/ahm-ansari" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/ahm-ansari" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:ahm.ansari.m@gmail.com">Email</a>
        </nav>
      </div>
    </footer>
  )
}
