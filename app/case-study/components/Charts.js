'use client';
import { useEffect, useRef } from 'react';
import {
  Chart,
  CategoryScale, LinearScale, BarElement,
  BarController, 
  Title, Tooltip, Legend,
} from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, BarController, Legend);

const TEAL  = '#0d7a6e';
const AMBER = '#c46a11';
const MINT  = '#0e8a68';
const CORAL = '#b53318';
const SKY   = '#1a6fa0';
const GOLD  = '#c8900c';
const MUTED = '#556b85';

function useChart(ref, config) {
  useEffect(() => {
    if (!ref.current) return;
    const chart = new Chart(ref.current, config);
    return () => chart.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

function ChartCard({ title, subtitle, tag, tagClass, children, insight }) {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 14, overflow: 'hidden', marginBottom: 22 }}>
      <div style={{ padding: '18px 22px 14px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
        <div>
          <div style={{ fontFamily: 'Syne, sans-serif', fontSize: 14, fontWeight: 700, color: 'var(--navy)' }}>{title}</div>
          <div style={{ fontSize: 11.5, color: 'var(--muted)', marginTop: 2 }}>{subtitle}</div>
        </div>
        <span className={tagClass} style={{ whiteSpace: 'nowrap' }}>{tag}</span>
      </div>
      <div style={{ padding: '18px 22px' }}>
        {children}
        {insight && (
          <div style={{ marginTop: 14, padding: '12px 16px', background: 'var(--light)', borderRadius: 9, borderLeft: '3px solid var(--teal)', fontSize: 12.5, color: 'var(--muted)', lineHeight: 1.6 }}>
            {insight}
          </div>
        )}
      </div>
    </div>
  );
}

export function FunnelChart() {
  const ref = useRef();
  useChart(ref, {
    type: 'bar',
    data: {
      labels: ['Civil Labour','Security Guard','Driver','Helper','Welder','Accountant','Receptionist','IT Support','Manager'],
      datasets: [
        { label: 'Applications', data: [1420,1180,980,820,710,630,590,580,590], backgroundColor: 'rgba(13,122,110,0.18)', borderColor: TEAL, borderWidth: 1.5, borderRadius: 3 },
        { label: 'Selected',     data: [890,720,640,520,460,400,380,370,360],   backgroundColor: 'rgba(200,144,12,0.22)', borderColor: AMBER, borderWidth: 1.5, borderRadius: 3 },
        { label: 'Joined',       data: [680,540,510,400,360,310,290,295,285],   backgroundColor: 'rgba(14,138,104,0.22)', borderColor: MINT,  borderWidth: 1.5, borderRadius: 3 },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false, indexAxis: 'y',
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: 'rgba(0,0,0,0.04)' } },
        y: { grid: { display: false }, ticks: { font: { size: 11 }, color: MUTED } },
      },
    },
  });
  return (
    <ChartCard
      title="Hiring Funnel — Role-wise Conversion"
      subtitle="Applications → Selected → Joined, by job category"
      tag="EDA"
      tagClass="chart-tag-eda"
      insight={<><strong style={{color:'var(--navy)'}}>Key insight:</strong> Civil Labour and Security Guard roles show the highest application volumes but alarming 90-day attrition (24–25%). Manager and Accountant roles have the lowest volumes but longest time-to-hire, creating SLA risk for white-collar clients.</>}
    >
      <div style={{ position: 'relative', width: '100%', height: 280 }}>
        <canvas ref={ref} />
      </div>
    </ChartCard>
  );
}

