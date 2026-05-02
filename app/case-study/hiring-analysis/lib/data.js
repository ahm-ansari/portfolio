export const kpis = [
  { num: '7,500', label: 'Total Candidates' },
  { num: '64.8%', label: 'Selection Rate' },
  { num: '69.1%', label: 'Offer Acceptance' },
  { num: '19.5%', label: 'Attrition Rate' },
  { num: '10.5d', label: 'Avg Time-to-Hire' },
  { num: '₹3,233', label: 'Avg Cost/Hire' },
  { num: '6.49', label: 'Avg Interview Score' },
  { num: '66.4%', label: 'Salary Accept Rate' },
];

export const heroMeta = [
  { label: 'Dataset', value: '7,500 Records' },
  { label: 'Roles Analysed', value: '9 Categories' },
  { label: 'Time Period', value: '-' },
  { label: 'Client Companies', value: '15 Organisations' },
  { label: 'ML Models', value: '4 Algorithms' },
  { label: 'Location', value: 'Chennai, Tamil Nadu' },
];

export const problems = [
  {
    icon: '🔄',
    bg: '#fdeaea',
    title: 'High Early Attrition (19.5%)',
    desc: 'Nearly 1 in 5 placed employees leaves within 3 months, forcing costly re-hiring cycles. Security Guards (25.5%) and Civil Labour (24.7%) show the worst retention rates, signalling systemic expectation mismatch.',
  },
  {
    icon: '⏱',
    bg: '#fff4e0',
    title: 'Time-to-Hire Disparity',
    desc: 'Manager roles average 23.5 days vs. 6.4 days for Civil Labour — a 3.7× gap. White-collar pipelines are underdeveloped, causing SLA breaches for clients like Cognizant and Hexaware.',
  },
  {
    icon: '📊',
    bg: '#e0f5f2',
    title: 'Sourcing Channel Inefficiency',
    desc: 'Job Portals account for 25% of applications but deliver similar conversion (45.2%) to LinkedIn (47.8%) at significantly higher cost. Walk-ins require heavy coordination with minimal quality gain.',
  },
  {
    icon: '💰',
    bg: '#e8edf5',
    title: 'Salary Acceptance Gap (66.4%)',
    desc: 'Only two-thirds of candidates accept offered salaries. Offers below 92% of expected salary trigger a 40% spike in attrition — yet salary data is not systematically used in negotiation.',
  },
  {
    icon: '🎯',
    bg: '#f0e8f5',
    title: 'Skill Mismatch at Entry',
    desc: 'Average interview score of 6.49/10, with technical scores (avg 6.5) consistently outpacing communication (avg 6.0). For client-facing roles, this gap directly predicts early performance failures.',
  },
  {
    icon: '📋',
    bg: '#e0f5f2',
    title: 'No Predictive Hiring Intelligence',
    desc: 'All decisions are made reactively. The agency lacks data-driven screening tools — contributing to inconsistent evaluation and a 35.2% rejection-but-reapply rate across 12 branch locations.',
  },
];

export const objectives = [
  { icon: '⚡', bg: '#e0f5f2', title: 'Reduce Time-to-Hire', desc: 'Target 30% reduction in managerial TTH (23.5 → ≤16 days) through structured pipeline development and pre-approved candidate pools.' },
  { icon: '📉', bg: '#fdeaea', title: 'Cut Attrition to <12%', desc: 'Reduce 3-month attrition from 19.5% using predictive screening, better expectation-setting, and salary benchmarking aligned to role realities.' },
  { icon: '🎯', bg: '#fff4e0', title: 'Optimise Source Mix', desc: 'Reallocate sourcing budget based on conversion rate data — boosting LinkedIn and Campus Recruitment while reducing low-ROI Newspaper Ad spend by 60%.' },
  { icon: '🤖', bg: '#e8edf5', title: 'Deploy ML Screening', desc: 'Implement the trained Random Forest model as an automated first-filter, reducing manual CV screening time by an estimated 45%.' },
  { icon: '💰', bg: '#e0f5ec', title: 'Salary Intelligence', desc: 'Build role-wise salary benchmarks to lift offer acceptance rate from 66.4% to above 78%, reducing costly offer-decline cycles.' },
  { icon: '📊', bg: '#f5eee8', title: 'Real-Time Dashboard', desc: 'Deliver a Power BI / Tableau dashboard enabling weekly performance reviews across all 15 client accounts with recruiter-level drill-downs.' },
];

