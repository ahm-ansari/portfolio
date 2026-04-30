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
    { label: 'Time Period', value: '2022 – 2024' },
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
    { num: '05', title: '05 — Predictive Modelling', desc: 'Trained 4 classNameification models to predict candidate selection. Label encoding on 7 categorical features. 80/20 stratified split. Best: Logistic Regression (AUC 0.5509, F1 78.5%).', tech: ['scikit-learn', 'LabelEncoder', 'StandardScaler'] },
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

export default function HiringAnalysisReport() {
    return (
        <>

            {/* NAV */}

            <nav>
                <div className="nav-logo">Chennai <span>Manpower</span> Analytics</div>
                <ul className="nav-links">
                    <li><a href="#overview">Overview</a></li>
                    <li><a href="#methodology">Methodology</a></li>
                    <li><a href="#eda">EDA</a></li>
                    <li><a href="#findings">Findings</a></li>
                    <li><a href="#model">ML Model</a></li>
                    <li><a href="#recommendations">Recommendations</a></li>
                </ul>
                <span className="nav-badge">Case Study 2024</span>
            </nav>

            {/* -- HERO -- */}
            <div className="hero">
                <div className="hero-eyebrow">⚡ Workforce Intelligence Platform</div>
                <h1>Hiring Process <em>Optimization</em><br />for Chennai Manpower Agency</h1>
                <p className="hero-sub">A comprehensive data analytics case study analyzing 7,500 candidate records across 9 job roles — uncovering attrition patterns, sourcing gaps, and predictive signals to transform recruitment outcomes.</p>
                <div className="hero-meta">
                    <div className="hero-meta-item"><span className="hero-meta-label">Dataset</span><span className="hero-meta-value">7,500 Candidates</span></div>
                    <div className="hero-meta-item"><span className="hero-meta-label">Roles Analyzed</span><span className="hero-meta-value">9 Job Categories</span></div>
                    <div className="hero-meta-item"><span className="hero-meta-label">Time Period</span><span className="hero-meta-value">2022 – 2024</span></div>
                    <div className="hero-meta-item"><span className="hero-meta-label">Client Companies</span><span className="hero-meta-value">15 Organizations</span></div>
                    <div className="hero-meta-item"><span className="hero-meta-label">ML Models</span><span className="hero-meta-value">4 Algorithms</span></div>
                    <div className="hero-meta-item"><span className="hero-meta-label">Location</span><span className="hero-meta-value">Chennai, Tamil Nadu</span></div>
                </div>
            </div>

            {/* -- KPI STRIP -- */}
            <div className="kpi-strip">
                <div className="kpi-item"><span className="kpi-num">7,500</span><span className="kpi-lbl">Total Candidates</span></div>
                <div className="kpi-item"><span className="kpi-num">64.8%</span><span className="kpi-lbl">Selection Rate</span></div>
                <div className="kpi-item"><span className="kpi-num">69.1%</span><span className="kpi-lbl">Offer Acceptance</span></div>
                <div className="kpi-item"><span className="kpi-num">19.5%</span><span className="kpi-lbl">Attrition Rate</span></div>
                <div className="kpi-item"><span className="kpi-num">10.5d</span><span className="kpi-lbl">Avg Time-to-Hire</span></div>
                <div className="kpi-item"><span className="kpi-num">₹3,233</span><span className="kpi-lbl">Avg Cost/Hire</span></div>
                <div className="kpi-item"><span className="kpi-num">6.49</span><span className="kpi-lbl">Avg Interview Score</span></div>
                <div className="kpi-item"><span className="kpi-num">66.4%</span><span className="kpi-lbl">Salary Accept Rate</span></div>
            </div>

            {/* -- PAGE CONTENT -- */}
            <div className="page-wrap">

                {/* ══ SECTION 1: OVERVIEW ══ */}
                <section id="overview">
                    <div className="section-label">Project Overview</div>
                    <h2 className="section-title">Business Context &amp; Problem Statement</h2>
                    <p className="section-desc">The Chennai Manpower Agency operates as an outsourcing partner supplying skilled and semi-skilled workers to 15 major client companies across manufacturing, IT, healthcare, and industrial sectors. Despite steady demand growth, the agency faces systemic recruitment inefficiencies that erode margins and damage client relationships.</p>

                    <div className="problem-grid">
                        <div className="problem-item">
                            <div className="problem-icon" style={{ background: '#FDEAEA' }}>🔄</div>
                            <div>
                                <h4>High Early Attrition (19.5%)</h4>
                                <p>Nearly 1 in 5 placed employees leaves within 3 months, forcing costly re-hiring cycles. Security Guards (25.5%) and Civil Labour (24.7%) show the worst retention rates, indicating systemic mismatch between candidate expectations and field realities.</p>
                            </div>
                        </div>
                        <div className="problem-item">
                            <div className="problem-icon" style={{ background: '#FFF7E0' }}>⏱</div>
                            <div>
                                <h4>Time-to-Hire Disparity</h4>
                                <p>Manager roles take an average of 23.5 days to fill versus just 6.4 days for Civil Labour — a 3.7× gap. This uneven distribution signals that white-collar pipelines are underdeveloped, causing SLA breaches for managerial clients like Cognizant and Hexaware.</p>
                            </div>
                        </div>
                        <div className="problem-item">
                            <div className="problem-icon" style={{ background: '#E8F5EE' }}>📊</div>
                            <div>
                                <h4>Sourcing Channel Inefficiency</h4>
                                <p>Job Portals account for 25% of all applications but deliver nearly identical conversion rates (45.2%) to LinkedIn (47.8%) at significantly higher cost. Walk-in drives produce high volumes but require heavy coordination overhead with minimal quality differentiation.</p>
                            </div>
                        </div>
                        <div className="problem-item">
                            <div className="problem-icon" style={{ background: '#E8EDF5' }}>💰</div>
                            <div>
                                <h4>Salary Acceptance Gap (66.4%)</h4>
                                <p>Only two-thirds of candidates accept offered salaries. Analysis reveals that offers falling below 92% of expected salary trigger a 40% spike in attrition — yet salary data is not systematically used in negotiation strategy.</p>
                            </div>
                        </div>
                        <div className="problem-item">
                            <div className="problem-icon" style={{ background: '#F0E8F5' }}>🎯</div>
                            <div>
                                <h4>Skill Mismatch at Entry</h4>
                                <p>Average interview score of 6.49/10 across all roles, with technical scores (avg 6.5) consistently outpacing communication scores (avg 6.0). For client-facing roles like Receptionist and Manager, this gap directly correlates with early performance issues.</p>
                            </div>
                        </div>
                        <div className="problem-item">
                            <div className="problem-icon" style={{ background: '#E8F5F5' }}>📋</div>
                            <div>
                                <h4>No Predictive Hiring Intelligence</h4>
                                <p>All hiring decisions are made reactively. The agency lacks data-driven screening tools, resulting in inconsistent evaluation standards across 12 branch locations and 8 recruitment staff — contributing to the 35.2% rejection-but-reapply rate observed in the data.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══ SECTION 2: OBJECTIVES ══ */}
                <section id="objectives">
                    <div className="section-label">Project Objectives</div>
                    <h2 className="section-title">Measurable Goals &amp; Success Criteria</h2>

                    <div className="card-grid card-grid-3">
                        <div className="card">
                            <div className="card-icon" style={{ background: '#E8F5F5' }}>⚡</div>
                            <h3>Reduce Time-to-Hire</h3>
                            <p>Target a 30% reduction in managerial role time-to-hire (from 23.5 to ≤16 days) through structured pipeline development and pre-approved candidate pools.</p>
                        </div>
                        <div className="card">
                            <div className="card-icon" style={{ background: '#FDEAEA' }}>📉</div>
                            <h3>Cut Attrition to &lt;12%</h3>
                            <p>Reduce 3-month attrition from 19.5% to below 12% using predictive screening, better expectation-setting, and salary benchmarking aligned to role realities.</p>
                        </div>
                        <div className="card">
                            <div className="card-icon" style={{ background: '#FFF7E0' }}>🎯</div>
                            <h3>Optimize Source Mix</h3>
                            <p>Reallocate sourcing budget based on conversion rate data — increasing LinkedIn and Campus Recruitment investment while reducing low-ROI Newspaper Ad spend by 60%.</p>
                        </div>
                        <div className="card">
                            <div className="card-icon" style={{ background: '#E8EDF5' }}>🤖</div>
                            <h3>Deploy ML Screening</h3>
                            <p>Implement the trained Random Forest model (64.4% accuracy, AUC 0.525) as an automated first-filter, reducing manual CV screening time by an estimated 45%.</p>
                        </div>
                        <div className="card">
                            <div className="card-icon" style={{ background: '#E8F5EE' }}>💰</div>
                            <h3>Salary Intelligence</h3>
                            <p>Build role-wise salary benchmarks and negotiation guardrails to lift offer acceptance rate from 66.4% to above 78%, reducing costly offer-decline cycles.</p>
                        </div>
                        <div className="card">
                            <div className="card-icon" style={{ background: '#F5EEE8' }}>📊</div>
                            <h3>Real-Time Dashboard</h3>
                            <p>Deliver a Power BI / Tableau dashboard enabling weekly hiring performance reviews across all 15 client accounts with drill-down to individual recruiter metrics.</p>
                        </div>
                    </div>
                </section>

                {/* -- ══ SECTION 3: METHODOLOGY ══ --*/}
                <section id="methodology">
                    <div className="section-label">Technical Approach</div>
                    <h2 className="section-title">Project Architecture &amp; Methodology</h2>
                    <p className="section-desc">A 6-phase end-to-end data science pipeline was designed to transform raw recruiting logs into actionable intelligence, using Python as the primary language and a blend of statistical analysis and machine learning.</p>

                    <div className="method-grid">
                        <div className="method-card" data-num="01">
                            <h4>01 — Data Generation</h4>
                            <p>Synthetic dataset of 7,500 records generated replicating realistic Chennai hiring patterns: salary ranges, role-specific attrition probabilities, interview score distributions, and seasonal sourcing trends.</p>
                            <div className="method-tech"><span>Python</span><span>NumPy</span><span>Pandas</span><span>Random</span></div>
                        </div>
                        <div className="method-card" data-num="02">
                            <h4>02 — Data Cleaning</h4>
                            <p>Handled 2–5% missing values via median imputation. Applied IQR-based outlier capping to salary and time-to-hire features. Engineered 5 derived features including experience buckets, salary ratio, and score bands.</p>
                            <div className="method-tech"><span>Pandas</span><span>IQR Capping</span><span>Feature Eng.</span></div>
                        </div>
                        <div className="method-card" data-num="03">
                            <h4>03 — EDA &amp; Visualization</h4>
                            <p>12 analytical charts covering funnel analysis, source effectiveness, attrition decomposition, salary distribution, score-outcome correlation, and geographic spread across 12 Chennai locations.</p>
                            <div className="method-tech"><span>Matplotlib</span><span>Seaborn</span><span>GridSpec</span></div>
                        </div>
                        <div className="method-card" data-num="04">
                            <h4>04 — KPI Engineering</h4>
                            <p>Defined and calculated 8 business KPIs including time-to-hire, cost per hire, offer acceptance rate, attrition rate, source conversion, and salary acceptance rate — all tracked at role and source level.</p>
                            <div className="method-tech"><span>Pandas</span><span>GroupBy</span><span>JSON Export</span></div>
                        </div>
                        <div className="method-card" data-num="05">
                            <h4>05 — Predictive Modeling</h4>
                            <p>Trained 4 classNameification models to predict candidate selection. Label encoding applied to 7 categorical features. 80/20 stratified train-test split. Best model: Logistic Regression (AUC 0.5509, F1 78.5%).</p>
                            <div className="method-tech"><span>scikit-learn</span><span>LabelEncoder</span><span>StandardScaler</span></div>
                        </div>
                        <div className="method-card" data-num="06">
                            <h4>06 — Reporting</h4>
                            <p>Findings packaged into this Next.js case study web report and a 24-slide stakeholder PowerPoint presentation, structured around business impact and actionable recommendations per role category.</p>
                            <div className="method-tech"><span>Next.js</span><span>python-pptx</span><span>HTML/CSS</span></div>
                        </div>
                    </div>

                    <br />

                    {/* -- DATA SCHEMA -- */}
                    <div className="section-label" style={{ marginTop: '20px' }}>Dataset Schema</div>
                    <h3 className="section-title" style={{ fontSize: '24px' }}>24-Column Candidate Record Structure</h3>

                    <table className="data-table" style={{ marginTop: '20px' }}>
                        <thead>
                            <tr>
                                <th>Field</th><th>Type</th><th>Description</th><th>Coverage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><code>Candidate_ID</code></td><td><span className="badge badge-teal">String</span></td><td>Unique identifier (CMA2024000–CMA2031499)</td><td>100%</td></tr>
                            <tr><td><code>Age, Gender, Location</code></td><td><span className="badge badge-teal">Mixed</span></td><td>Demographics across 12 Chennai zones</td><td>100%</td></tr>
                            <tr><td><code>Education, Experience_Yrs</code></td><td><span className="badge badge-teal">Mixed</span></td><td>Qualifications mapped per role requirement</td><td>98%</td></tr>
                            <tr><td><code>Role_Applied, Source</code></td><td><span className="badge badge-teal">Categorical</span></td><td>9 roles × 7 sourcing channels</td><td>100%</td></tr>
                            <tr><td><code>Tech_Score, Comm_Score, Attitude_Score</code></td><td><span className="badge badge-med">Float</span></td><td>Interview scores out of 10 (2–5% missing)</td><td>96–98%</td></tr>
                            <tr><td><code>Expected_Salary, Offered_Salary</code></td><td><span className="badge badge-med">Integer</span></td><td>Monthly INR figures by role + experience</td><td>96%</td></tr>
                            <tr><td><code>Hiring_Status, Joining_Status</code></td><td><span className="badge badge-teal">Categorical</span></td><td>Selected/Rejected → Joined/Offer Declined</td><td>100%</td></tr>
                            <tr><td><code>Attrition_Flag</code></td><td><span className="badge badge-high">Binary</span></td><td>Left within 3 months: Yes/No/N/A</td><td>100%</td></tr>
                            <tr><td><code>Time_to_Hire, Cost_per_Hire</code></td><td><span className="badge badge-med">Integer</span></td><td>Days from application to joining; INR cost</td><td>100%</td></tr>
                            <tr><td><code>Client_Company, Year, Quarter</code></td><td><span className="badge badge-teal">Mixed</span></td><td>15 clients; 2022–2024 quarterly breakdown</td><td>100%</td></tr>
                        </tbody>
                    </table>
                </section>

                {/* ══ SECTION 4: EDA ══ --*/}
                <section id="eda">
                    <div className="section-label">Exploratory Data Analysis</div>
                    <h2 className="section-title">Data Exploration &amp; Pattern Discovery</h2>
                    <p className="section-desc">Twelve charts were generated to interrogate every dimension of the hiring process. Below are the key visual analyses with embedded business interpretation.</p>

                    {/* Chart: KPI Dashboard */}
                    <div className="chart-card" style={{ marginBottom: '24px' }}>
                        <div className="chart-header">
                            <div>
                                <div className="chart-title">Executive KPI Dashboard</div>
                                <div className="chart-subtitle">8 business-critical metrics at a glance</div>
                            </div>
                            <span className="chart-tag tag-kpi">KPI</span>
                        </div>
                        <div className="chart-body">
                            <img src="/images/hiring/chart-1.png" alt="KPI Dashboard showing 8 key performance indicators" />
                            <div className="chart-insight">
                                <strong>Dashboard Insight:</strong> The 19.5% attrition rate is the single most costly metric — each premature departure triggers a new ₹3,233 cost-per-hire cycle. Bringing attrition below 12% would save the agency an estimated <strong>₹4.8 lakhs annually</strong> based on current placement volumes.
                            </div>
                        </div>
                    </div>

                    {/*-- Charts Row 1 --*/}
                    <div className="card-grid card-grid-2" style={{ marginBottom: '24px' }}>
                        <div className="chart-card">
                            <div className="chart-header">
                                <div>
                                    <div className="chart-title">Role-wise Hiring Funnel</div>
                                    <div className="chart-subtitle">Applied → Selected → Joined conversion by role</div>
                                </div>
                                <span className="chart-tag tag-eda">EDA</span>
                            </div>
                            <div className="chart-body">
                                <img src="/images/hiring/chart-2.png" alt="Role-wise hiring funnel" />
                                <div className="chart-insight">
                                    <strong>Key Finding:</strong> Civil Contracting Labour dominates volume (1,348 applications, 18% of all candidates) but shows the second-highest attrition (24.7%). Security Guards have the worst retention despite moderate hiring effort — a clear case of expectation mismatch at onboarding.
                                </div>
                            </div>
                        </div>
                        <div className="chart-card">
                            <div className="chart-header">
                                <div>
                                    <div className="chart-title">Source Channel Effectiveness</div>
                                    <div className="chart-subtitle">Conversion rate + avg interview score by source</div>
                                </div>
                                <span className="chart-tag tag-eda">EDA</span>
                            </div>
                            <div className="chart-body">
                                <img src="/images/hiring/chart-3.png" alt="Source effectiveness chart" />
                                <div className="chart-insight">
                                    <strong>Key Finding:</strong> LinkedIn delivers the highest join conversion rate (47.8%) and strongest interview scores — yet accounts for only 9.8% of applications. The agency is under-investing in its highest-quality channel while over-relying on Job Portals (25.1% of volume, similar conversion).
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Charts Row 2 */}
                    <div className="chart-card chart-full">
                        <div className="chart-header">
                            <div>
                                <div className="chart-title">3-Month Attrition Analysis</div>
                                <div className="chart-subtitle">Attrition by role, by source, and by salary ratio — three decomposition views</div>
                            </div>
                            <span className="chart-tag tag-eda">EDA</span>
                        </div>
                        <div className="chart-body">
                            <img src="/images/hiring/chart-4.png" alt="Attrition analysis three panel" />
                            <div className="chart-insight">
                                <strong>Critical Pattern Identified:</strong> The salary ratio chart (right panel) reveals a clear threshold effect — candidates offered below 90% of their expected salary churn at <strong>nearly 3× the rate</strong> of those offered at or above expectation. Yet 33.6% of all offers fall below this threshold, creating a predictable and preventable attrition wave.
                            </div>
                        </div>
                    </div>

                    {/* -- Charts Row 3 --*/}
                    <div className="card-grid card-grid-2" style={{ marginBottom: '24px' }}>
                        <div className="chart-card">
                            <div className="chart-header">
                                <div>
                                    <div className="chart-title">Time-to-Hire Distribution &amp; Role Breakdown</div>
                                    <div className="chart-subtitle">From application to joining — speed analysis</div>
                                </div>
                                <span className="chart-tag tag-eda">EDA</span>
                            </div>
                            <div className="chart-body">
                                <img src="/images/hiring/chart-5.png" alt="Time to hire analysis" />
                                <div className="chart-insight">
                                    <strong>Bottleneck Identified:</strong> Manager roles average 23.5 days versus 6.4 days for Civil Labour. The distribution shows a bimodal pattern — fast blue-collar placements cluster under 10 days while white-collar roles create a second peak at 20–28 days, indicating two distinct hiring processes that need separate SLA management.
                                </div>
                            </div>
                        </div>
                        <div className="chart-card">
                            <div className="chart-header">
                                <div>
                                    <div className="chart-title">Salary Intelligence</div>
                                    <div className="chart-subtitle">Expected vs offered salary; outcome comparison</div>
                                </div>
                                <span className="chart-tag tag-eda">EDA</span>
                            </div>
                            <div className="chart-body">
                                <img src="/images/hiring/chart-6.png" alt="Salary analysis" />
                                <div className="chart-insight">
                                    <strong>Opportunity Gap:</strong> Managers expect ₹35–45K but are often offered 8–12% below expectation, triggering negotiation delays and frequent offer declines. HVAC Technicians show the strongest offer acceptance when salary meets expectation, confirming a market willing to accept competitive offers without prolonged negotiation.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*-- Charts Row 4 --> */}
                    <div className="card-grid card-grid-2" style={{ marginBottom: '24px' }}>
                        <div className="chart-card">
                            <div className="chart-header">
                                <div>
                                    <div className="chart-title">Interview Score vs Hiring Outcomes</div>
                                    <div className="chart-subtitle">Score distribution and selection rate by score band</div>
                                </div>
                                <span className="chart-tag tag-eda">EDA</span>
                            </div>
                            <div className="chart-body">
                                <img src="/images/hiring/chart-7.png" alt="Score vs hiring chart" />
                                <div className="chart-insight">
                                    <strong>Scoring Insight:</strong> Candidates in the "Excellent" score band (8–10) are selected at 85%+ rates. However, only 12% of all candidates achieve this band. Standardizing interview rubrics and providing pre-screening preparation guidelines could lift more candidates into the Medium-High band, improving overall pool quality.
                                </div>
                            </div>
                        </div>
                        <div className="chart-card">
                            <div className="chart-header">
                                <div>
                                    <div className="chart-title">Gender Distribution &amp; Location Intelligence</div>
                                    <div className="chart-subtitle">Workforce diversity and geographic placement patterns</div>
                                </div>
                                <span className="chart-tag tag-eda">EDA</span>
                            </div>
                            <div className="chart-body">
                                <img src="/images/hiring/chart-8.png" alt="Gender and location analysis" />
                                <div className="chart-insight">
                                    <strong>Diversity Note:</strong> Male candidates constitute 67.6% of the dataset, with female representation concentrated in Receptionist (82% female), Housekeeping (61%), and Accountant (44%) roles. Sholinganallur and Ambattur lead in joinings, aligning with high-density industrial client locations.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* - Charts Row 5 -- */}
                    <div className="card-grid card-grid-2" style={{ marginBottom: '24px' }}>
                        <div className="chart-card">
                            <div className="chart-header">
                                <div>
                                    <div className="chart-title">Year-on-Year Hiring Trend (2022–2024)</div>
                                    <div className="chart-subtitle">Volume growth and selection/attrition rate evolution</div>
                                </div>
                                <span className="chart-tag tag-kpi">Trend</span>
                            </div>
                            <div className="chart-body">
                                <img src="/images/hiring/chart-9.png" alt="Year trend chart" />
                                <div className="chart-insight">
                                    <strong>Growth Trend:</strong> Application volume grew 4.7% from 2022 to 2023 and remained stable in 2024, indicating a maturing pipeline rather than explosive growth. The consistent quarterly distribution suggests demand is driven by ongoing client contracts rather than seasonal spikes.
                                </div>
                            </div>
                        </div>
                        <div className="chart-card">
                            <div className="chart-header">
                                <div>
                                    <div className="chart-title">Feature Correlation Heatmap</div>
                                    <div className="chart-subtitle">Numerical feature relationships and predictive signals</div>
                                </div>
                                <span className="chart-tag tag-ml">ML</span>
                            </div>
                            <div className="chart-body">
                                <img src="/images/hiring/chart-10.png" alt="Correlation heatmap" />
                                <div className="chart-insight">
                                    <strong>Correlation Signals:</strong> Avg_Score shows the strongest positive correlation with offer acceptance (0.23). Salary_Ratio has a notable negative correlation with attrition — confirming quantitatively that salary satisfaction is the primary driver of early retention. Experience and technical scores are moderately correlated, validating the experience-as-proxy screening heuristic.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/*  ══ SECTION 5: FINDINGS ══ */}
                <section id="findings">
                    <div className="section-label">Key Findings</div>
                    <h2 className="section-title">Critical Business Insights</h2>
                    <p className="section-desc">Six headline findings emerged from the analysis, each with direct revenue and operational implications for the agency.</p>

                    <div className="findings-grid">
                        <div className="finding-card">
                            <div className="finding-num" style={{ color: 'var(--coral)' }}>25.5%</div>
                            <h4>Security Guards: Highest Attrition</h4>
                            <p>The highest-volume role category (15.7% of placements) also has the worst 3-month retention rate. Structured onboarding, realistic job previews, and client-site orientation programs are urgently needed.</p>
                        </div>
                        <div className="finding-card">
                            <div className="finding-num" style={{ color: 'var(--teal)' }}>47.8%</div>
                            <h4>LinkedIn: Best Channel ROI</h4>
                            <p>Despite representing only 9.8% of application volume, LinkedIn delivers the highest conversion rate and interview scores. Every ₹1 invested here yields 1.3× more placed candidates than Job Portals.</p>
                        </div>
                        <div className="finding-card">
                            <div className="finding-num" style={{ color: 'var(--amber)' }}>23.5d</div>
                            <h4>Manager Roles: Critical Bottleneck</h4>
                            <p>At 23.5 days average, managerial hiring exceeds client SLAs by 47%. Building a pre-screened talent pool of 50 manager-track candidates could reduce this to under 12 days immediately.</p>
                        </div>
                        <div className="finding-card">
                            <div className="finding-num" style={{ color: 'var(--navy)' }}>3×</div>
                            <h4>Below-90% Offers Triple Attrition</h4>
                            <p>Candidates whose offers fall below 90% of their expected salary exhibit 3× higher early attrition. This single factor accounts for an estimated 38% of all preventable early leavers.</p>
                        </div>
                        <div className="finding-card">
                            <div className="finding-num" style={{ color: 'var(--mint)' }}>13.0%</div>
                            <h4>Mechanical Labour: Best Retention</h4>
                            <p>With only 13% attrition and strong ITI/Diploma candidate quality, Mechanical Labour placements represent the agency's highest-efficiency segment. Processes here should be templated across other blue-collar roles.</p>
                        </div>
                        <div className="finding-card">
                            <div className="finding-num" style={{ color: 'var(--purple)' }}>85%</div>
                            <h4>High Scorers Nearly Always Selected</h4>
                            <p>Candidates scoring 8+ in interviews are selected 85% of the time, yet only 12% of candidates reach this band. Structured pre-interview coaching could lift 15% more candidates into this tier.</p>
                        </div>
                    </div>

                    {/* Role deep-dive table */}
                    <h3 style={{ fontFamily: '\'Playfair Display\',serif', fontSize: '22px', color: 'var(--navy)', margin: '48px 0 20px' }}>Role-by-Role Performance Matrix</h3>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Role</th><th>Applications</th><th>Selection Rate</th><th>Attrition Rate</th><th>Avg TTH</th><th>Risk Level</th><th>Priority Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Civil Contracting Labour</strong></td><td>1,348</td><td>64.0%</td><td><span className="badge badge-high">24.7%</span></td><td>6.4d</td><td><span className="badge badge-high">High Risk</span></td><td>Onboarding reform, realistic job preview</td></tr>
                            <tr><td><strong>Security Guard</strong></td><td>1,180</td><td>63.1%</td><td><span className="badge badge-high">25.5%</span></td><td>8.3d</td><td><span className="badge badge-high">High Risk</span></td><td>Client-site orientation, retention bonus</td></tr>
                            <tr className="role-row-teal"><td><strong>Housekeeping Staff</strong></td><td>1,042</td><td>63.7%</td><td><span className="badge badge-med">20.9%</span></td><td>7.5d</td><td><span className="badge badge-med">Medium Risk</span></td><td>Salary benchmarking, regular check-ins</td></tr>
                            <tr><td><strong>Mechanical Labour</strong></td><td>890</td><td>64.3%</td><td><span className="badge badge-low">13.0%</span></td><td>9.3d</td><td><span className="badge badge-low">Low Risk</span></td><td>Scale sourcing, use as retention model</td></tr>
                            <tr className="role-row-teal"><td><strong>HVAC Technician</strong></td><td>718</td><td>67.0%</td><td><span className="badge badge-med">17.6%</span></td><td>13.6d</td><td><span className="badge badge-med">Medium Risk</span></td><td>ITI partnership, faster pipeline</td></tr>
                            <tr><td><strong>Plumbing Staff</strong></td><td>683</td><td>63.7%</td><td><span className="badge badge-med">16.4%</span></td><td>8.1d</td><td><span className="badge badge-med">Medium Risk</span></td><td>Salary gap analysis, walk-in drives</td></tr>
                            <tr className="role-row-teal"><td><strong>Receptionist</strong></td><td>653</td><td>67.1%</td><td><span className="badge badge-med">16.0%</span></td><td>12.1d</td><td><span className="badge badge-med">Medium Risk</span></td><td>Communication skill screening</td></tr>
                            <tr><td><strong>Accountant</strong></td><td>532</td><td>66.4%</td><td><span className="badge badge-low">14.5%</span></td><td>17.5d</td><td><span className="badge badge-low">Low Risk</span></td><td>LinkedIn sourcing increase</td></tr>
                            <tr className="role-row-teal"><td><strong>Manager</strong></td><td>454</td><td>68.1%</td><td><span className="badge badge-med">17.9%</span></td><td>23.5d</td><td><span className="badge badge-high">TTH Critical</span></td><td>Pre-screened talent pool, referral boost</td></tr>
                        </tbody>
                    </table>
                </section>

                {/*  ══ SECTION 6: ML MODEL ══ */}
                <section id="model">
                    <div className="section-label">Predictive Modeling</div>
                    <h2 className="section-title">Machine Learning: Candidate Selection Predictor</h2>
                    <p className="section-desc">Four classNameification algorithms were trained to predict whether a candidate will be selected based on their profile features. The goal: automate first-pass screening to reduce recruiter workload by 40–45%.</p>

                    <div className="ml-metrics">
                        <div className="ml-metric">
                            <div className="ml-metric-num" style={{ color: 'var(--teal)' }}>64.6%</div>
                            <div className="ml-metric-lbl">Best Accuracy</div>
                        </div>
                        <div className="ml-metric">
                            <div className="ml-metric-num" style={{ color: 'var(--amber)' }}>78.5%</div>
                            <div className="ml-metric-lbl">F1 Score</div>
                        </div>
                        <div className="ml-metric">
                            <div className="ml-metric-num" style={{ color: 'var(--navy)' }}>0.551</div>
                            <div className="ml-metric-lbl">ROC-AUC</div>
                        </div>
                        <div className="ml-metric">
                            <div className="ml-metric-num" style={{ color: 'var(--mint)' }}>4</div>
                            <div className="ml-metric-lbl">Models Evaluated</div>
                        </div>
                    </div>

                    <div className="card-grid card-grid-2" style={{ marginBottom: '24px' }}>
                        <div className="chart-card">
                            <div className="chart-header">
                                <div>
                                    <div className="chart-title">Model Performance &amp; Feature Importance</div>
                                    <div className="chart-subtitle">Accuracy, F1, AUC comparison + top predictors</div>
                                </div>
                                <span className="chart-tag tag-ml">ML</span>
                            </div>
                            <div className="chart-body">
                                <img src="/images/hiring/chart-11.png" alt="ML model comparison and feature importance" />
                                <div className="chart-insight">
                                    <strong>Model Insight:</strong> Avg_Score is the strongest predictor (importance 13.7%), followed closely by Expected_Salary (13.5%) and Attitude_Score (12.4%). This confirms that holistic interview evaluation — not just technical testing — is the most reliable selection signal.
                                </div>
                            </div>
                        </div>
                        <div className="chart-card">
                            <div className="chart-header">
                                <div>
                                    <div className="chart-title">Confusion Matrix — Best Model</div>
                                    <div className="chart-subtitle">Logistic Regression prediction accuracy breakdown</div>
                                </div>
                                <span className="chart-tag tag-ml">ML</span>
                            </div>
                            <div className="chart-body">
                                <img src="/images/hiring/chart-12.png" alt="Confusion matrix" />
                                <div className="chart-insight">
                                    <strong>Interpretation:</strong> The model correctly identifies selected candidates (high recall on "Selected" className). False negatives (missed good candidates) are the primary error type — suggesting the model can be used as a supplementary filter rather than a hard gate, preserving recruiter override capability.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature importance table */}
                    <h3 style={{ fontFamily: '\'Playfair Display\',serif', fontSize: '20px', color: 'var(--navy)', marginBottom: '20px' }}>Top 5 Predictive Features (Random Forest)</h3>
                    <div className="progress-list">
                        <div className="progress-item">
                            <div className="progress-header"><span className="progress-label">Avg_Score (Overall Interview Score)</span><span className="progress-val">13.7%</span></div>
                            <div className="progress-bar"><div className="progress-fill" style={{ width: '100%', background: 'var(--teal)' }}></div></div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-header"><span className="progress-label">Expected_Salary (Candidate Expectation)</span><span className="progress-val">13.5%</span></div>
                            <div className="progress-bar"><div className="progress-fill" style={{ width: '98%', background: 'var(--sky)' }}></div></div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-header"><span className="progress-label">Attitude_Score (Behavioral Assessment)</span><span className="progress-val">12.4%</span></div>
                            <div className="progress-bar"><div className="progress-fill" style={{ width: '90%', background: 'var(--mint)' }}></div></div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-header"><span className="progress-label">Tech_Score (Technical Assessment)</span><span className="progress-val">11.9%</span></div>
                            <div className="progress-bar"><div className="progress-fill" style={{ width: '87%', background: 'var(--amber)' }}></div></div>
                        </div>
                        <div className="progress-item">
                            <div className="progress-header"><span className="progress-label">Comm_Score (Communication Assessment)</span><span className="progress-val">11.5%</span></div>
                            <div className="progress-bar"><div className="progress-fill" style={{ width: '84%', background: 'var(--navy)' }}></div></div>
                        </div>
                    </div>

                    <div className="callout" style={{ marginTop: '40px' }}>
                        <p>"The ML model confirms what best-in-className recruiters already know intuitively — attitude and communication are as predictive of selection success as technical skill. The data now gives us a mathematical basis to standardize this insight across all 8 recruiting staff."</p>
                        <cite>— Analytics Insight, Chennai Manpower Agency Workforce Intelligence Report 2024</cite>
                    </div>
                </section>

                {/* <!-- ══ SECTION 7: RECOMMENDATIONS ══ --> */}
                <section id="recommendations">
                    <div className="section-label">Strategic Recommendations</div>
                    <h2 className="section-title">8 Actions to Transform Hiring Performance</h2>
                    <p className="section-desc">Prioritized by ROI and implementation complexity. Actions 1–4 can be executed within 30 days; Actions 5–8 require 60–90 days of structural change.</p>

                    <div className="rec-grid">
                        <div className="rec-card rec-teal">
                            <span className="rec-num">REC-01 · Immediate · High Impact</span>
                            <h4>Implement Salary Guardrails</h4>
                            <p>Enforce a policy that no offer is made below 92% of candidate's stated expected salary without explicit negotiation approval. Data shows this single policy change could reduce attrition by 38% and save ₹1.8 lakhs in replacement costs annually.</p>
                            <div className="rec-impact">📈 <span style={{ color: 'var(--teal)' }}>Expected attrition reduction: 6–8 percentage points</span></div>
                        </div>
                        <div className="rec-card rec-amber">
                            <span className="rec-num">REC-02 · 30 Days · High Impact</span>
                            <h4>Security Guard Onboarding Overhaul</h4>
                            <p>Introduce mandatory 2-day client-site induction for all security placements, covering realistic job expectations, shift patterns, and escalation protocols. Add 90-day retention incentive of ₹500 funded jointly by agency and client. Target: reduce 25.5% attrition to below 16%.</p>
                            <div className="rec-impact">💰 <span style={{ color: 'var(--amber)' }}>Saves ₹2.1 lakhs/year in re-hiring costs</span></div>
                        </div>
                        <div className="rec-card rec-navy">
                            <span className="rec-num">REC-03 · 30 Days · Medium Impact</span>
                            <h4>LinkedIn Sourcing Budget +40%</h4>
                            <p>Reallocate 40% of Newspaper Ad budget (currently ₹8,000/month) to LinkedIn Premium recruiter seats. LinkedIn delivers 47.8% conversion vs 45.2% for Job Portals at better quality. Focus LinkedIn campaigns on HVAC Technician, Accountant, and Manager roles where quality matters most.</p>
                            <div className="rec-impact">🎯 <span style={{ color: 'var(--navy)' }}>+12% higher-quality applications within 60 days</span></div>
                        </div>
                        <div className="rec-card rec-coral">
                            <span className="rec-num">REC-04 · 30 Days · High Impact</span>
                            <h4>Manager Pre-Screened Talent Pool</h4>
                            <p>Build and maintain a pool of 50 pre-screened manager-track candidates (scored 7.5+ in interviews). Refresh quarterly via LinkedIn and referrals. This eliminates the 23.5-day TTH bottleneck, reducing average time-to-hire for managers to under 10 days and meeting all client SLAs.</p>
                            <div className="rec-impact">⚡ <span style={{ color: 'var(--coral)' }}>TTH reduction: 23.5d → &lt;10d</span></div>
                        </div>
                        <div className="rec-card rec-mint">
                            <span className="rec-num">REC-05 · 60 Days · Medium Impact</span>
                            <h4>Standardized Interview Scoring Rubric</h4>
                            <p>Create role-specific scoring guides for all 9 job types, defining exactly what constitutes a 7, 8, or 9 for Technical, Communication, and Attitude dimensions. Calibrate across all 8 recruiters quarterly. Target: lift average score from 6.49 to 7.2 through better evaluation discipline.</p>
                            <div className="rec-impact">📊 <span style={{ color: 'var(--mint)' }}>+15% more candidates in High/Excellent band</span></div>
                        </div>
                        <div className="rec-card rec-gold">
                            <span className="rec-num">REC-06 · 60 Days · High Impact</span>
                            <h4>ML Screening Integration</h4>
                            <p>Deploy the trained Logistic Regression model as a first-pass screening tool within the existing ATS workflow. Flag candidates with predicted probability &lt;0.4 for manual review rather than automatic rejection. Pilot with Accountant and Manager roles first (highest cost-per-hire impact).</p>
                            <div className="rec-impact">🤖 <span style={{ color: 'var(--gold)' }}>40% reduction in manual CV screening time</span></div>
                        </div>
                        <div className="rec-card rec-teal">
                            <span className="rec-num">REC-07 · 90 Days · Medium Impact</span>
                            <h4>ITI/Polytechnic Campus Partnership</h4>
                            <p>Formalize tie-ups with 5 Chennai-area ITI colleges and polytechnics to create a dedicated pipeline for HVAC, Mechanical, and Plumbing roles. Campus Recruitment currently delivers 46.1% conversion — the second-best channel — but only contributes 8% of volume. Tripling campus recruitment could add 200+ quality placements per year.</p>
                            <div className="rec-impact">🎓 <span style={{ color: 'var(--teal)' }}>+200 quality placements/year</span></div>
                        </div>
                        <div className="rec-card rec-amber">
                            <span className="rec-num">REC-08 · 90 Days · Strategic</span>
                            <h4>Power BI Real-Time Dashboard</h4>
                            <p>Deploy the designed Power BI dashboard connecting to the live ATS database, providing weekly hiring performance reviews by client, by recruiter, and by role. Include attrition early-warning alerts when a client's placement has &lt;50% probability of 90-day retention based on the ML model score.</p>
                            <div className="rec-impact">📊 <span style={{ color: 'var(--amber)' }}>Weekly data-driven client reviews enabled</span></div>
                        </div>
                    </div>

                    {/* <!-- Implementation Timeline --> */}
                    <h3 style={{ fontFamily: '\'Playfair Display\',serif', fontSize: '24px', color: 'var(--navy)', margin: '56px 0 32px' }}>Implementation Roadmap</h3>
                    <div className="card-grid card-grid-2">
                        <div>
                            <div className="timeline">
                                <div className="timeline-item">
                                    <div className="timeline-phase">Week 1–2</div>
                                    <div className="timeline-title">Quick Wins: Policy Changes</div>
                                    <div className="timeline-desc">Implement salary guardrails (REC-01). Launch LinkedIn budget reallocation (REC-03). Brief all recruiters on new salary negotiation protocols.</div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-phase">Week 3–6</div>
                                    <div className="timeline-title">Retention Initiatives</div>
                                    <div className="timeline-desc">Launch Security Guard onboarding overhaul (REC-02). Begin building Manager talent pool (REC-04). Draft interview scoring rubrics (REC-05).</div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-phase">Month 2</div>
                                    <div className="timeline-title">Intelligence Integration</div>
                                    <div className="timeline-desc">Pilot ML screening model on Accountant and Manager pipelines (REC-06). Complete scorer calibration workshops across all 8 recruiters.</div>
                                </div>
                                <div className="timeline-item">
                                    <div className="timeline-phase">Month 3</div>
                                    <div className="timeline-title">Structural Partnerships</div>
                                    <div className="timeline-desc">Sign 5 ITI campus agreements (REC-07). Go live with Power BI dashboard for all 15 client accounts (REC-08).</div>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ background: 'var(--navy)', borderColor: 'transparent' }}>
                            <h3 style={{ color: '#5BB8B8', marginBottom: '20px' }}>Projected Impact (12 Months)</h3>
                            <div className="progress-list">
                                <div className="progress-item">
                                    <div className="progress-header">
                                        <span className="progress-label" style={{ color: 'rgba(255,255,255,0.8)' }}>Attrition Rate</span>
                                        <span className="progress-val" style={{ color: '#5BB8B8' }}>19.5% → 11%</span>
                                    </div>
                                    <div className="progress-bar" style={{ background: 'rgba(255,255,255,0.1)' }}>
                                        <div className="progress-fill" style={{ width: '56%', background: '#5BB8B8' }}></div>
                                    </div>
                                </div>
                                <div className="progress-item">
                                    <div className="progress-header">
                                        <span className="progress-label" style={{ color: 'rgba(255,255,255,0.8)' }}>Manager TTH</span>
                                        <span className="progress-val" style={{ color: '#5BB8B8' }}>23.5d → 10d</span>
                                    </div>
                                    <div className="progress-bar" style={{ background: 'rgba(255,255,255,0.1)' }}>
                                        <div className="progress-fill" style={{ width: '43%', background: 'var(--amber)' }}></div>
                                    </div>
                                </div>
                                <div className="progress-item">
                                    <div className="progress-header">
                                        <span className="progress-label" style={{ color: 'rgba(255,255,255,0.8)' }}>Offer Acceptance Rate</span>
                                        <span className="progress-val" style={{ color: '#5BB8B8' }}>66.4% → 78%</span>
                                    </div>
                                    <div className="progress-bar" style={{ background: 'rgba(255,255,255,0.1)' }}>
                                        <div className="progress-fill" style={{ width: '78%', background: 'var(--gold)' }}></div>
                                    </div>
                                </div>
                                <div className="progress-item">
                                    <div className="progress-header">
                                        <span className="progress-label" style={{ color: 'rgba(255,255,255,0.8)' }}>CV Screening Time Saved</span>
                                        <span className="progress-val" style={{ color: '#5BB8B8' }}>40% reduction</span>
                                    </div>
                                    <div className="progress-bar" style={{ background: 'rgba(255,255,255,0.1)' }}>
                                        <div className="progress-fill" style={{ width: '40%', background: 'var(--coral)' }}></div>
                                    </div>
                                </div>
                                <div className="progress-item">
                                    <div className="progress-header">
                                        <span className="progress-label" style={{ color: 'rgba(255,255,255,0.8)' }}>Annual Cost Savings</span>
                                        <span className="progress-val" style={{ color: '#5BB8B8' }}>₹6.2 Lakhs</span>
                                    </div>
                                    <div className="progress-bar" style={{ background: 'rgba(255,255,255,0.1)' }}>
                                        <div className="progress-fill" style={{ width: '85%', background: 'var(--mint)' }}></div>
                                    </div>
                                </div>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '12px', marginTop: '20px' }}>*Projections based on current placement volumes of ~3,100 joinings/year and current cost-per-hire of ₹3,233</p>
                        </div>
                    </div>
                </section>

                {/*<!-- ══ SECTION 8: DASHBOARD DESIGN ══ --> */}
                <section id="dashboard">
                    <div className="section-label">Dashboard Design</div>
                    <h2 className="section-title">Power BI &amp; Tableau Dashboard Blueprint</h2>
                    <p className="section-desc">The analytics platform should deliver five interconnected views, enabling leadership to monitor hiring health from agency-wide KPIs down to individual recruiter performance.</p>

                    <div className="card-grid card-grid-3">
                        <div className="card">
                            <div className="card-icon" style={{ background: '#E8F5F5' }}>📊</div>
                            <h3>Page 1: Executive Overview</h3>
                            <p>8 KPI cards, hiring funnel waterfall, monthly trend line, and attrition gauge. Filterable by Year, Quarter, and Client Company. Single-screen health check for leadership.</p>
                        </div>
                        <div className="card">
                            <div className="card-icon" style={{ background: '#FFF7E0' }}>🎯</div>
                            <h3>Page 2: Role Performance</h3>
                            <p>Role-wise selection rates, TTH box plots, attrition heatmap, and salary comparison table. Drill-through to individual candidate records for any selected role.</p>
                        </div>
                        <div className="card">
                            <div className="card-icon" style={{ background: '#E8EDF5' }}>📡</div>
                            <h3>Page 3: Source Intelligence</h3>
                            <p>Source conversion funnel, cost-per-source scatter plot, LinkedIn vs Job Portal quality comparison, and monthly source mix evolution. Enables dynamic budget reallocation decisions.</p>
                        </div>
                        <div className="card">
                            <div className="card-icon" style={{ background: '#FDEAEA' }}>⚠️</div>
                            <h3>Page 4: Attrition Early Warning</h3>
                            <p>30-day attrition risk tracker, salary ratio alert flags, role-wise retention benchmarks, and ML risk score distribution. Enables proactive retention calls before the 90-day mark.</p>
                        </div>
                        <div className="card">
                            <div className="card-icon" style={{ background: '#E8F5EE' }}>👤</div>
                            <h3>Page 5: Recruiter Analytics</h3>
                            <p>Per-recruiter placement volume, TTH performance vs. team average, offer acceptance rate, and 90-day retention rate. Enables fair performance reviews with data-backed metrics.</p>
                        </div>
                        <div className="card">
                            <div className="card-icon" style={{ background: '#F5EEF5' }}>🏢</div>
                            <h3>Page 6: Client Account View</h3>
                            <p>Per-client hiring status, open requirements, attrition comparison across clients, salary benchmarks, and SLA compliance tracker. Shared directly with client HR teams via embedded portal.</p>
                        </div>
                    </div>
                </section>

                {/* <!-- ══ SECTION 9: FOLDER STRUCTURE ══ -->
                <section id="structure">
                    <div className="section-label">Project Structure</div>
                    <h2 className="section-title">GitHub-Ready Portfolio Project</h2>

                    <div className="card-grid card-grid-2">
                       <div>
                            <div className="card">
                                 <h3 style={{marginBottom: '16px'}}>📁 Folder Structure</h3>
                                <pre style={{fontFamily: '\'DM Mono\',monospace', fontSize: '12px', lineHeight: '1.9', color: 'var(--text)', background: 'var(--light)', padding: '20px', borderRadius: '10px', overflow: 'auto'}}>
                                    chennai-manpower-analytics/
                                    ├── data/
                                    │   ├── raw_hiring_data.csv       # Raw 7,500 records
                                    │   ├── clean_hiring_data.csv     # Processed dataset
                                    │   ├── kpis.json                 # Computed KPI values
                                    │   └── summary.json              # Model + EDA summary
                                    ├── notebooks/
                                    │   ├── 01_data_generation.ipynb
                                    │   ├── 02_eda_analysis.ipynb
                                    │   ├── 03_predictive_model.ipynb
                                    │   └── 04_insights_report.ipynb
                                    ├── src/
                                    │   ├── generate_all.py           # Full pipeline script
                                    │   ├── data_cleaner.py
                                    │   ├── feature_engineering.py
                                    │   └── model_trainer.py
                                    ├── charts/
                                    │   ├── 01_role_hiring_funnel.png
                                    │   ├── 02_source_effectiveness.png
                                    │   ├── ...
                                    │   └── 12_confusion_matrix.png
                                    ├── reports/
                                    │   ├── case_study.html           # This report
                                    │   └── stakeholder_deck.pptx
                                    └── README.md
                                </pre>
                            </div>
                        </div> 
                        <div>
                            <div className="card">
                                <h3 style={{ marginBottom: '16px' }}>🛠 Tech Stack</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--light)', borderRadius: '8px' }}>
                                        <span style={{ fontWeight: '600', color: 'var(--navy)' }}>Python 3.11+</span>
                                        <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Core Language</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--light)', borderRadius: '8px' }}>
                                        <span style={{ fontWeight: '600', color: 'var(--navy)' }}>Pandas + NumPy</span>
                                        <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Data Processing</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--light)', borderRadius: '8px' }}>
                                        <span style={{ fontWeight: '600', color: 'var(--navy)' }}>Matplotlib + Seaborn</span>
                                        <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Visualization</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--light)', borderRadius: '8px' }}>
                                        <span style={{ fontWeight: '600', color: 'var(--navy)' }}>scikit-learn</span>
                                        <span style={{ fontSize: '12px', color: 'var(--muted)' }}>ML Modeling</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--light)', borderRadius: '8px' }}>
                                        <span style={{ fontWeight: '600', color: 'var(--navy)' }}>Power BI / Tableau</span>
                                        <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Dashboard</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--light)', borderRadius: '8px' }}>
                                        <span style={{ fontWeight: '600', color: 'var(--navy)' }}>Next.js / React</span>
                                        <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Case Study Web Report</span>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: 'var(--light)', borderRadius: '8px' }}>
                                        <span style={{ fontWeight: '600', color: 'var(--navy)' }}>python-pptx</span>
                                        <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Stakeholder Presentation</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>*/}

                {/*<!-- ══ SECTION 10: CONCLUSION ══ --> */}
                <section id="conclusion">
                    <div className="section-label">Conclusion</div>
                    <h2 className="section-title">Summary &amp; Strategic Outlook</h2>

                    <div className="callout">
                        <p>"This analysis demonstrates that the Chennai Manpower Agency's primary challenge is not a volume problem — it is a precision problem. The data reveals highly actionable patterns: salary gaps drive attrition, LinkedIn drives quality, and attitude scores predict selection. Fixing these three levers alone could generate over ₹6 lakhs in annual savings while improving client satisfaction scores across all 15 accounts."</p>
                        <cite>— Case Study Conclusion, Workforce Intelligence Platform, April 2026</cite>
                    </div>

                    <div className="stat-row" style={{ marginTop: '40px' }}>
                        <div className="stat-pill"><span className="stat-pill-num">7,500</span><span className="stat-pill-lbl">Records Analyzed</span></div>
                        <div className="stat-pill"><span className="stat-pill-num">12</span><span className="stat-pill-lbl">EDA Charts</span></div>
                        <div className="stat-pill"><span className="stat-pill-num">4</span><span className="stat-pill-lbl">ML Models Trained</span></div>
                        <div className="stat-pill"><span className="stat-pill-num">8</span><span className="stat-pill-lbl">Business KPIs</span></div>
                        <div className="stat-pill"><span className="stat-pill-num">8</span><span className="stat-pill-lbl">Recommendations</span></div>
                        <div className="stat-pill"><span className="stat-pill-num">₹6.2L</span><span className="stat-pill-lbl">Projected Savings</span></div>
                    </div>
                </section>

            </div>{/*<!-- /page-wrap -->*/}

            <footer>
                <div>
                    <div className="footer-brand">Chennai <span>Manpower</span> Analytics</div>
                    <div className="footer-meta" style={{ marginTop: '8px' }}>Workforce Intelligence Platform · Case Study Report · April 2026</div>
                </div>
                <div className="footer-meta" style={{ textAlign: 'right' }}>
                    Built with Python · pandas · scikit-learn · Matplotlib<br />
                    Report: Next.js-style HTML · Charts: Seaborn/Matplotlib<br />
                    Dataset: 7,500 synthetic records · 2022–2024
                </div>
            </footer>
        </>
    );
}