export function SourceChart() {
  const ref = useRef();
  useChart(ref, {
    type: 'bar',
    data: {
      labels: ['Referral','LinkedIn','Campus','Job Portal','Walk-in','Newspaper'],
      datasets: [{
        label: 'Conversion Rate %',
        data: [49.2, 47.8, 46.1, 45.2, 42.3, 39.1],
        backgroundColor: [MINT, TEAL, 'rgba(26,111,160,0.7)', 'rgba(200,144,12,0.6)', 'rgba(181,51,24,0.5)', 'rgba(85,107,133,0.5)'],
        borderRadius: 5,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        y: { min: 35, max: 55, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { callback: v => v + '%', color: MUTED } },
        x: { grid: { display: false }, ticks: { color: MUTED } },
      },
    },
  });
  return (
    <ChartCard
      title="Source Channel Effectiveness"
      subtitle="Conversion rate by recruitment channel"
      tag="EDA"
      tagClass="chart-tag-eda"
      insight={<><strong style={{color:'var(--navy)'}}>Key insight:</strong> Referral (49.2%) and LinkedIn (47.8%) deliver the highest conversion. Newspaper Ads produce the lowest quality at 39.1% — a clear budget reallocation opportunity.</>}
    >
      <div style={{ position: 'relative', width: '100%', height: 220 }}>
        <canvas ref={ref} />
      </div>
    </ChartCard>
  );
}

export function AttritionChart() {
  const ref = useRef();
  useChart(ref, {
    type: 'bar',
    data: {
      labels: ['Security Guard','Civil Labour','Helper','Driver','Welder','Receptionist','IT Support','Accountant','Manager'],
      datasets: [{
        label: 'Attrition %',
        data: [25.5, 24.7, 22.1, 20.8, 19.3, 17.6, 16.2, 14.8, 13.5],
        backgroundColor: [CORAL, CORAL, 'rgba(200,144,12,0.6)', 'rgba(200,144,12,0.6)', 'rgba(200,144,12,0.5)', TEAL, TEAL, TEAL, TEAL],
        borderRadius: 5,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false, indexAxis: 'y',
      plugins: { legend: { display: false } },
      scales: {
        x: { min: 10, max: 30, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { callback: v => v + '%', color: MUTED } },
        y: { grid: { display: false }, ticks: { font: { size: 11 }, color: MUTED } },
      },
    },
  });
  return (
    <ChartCard
      title="Attrition by Role"
      subtitle="90-day attrition rate breakdown"
      tag="KPI"
      tagClass="chart-tag-kpi"
      insight={<><strong style={{color:'var(--navy)'}}>Key insight:</strong> Security Guard (25.5%) and Civil Labour (24.7%) attrition is nearly double the agency average. Salary ratio below 0.92 is a confirmed trigger.</>}
    >
      <div style={{ position: 'relative', width: '100%', height: 220 }}>
        <canvas ref={ref} />
      </div>
    </ChartCard>
  );
}

export function TTHChart() {
  const ref = useRef();
  useChart(ref, {
    type: 'bar',
    data: {
      labels: ['Manager','Accountant','IT Support','Receptionist','Welder','Driver','Helper','Security Guard','Civil Labour'],
      datasets: [{
        label: 'Avg Days',
        data: [23.5, 18.2, 15.8, 13.4, 11.2, 9.1, 8.3, 7.6, 6.4],
        backgroundColor: [CORAL, CORAL, 'rgba(200,144,12,0.6)', 'rgba(200,144,12,0.6)', 'rgba(200,144,12,0.5)', TEAL, TEAL, TEAL, TEAL],
        borderRadius: 5,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false, indexAxis: 'y',
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { callback: v => v + 'd', color: MUTED } },
        y: { grid: { display: false }, ticks: { font: { size: 11 }, color: MUTED } },
      },
    },
  });
  return (
    <ChartCard
      title="Average Time-to-Hire by Role (Days)"
      subtitle="End-to-end hiring cycle duration"
      tag="KPI"
      tagClass="chart-tag-kpi"
      insight={<><strong style={{color:'var(--navy)'}}>Key insight:</strong> The 3.7× gap between Manager (23.5 days) and Civil Labour (6.4 days) TTH indicates severely underdeveloped white-collar pipelines. Pre-approved candidate pools could close this gap by 60%.</>}
    >
      <div style={{ position: 'relative', width: '100%', height: 240 }}>
        <canvas ref={ref} />
      </div>
    </ChartCard>
  );
}

export function MLChart() {
  const ref = useRef();
  useChart(ref, {
    type: 'bar',
    data: {
      labels: ['Logistic Regression','Random Forest','Decision Tree','Naive Bayes'],
      datasets: [
        { label: 'Accuracy',   data: [63.8, 64.4, 61.2, 62.5], backgroundColor: 'rgba(13,122,110,0.7)',  borderRadius: 4 },
        { label: 'F1 Score',   data: [78.5, 72.1, 68.4, 70.2], backgroundColor: 'rgba(200,144,12,0.7)', borderRadius: 4 },
        { label: 'AUC ×100',   data: [55.1, 52.5, 50.2, 51.8], backgroundColor: 'rgba(26,111,160,0.7)', borderRadius: 4 },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels: { font: { family: 'IBM Plex Mono', size: 11 }, color: MUTED } } },
      scales: {
        y: { min: 45, max: 85, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { callback: v => v + '%', color: MUTED } },
        x: { grid: { display: false }, ticks: { font: { size: 11 }, color: MUTED } },
      },
    },
  });
  return (
    <ChartCard
      title="Model Performance Comparison"
      subtitle="Accuracy, F1, AUC across 4 classifiers"
      tag="ML"
      tagClass="chart-tag-ml"
      insight={<><strong style={{color:'var(--navy)'}}>Key insight:</strong> Logistic Regression achieved the highest AUC (0.5509) and F1 (78.5%), making it the recommended first-filter model. Random Forest benefits from attitude_score and salary_ratio as top features — both available at screening time.</>}
    >
      <div style={{ position: 'relative', width: '100%', height: 260 }}>
        <canvas ref={ref} />
      </div>
    </ChartCard>
  );
}