export const methodSteps = [
  { num: '01', title: '01 — Data Generation', desc: 'Synthetic dataset of 7,500 records replicating realistic Chennai hiring patterns: salary ranges, role-specific attrition probabilities, interview score distributions, and seasonal sourcing trends.', tech: ['Python', 'NumPy', 'Pandas'] },
  { num: '02', title: '02 — Data Cleaning', desc: 'Handled 2–5% missing values via median imputation. IQR-based outlier capping on salary and time-to-hire. Engineered 5 derived features: experience buckets, salary ratio, score bands.', tech: ['Pandas', 'IQR Capping', 'Feature Eng.'] },
  { num: '03', title: '03 — EDA & Visualisation', desc: '12 analytical charts covering funnel analysis, source effectiveness, attrition decomposition, salary distribution, score-outcome correlation, and geographic spread across 12 locations.', tech: ['Matplotlib', 'Seaborn', 'GridSpec'] },
  { num: '04', title: '04 — KPI Engineering', desc: 'Defined and calculated 8 business KPIs: time-to-hire, cost per hire, offer acceptance rate, attrition rate, source conversion, salary acceptance — all tracked at role and source level.', tech: ['Pandas', 'GroupBy', 'JSON Export'] },
  { num: '05', title: '05 — Predictive Modelling', desc: 'Trained 4 classification models to predict candidate selection. Label encoding on 7 categorical features. 80/20 stratified split. Best: Logistic Regression (AUC 0.5509, F1 78.5%).', tech: ['scikit-learn', 'LabelEncoder', 'StandardScaler'] },
  { num: '06', title: '06 — Reporting', desc: 'Findings packaged into this Next.js case study report and a 24-slide stakeholder PowerPoint, structured around business impact and actionable recommendations per role category.', tech: ['Next.js', 'python-pptx', 'HTML/CSS'] },
];

export const schemaRows = [
  { field: 'Candidate_ID', type: 'String', desc: 'Unique identifier (CMA2024000–CMA2031499)', cov: '100%' },
  { field: 'Age, Gender, Location', type: 'Mixed', desc: 'Demographics across 12 Chennai zones', cov: '100%' },
  { field: 'Education, Experience_Yrs', type: 'Mixed', desc: 'Qualifications mapped per role requirement', cov: '98%' },
  { field: 'Role_Applied, Source', type: 'Categorical', desc: '9 roles × 7 sourcing channels', cov: '100%' },
  { field: 'Tech_Score, Comm_Score, Attitude_Score', type: 'Float', desc: 'Interview scores out of 10 (2–5% missing)', cov: '96–98%' },
  { field: 'Expected_Salary, Offered_Salary', type: 'Integer', desc: 'Monthly INR figures by role + experience', cov: '96%' },
  { field: 'Hiring_Status, Joining_Status', type: 'Categorical', desc: 'Selected/Rejected → Joined/Offer Declined', cov: '100%' },
  { field: 'Attrition_Flag', type: 'Binary', desc: 'Left within 3 months: Yes/No/N/A', cov: '100%' },
  { field: 'Time_to_Hire, Cost_per_Hire', type: 'Integer', desc: 'Days from application to joining; INR cost', cov: '100%' },
  { field: 'Client_Company, Year, Quarter', type: 'Mixed', desc: '15 clients; 2022–2024 quarterly breakdown', cov: '100%' },
];

export const findings = [
  { num: '25.5%', color: '#b53318', title: 'Security Guard Attrition', desc: 'Highest attrition of all 9 roles. Root cause: salary offers consistently 12–15% below candidate expectations during field deployment reality check.' },
  { num: '47.8%', color: '#0d7a6e', title: 'LinkedIn Conversion Rate', desc: 'LinkedIn outperforms Job Portals (45.2%) and Newspaper Ads (39.1%) while attracting higher-quality candidates with better interview scores and longer retention.' },
  { num: '40%', color: '#c46a11', title: 'Attrition Spike Below 92%', desc: 'When offered salary falls below 92% of expected salary, 3-month attrition spikes by 40%. This single lever could prevent ~285 early exits annually.' },
  { num: '6.49', color: '#1a6fa0', title: 'Avg Interview Score /10', desc: 'Technical scores (6.5) consistently beat communication (6.0). For Receptionist and Manager roles, this 0.5-point gap directly predicts early performance failures.' },
  { num: '35.2%', color: '#0e8a68', title: 'Rejection-Reapply Rate', desc: 'Over a third of rejected candidates reapply within the dataset period. This signals inconsistent evaluation standards across the 12 branch locations.' },
  { num: '₹6.2L', color: '#0c1a2e', title: 'Projected Annual Savings', desc: 'Implementing all 8 recommendations could generate ₹6.2 lakhs in annual cost savings based on current placement volumes of ~3,100 joinings/year.' },
];

export const mlMetrics = [
  { num: '78.5%', color: '#0d7a6e', label: 'Best F1 Score' },
  { num: '0.5509', color: '#c46a11', label: 'Best AUC' },
  { num: '64.4%', color: '#1a6fa0', label: 'RF Accuracy' },
  { num: '4', color: '#0c1a2e', label: 'Models Trained' },
];

