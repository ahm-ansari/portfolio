import CSNavbar from '../components/CSNavbar'; 
import HeroSection           from './components/HeroSection'
import KPISection            from './components/KPISection'
import RevenueCharts         from './components/RevenueCharts'
import CustomerSection       from './components/CustomerSection'
import MLSection             from './components/MLSection'
import ProductSupportSection from './components/ProductSupportSection'
import ROISection            from './components/ROISection'
import TechSection           from './components/TechSection'
import Footer                from './components/Footer'

export default function CaseStudyPage() {
  const links = [];
  return (
    <>
      <CSNavbar title="E-Commerce Sales Data Analysis" style="#0D2D4A" logo="#6B7280" links={links} year="2025" />
      <main>
        <HeroSection />
        <KPISection />
        <RevenueCharts />
        <CustomerSection />
        <MLSection />
        <ProductSupportSection />
        <ROISection />
        <TechSection />
      </main>
      <Footer />
    </>
  )
}