// ── All case study data in one place ────────────────────────

export const KPI_CARDS = [
  { label: 'Total Revenue',      value: '₹4.87 Cr',  sub: 'Projected Annual',       color: 'brand'   },
  { label: 'Total Orders',       value: '1,00,000+', sub: '3-Year Period',           color: 'saffron' },
  { label: 'Avg Order Value',    value: '₹1,780',    sub: 'Per Delivered Order',     color: 'emerald' },
  { label: 'Churn Rate',         value: '27%',        sub: 'Target: reduce to 20%',  color: 'ruby'    },
  { label: 'Repeat Purchase',    value: '38%',        sub: 'Target: raise to 55%',   color: 'brand'   },
  { label: 'CSAT Score',         value: '3.9 / 5',   sub: 'Customer Support',        color: 'saffron' },
]

export const MONTHLY_REVENUE = [
  { month: 'Jan 22', revenue: 1120000, orders: 630 },
  { month: 'Feb 22', revenue: 1080000, orders: 610 },
  { month: 'Mar 22', revenue: 1250000, orders: 705 },
  { month: 'Apr 22', revenue: 1190000, orders: 672 },
  { month: 'May 22', revenue: 1310000, orders: 740 },
  { month: 'Jun 22', revenue: 1270000, orders: 718 },
  { month: 'Jul 22', revenue: 1340000, orders: 756 },
  { month: 'Aug 22', revenue: 1380000, orders: 780 },
  { month: 'Sep 22', revenue: 1420000, orders: 800 },
  { month: 'Oct 22', revenue: 1780000, orders: 1005 },
  { month: 'Nov 22', revenue: 1920000, orders: 1082 },
  { month: 'Dec 22', revenue: 2100000, orders: 1185 },
  { month: 'Jan 23', revenue: 1390000, orders: 785 },
  { month: 'Feb 23', revenue: 1450000, orders: 820 },
  { month: 'Mar 23', revenue: 1580000, orders: 892 },
  { month: 'Apr 23', revenue: 1520000, orders: 858 },
  { month: 'May 23', revenue: 1640000, orders: 925 },
  { month: 'Jun 23', revenue: 1590000, orders: 898 },
  { month: 'Jul 23', revenue: 1680000, orders: 948 },
  { month: 'Aug 23', revenue: 1730000, orders: 977 },
  { month: 'Sep 23', revenue: 1800000, orders: 1016 },
  { month: 'Oct 23', revenue: 2250000, orders: 1270 },
  { month: 'Nov 23', revenue: 2480000, orders: 1399 },
  { month: 'Dec 23', revenue: 2710000, orders: 1530 },
  { month: 'Jan 24', revenue: 1810000, orders: 1022 },
  { month: 'Feb 24', revenue: 1870000, orders: 1056 },
  { month: 'Mar 24', revenue: 2050000, orders: 1157 },
  { month: 'Apr 24', revenue: 1980000, orders: 1118 },
  { month: 'May 24', revenue: 2120000, orders: 1197 },
  { month: 'Jun 24', revenue: 2090000, orders: 1180 },
  { month: 'Jul 24', revenue: 2210000, orders: 1248 },
  { month: 'Aug 24', revenue: 2280000, orders: 1287 },
  { month: 'Sep 24', revenue: 2350000, orders: 1326 },
  { month: 'Oct 24', revenue: 2980000, orders: 1683 },
  { month: 'Nov 24', revenue: 3250000, orders: 1835 },
  { month: 'Dec 24', revenue: 3580000, orders: 2022 },
]

export const CATEGORY_REVENUE = [
  { category: 'Health & Wellness',       revenue: 8420000, pct: 28, returns: 6.2 },
  { category: 'Medical Devices',         revenue: 6600000, pct: 22, returns: 9.1 },
  { category: 'Mobility Aids',           revenue: 5100000, pct: 17, returns: 11.3 },
  { category: 'Nutrition & Supplements', revenue: 3900000, pct: 13, returns: 4.8 },
  { category: 'Personal Care',           revenue: 2700000, pct: 9,  returns: 7.4 },
  { category: 'Home Safety',             revenue: 1800000, pct: 6,  returns: 5.9 },
  { category: 'Clothing & Comfort',      revenue:  900000, pct: 3,  returns: 12.1 },
  { category: 'Entertainment & Hobbies', revenue:  600000, pct: 2,  returns: 3.2 },
]

