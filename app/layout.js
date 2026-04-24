import './globals.css'

export const metadata = {
  metadataBase: new URL('https://abulhassan.dev'),
  title: {
    default: 'Abul Hassan Mohamed Ansari | Data Analyst & Full-Stack Developer in Qatar',
    template: '%s | Abul Hassan Mohamed Ansari',
  },
  description:
    'Senior Data Analyst and Full-Stack Developer with 15+ years of experience in Python, SQL, Power BI, Machine Learning, Generative AI, RAG, and Web Application Development. Based in Doha, Qatar.',
  keywords: [
    'Data Analyst Qatar',
    'Full Stack Developer Qatar',
    'Python Developer Doha',
    'Power BI Consultant',
    'Machine Learning Engineer',
    'Generative AI Developer',
    'RAG Developer',
    'NextJS Developer',
    'React Developer Qatar',
    'Abul Hassan Mohamed Ansari',
    'SQL Expert',
    'Tableau Developer',
    'Web Application Development',
    'ETL Pipeline',
    'Business Intelligence',
  ],
  authors: [{ name: 'Abul Hassan Mohamed Ansari', url: 'https://linkedin.com/in/ahm-ansari' }],
  creator: 'Abul Hassan Mohamed Ansari',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abulhassan.dev',
    siteName: 'Abul Hassan Mohamed Ansari Portfolio',
    title: 'Abul Hassan Mohamed Ansari | Data Analyst & Full-Stack Developer',
    description:
      'Senior Data Analyst & Developer with 15+ years of experience in Python, Power BI, Machine Learning, Gen AI, RAG and Web Development. Available for hire in Qatar.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Abul Hassan Mohamed Ansari Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abul Hassan Mohamed Ansari | Data Analyst & Developer',
    description:
      'Senior Data Analyst & Full-Stack Developer with 15+ years of hybrid experience in AI, ML, Data Analytics & Web Development.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://abulhassan.dev',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Abul Hassan Mohamed Ansari',
              jobTitle: 'Senior Data Analyst & Full-Stack Developer',
              description:
                'Data Analyst and Developer with 15+ years of experience in Python, SQL, Power BI, Machine Learning, and Web Development.',
              url: 'https://abulhassan.dev',
              sameAs: [
                'https://linkedin.com/in/ahm-ansari',
                'https://github.com/ahm-ansari',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Doha',
                addressCountry: 'QA',
              },
              knowsAbout: [
                'Data Analysis',
                'Machine Learning',
                'Python',
                'SQL',
                'Power BI',
                'Generative AI',
                'RAG',
                'React',
                'Next.js',
                'Web Development',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
