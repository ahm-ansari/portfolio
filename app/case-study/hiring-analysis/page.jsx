import CSNavbar from '../components/CSNavbar';
import Hero from '../components/Hero';
import { OverviewSection, ObjectivesSection } from '../components/Overview';
import MethodologySection from '../components/Methodology';
import EDASection from '../components/EDA';
import FindingsSection from '../components/Findings';
import MLSection from '../components/ML';
import RecommendationsSection from '../components/Recommendations';
import { StackSection, ConclusionSection } from '../components/Conclusion';
import Footer from '../components/Footer';

export default function HiringAnalyticsCaseStudy() {
  const links = [
    { href: '#overview', label: 'Overview' },
    { href: '#objectives', label: 'Goals' },
    { href: '#methodology', label: 'Method' },
    { href: '#eda', label: 'EDA' },
    { href: '#findings', label: 'Findings' },
    { href: '#ml', label: 'ML' },
    { href: '#recommendations', label: 'Strategy' },
  ];
  return (
    <>
      <CSNavbar title="Hiring Analytics" style="#0c1a2e" logo="#0d7a6e" links={links} year="2025" />
      <main>
        <Hero />
        <OverviewSection />
        <ObjectivesSection />
        <MethodologySection />
        <EDASection />
        <FindingsSection />
        <MLSection />
        <RecommendationsSection />
        <StackSection />
        <ConclusionSection />
      </main>
      <Footer />
    </>
  );
}