export const STATE_PERFORMANCE = [
  { state: 'Tamil Nadu',    revenue: 7350000, customers: 1820, growth: 18 },
  { state: 'Maharashtra',   revenue: 6090000, customers: 1510, growth: 22 },
  { state: 'Karnataka',     revenue: 4350000, customers: 1080, growth: 31 },
  { state: 'Delhi',         revenue: 3600000, customers:  890, growth: 15 },
  { state: 'West Bengal',   revenue: 2850000, customers:  706, growth: 12 },
  { state: 'Gujarat',       revenue: 2100000, customers:  521, growth: 28 },
  { state: 'Telangana',     revenue: 1650000, customers:  408, growth: 35 },
  { state: 'Kerala',        revenue: 1350000, customers:  334, growth: 24 },
  { state: 'Rajasthan',     revenue:  900000, customers:  223, growth: 19 },
  { state: 'Uttar Pradesh', revenue:  750000, customers:  185, growth: 11 },
]

export const RFM_SEGMENTS = [
  { segment: 'Champions',         count: 1840, pct: 18.4, monetary: 22400, color: '#1A5276' },
  { segment: 'Loyal Customers',   count: 2310, pct: 23.1, monetary: 11800, color: '#2E86C1' },
  { segment: 'Potential Loyalist',count: 1920, pct: 19.2, monetary: 7600,  color: '#AED6F1' },
  { segment: 'At Risk',           count: 1550, pct: 15.5, monetary: 5200,  color: '#E74C3C' },
  { segment: 'Needs Attention',   count: 1380, pct: 13.8, monetary: 3100,  color: '#F39C12' },
  { segment: 'Recent Customers',  count: 1000, pct: 10.0, monetary: 1900,  color: '#27AE60' },
]

export const CLV_BY_MEMBERSHIP = [
  { tier: 'Platinum', clv: 22400, count: 1000,  churn: 8  },
  { tier: 'Gold',     clv: 14200, count: 2000,  churn: 14 },
  { tier: 'Silver',   clv: 8900,  count: 3000,  churn: 22 },
  { tier: 'Basic',    clv: 3500,  count: 4000,  churn: 31 },
]

export const ML_MODELS = [
  {
    name: 'Customer Churn Prediction',
    type: 'Classification',
    algorithm: 'XGBoost',
    metrics: { auc: 0.87, accuracy: 0.83, f1: 0.81 },
    impact: 'Flag 2,400 at-risk customers monthly',
    roi: '₹12–18L/yr',
    color: 'brand',
  },
  {
    name: 'Sales Forecasting',
    type: 'Regression',
    algorithm: 'XGBoost Regressor',
    metrics: { r2: 0.91, rmse: 68400, mape: 5.8 },
    impact: '3-month revenue planning with 94% accuracy',
    roi: '₹8–12L/yr',
    color: 'emerald',
  },
  {
    name: 'Customer Segmentation',
    type: 'Unsupervised',
    algorithm: 'K-Means (k=4)',
    metrics: { silhouette: 0.61, clusters: 4, variance: 72 },
    impact: 'Personalised campaigns per segment',
    roi: '₹4–8L/yr',
    color: 'saffron',
  },
  {
    name: 'Return Prediction',
    type: 'Classification',
    algorithm: 'XGBoost',
    metrics: { auc: 0.82, precision: 0.79, recall: 0.76 },
    impact: 'Flag high-risk orders pre-shipment',
    roi: '₹3–5L/yr',
    color: 'ruby',
  },
  {
    name: 'Demand Forecasting',
    type: 'Regression',
    algorithm: 'Random Forest',
    metrics: { rmseUnits: 11.4, coverage: 8, categories: 8 },
    impact: 'Auto-trigger reorders, -30% stockouts',
    roi: '₹8–12L/yr',
    color: 'brand',
  },
]

export const CHURN_FEATURES = [
  { feature: 'Days since last order',    importance: 0.31 },
  { feature: 'Total orders',             importance: 0.22 },
  { feature: 'Escalated tickets',        importance: 0.14 },
  { feature: 'Membership tier',          importance: 0.11 },
  { feature: 'Avg satisfaction score',   importance: 0.09 },
  { feature: 'Total returns',            importance: 0.07 },
  { feature: 'Avg order value',          importance: 0.06 },
]

