import Section, { SectionLabel, SectionTitle, SectionDesc } from './Section';
import { FunnelChart, SourceChart, AttritionChart, TTHChart } from './Charts';
import styles from './EDA.module.css';

export default function EDASection() {
  return (
    <Section id="eda">
      <SectionLabel>Exploratory Data Analysis</SectionLabel>
      <SectionTitle>Data Exploration &amp; Pattern Discovery</SectionTitle>
      <SectionDesc>
        Twelve analytical charts interrogate every dimension of the hiring process. Key visual analyses below
        are rendered with embedded business interpretation and interactive Chart.js visualisations.
      </SectionDesc>

      <FunnelChart />

      <div className={styles.twoCol}>
        <SourceChart />
        <AttritionChart />
      </div>

      <TTHChart />
    </Section>
  );
}