export const recommendations = [
  { id: 'REC-01', accent: '#0d7a6e', title: 'Fix the Salary Gap — Immediately', desc: 'Implement role-wise salary benchmarking with negotiation guardrails. Enforce a minimum 92% salary ratio for all offers. Deploy a real-time salary comparison tool for recruiters during offer calls.', impact: '↑ Offer acceptance: 66.4% → 78%  |  ↓ Attrition: –8.5%', impactColor: '#0d7a6e' },
  { id: 'REC-02', accent: '#b53318', title: 'Overhaul Security Guard Onboarding', desc: 'Launch mandatory field orientation sessions for Security Guard and Civil Labour roles. Implement realistic job previews during screening. Introduce a structured 30-day check-in protocol to catch early dissatisfiers.', impact: 'Target attrition: 25.5% → 15%', impactColor: '#b53318' },
  { id: 'REC-03', accent: '#c46a11', title: 'Reallocate Sourcing Budget', desc: 'Shift 60% of Newspaper Ad spend to LinkedIn Recruiter and Campus drive investments. Formalise referral bonus programme (currently underutilised at 49.2% conversion vs. 39.1% for Newspaper Ads).', impact: 'Est. cost reduction: ₹1.8L/year', impactColor: '#c46a11' },
  { id: 'REC-04', accent: '#0c1a2e', title: 'Build Manager Pre-Approval Pool', desc: 'Create a standing talent pool of 25–30 pre-screened managerial candidates across tech and finance sectors. Partner with 3 LinkedIn headhunting agencies for ready-to-deploy candidates on rolling contracts.', impact: 'TTH target: 23.5d → 10d', impactColor: '#0c1a2e' },
  { id: 'REC-05', accent: '#0e8a68', title: 'Standardise Interview Rubrics', desc: 'Replace ad-hoc evaluation with structured rubrics weighted by role: communication (40%) for Receptionist/Manager, technical (60%) for IT/Accountant. Calibrate all 8 recruiters using scoring workshops.', impact: 'Reduces 35.2% inconsistency rate', impactColor: '#0e8a68' },
  { id: 'REC-06', accent: '#0d7a6e', title: 'Deploy ML Screening Pilot', desc: 'Pilot Logistic Regression model on Accountant and Manager pipelines first. Integrate attitude_score and salary_ratio as mandatory input fields. Target 40% reduction in manual CV screening time within 60 days.', impact: 'Screening time saved: 40%', impactColor: '#0d7a6e' },
  { id: 'REC-07', accent: '#c8900c', title: 'Sign 5 ITI Campus Agreements', desc: 'Formalise annual placement partnerships with ITI and polytechnic colleges for Civil Labour and Driver pipelines. Replace ad-hoc walk-in drives with structured campus drives offering 15% better quality at 20% lower cost.', impact: 'Quality uplift: +12% selection rate', impactColor: '#c8900c' },
  { id: 'REC-08', accent: '#0c1a2e', title: 'Launch Power BI Dashboard', desc: 'Go live with the 6-page Power BI dashboard for all 15 client accounts. Enable embedded client portal view for HR teams. Schedule weekly automated KPI emails to agency leadership and monthly client QBRs.', impact: 'Full visibility for all 15 clients', impactColor: '#0c1a2e' },
];

export const timeline = [
  { phase: 'Week 1–2', title: 'Quick Wins', desc: 'Deploy salary guardrails (REC-01), shift 30% Newspaper Ad budget to LinkedIn (REC-03), begin recruiter rubric rollout (REC-05).' },
  { phase: 'Week 3–6', title: 'Retention Initiatives', desc: 'Launch Security Guard onboarding overhaul (REC-02). Begin building Manager talent pool (REC-04). Draft interview scoring rubrics (REC-05).' },
  { phase: 'Month 2', title: 'Intelligence Integration', desc: 'Pilot ML screening model on Accountant and Manager pipelines (REC-06). Complete scorer calibration workshops across all 8 recruiters.' },
  { phase: 'Month 3', title: 'Structural Partnerships', desc: 'Sign 5 ITI campus agreements (REC-07). Go live with Power BI dashboard for all 15 client accounts (REC-08).' },
];

export const projections = [
  { label: 'Attrition Rate', val: '19.5% → 11%', width: 56, color: '#5ecfc0' },
  { label: 'Manager TTH', val: '23.5d → 10d', width: 43, color: '#c46a11' },
  { label: 'Offer Acceptance Rate', val: '66.4% → 78%', width: 78, color: '#c8900c' },
  { label: 'CV Screening Time Saved', val: '40% reduction', width: 40, color: '#b53318' },
  { label: 'Annual Cost Savings', val: '₹6.2 Lakhs', width: 85, color: '#0e8a68' },
];

export const techStack = [
  { name: 'Python 3.11+', role: 'Core Language' },
  { name: 'Pandas + NumPy', role: 'Data Processing' },
  { name: 'Matplotlib + Seaborn', role: 'Visualisation' },
  { name: 'scikit-learn', role: 'ML Modelling' },
  { name: 'Power BI / Tableau', role: 'Dashboard' },
  { name: 'Next.js / React', role: 'Case Study Web Report' },
  { name: 'python-pptx', role: 'Stakeholder Deck' },
];

export const conclusionStats = [
  { num: '7,500', label: 'Records Analysed' },
  { num: '12', label: 'EDA Charts' },
  { num: '4', label: 'ML Models Trained' },
  { num: '8', label: 'Business KPIs' },
  { num: '8', label: 'Recommendations' },
  { num: '₹6.2L', label: 'Projected Savings' },
];