export const CONVERSION_FUNNEL = [
  { stage: 'Total Sessions',    count: 150000, pct: 100  },
  { stage: 'Browsed (3+ pages)',count: 97500,  pct: 65   },
  { stage: 'Added to Cart',     count: 52500,  pct: 35   },
  { stage: 'Reached Checkout',  count: 27000,  pct: 18   },
  { stage: 'Converted',         count: 18000,  pct: 12   },
]

export const TRAFFIC_SOURCES = [
  { source: 'Organic Search',   sessions: 37500, convRate: 10.2, color: '#1A5276' },
  { source: 'Email Campaign',   sessions: 22500, convRate: 14.2, color: '#27AE60' },
  { source: 'Paid Search',      sessions: 30000, convRate: 11.8, color: '#2E86C1' },
  { source: 'Social Media',     sessions: 30000, convRate: 8.4,  color: '#E67E22' },
  { source: 'Direct',           sessions: 22500, convRate: 13.1, color: '#8E44AD' },
  { source: 'WhatsApp',         sessions: 10500, convRate: 15.6, color: '#27AE60' },
  { source: 'Referral',         sessions:  4500, convRate: 9.7,  color: '#F39C12' },
]

export const SUPPORT_ISSUES = [
  { issue: 'Delivery Delay',  tickets: 9300,  satisfaction: 3.2, resolution: 4.1 },
  { issue: 'Wrong Product',   tickets: 5100,  satisfaction: 3.5, resolution: 3.8 },
  { issue: 'Quality Issue',   tickets: 4200,  satisfaction: 3.1, resolution: 5.2 },
  { issue: 'Billing Problem', tickets: 3600,  satisfaction: 3.8, resolution: 2.9 },
  { issue: 'Return Request',  tickets: 3300,  satisfaction: 3.9, resolution: 3.5 },
  { issue: 'Payment Failed',  tickets: 2100,  satisfaction: 4.0, resolution: 1.8 },
  { issue: 'Missing Item',    tickets: 1500,  satisfaction: 3.3, resolution: 4.4 },
  { issue: 'Product Damage',  tickets:  900,  satisfaction: 2.9, resolution: 6.1 },
]

export const ROI_PROJECTIONS = [
  { initiative: 'Churn Intervention',     investment: 150000,  minReturn: 1200000, maxReturn: 1800000, timeline: '3 months'  },
  { initiative: 'Inventory Optimisation', investment:  80000,  minReturn:  800000, maxReturn: 1200000, timeline: '2 months'  },
  { initiative: 'Personalisation',        investment: 200000,  minReturn:  400000, maxReturn:  800000, timeline: '5 months'  },
  { initiative: 'Mobile UX Redesign',     investment: 300000,  minReturn:  600000, maxReturn: 1000000, timeline: '4 months'  },
  { initiative: 'Abandoned Cart (WA)',    investment:  50000,  minReturn:  400000, maxReturn:  600000, timeline: '1 month'   },
]

export const DATASET_OVERVIEW = [
  { table: 'customers',        rows: 10000,  cols: 13, description: 'Senior citizen profiles, demographics, membership' },
  { table: 'orders',           rows: 100000, cols: 13, description: 'Transactions with pricing, delivery, return status' },
  { table: 'products',         rows: 500,    cols: 11, description: 'Product catalogue, cost, ratings, stock levels'     },
  { table: 'website_behavior', rows: 150000, cols: 9,  description: 'Session data, device, traffic source, conversion'  },
  { table: 'customer_support', rows: 30000,  cols: 8,  description: 'Support tickets, resolution time, satisfaction'    },
]

export const TECH_STACK = [
  { layer: 'Data Generation',    tools: ['Python 3.11', 'Faker', 'NumPy'],              color: 'brand'   },
  { layer: 'Data Engineering',   tools: ['Pandas', 'SQLAlchemy', 'PostgreSQL'],          color: 'emerald' },
  { layer: 'Machine Learning',   tools: ['Scikit-learn', 'XGBoost', 'LightGBM', 'SHAP'],color: 'saffron' },
  { layer: 'Visualisation',      tools: ['Matplotlib', 'Seaborn', 'Plotly'],             color: 'ruby'    },
  { layer: 'Dashboard',          tools: ['Streamlit', 'Next.js', 'Recharts'],            color: 'brand'   },
]
