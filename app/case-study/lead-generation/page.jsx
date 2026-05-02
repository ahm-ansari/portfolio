import LeadGenReport from '../../../components/sections/LeadGenReport';
import CSNavbar from '../components/CSNavbar';

export default function LeadGenerationCaseStudy() {
  const links = [];
  return (
    <>
      <CSNavbar links={links} style="#0A1628" logo="#E8A020" title="Marketing Lead Generation Analysis" year="2024" />
      <LeadGenReport />
    </>
  );
}
