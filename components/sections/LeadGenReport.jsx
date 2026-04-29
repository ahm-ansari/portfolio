'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

/* ─── tiny helpers ─────────────────────────────────── */
function Divider() {
  return <div style={{ height: '1px', background: 'rgba(10,22,40,0.1)', margin: '48px 0' }} />;
}

function SecHeader({ num, title, desc }) {
  return (
    <div style={{ marginBottom: '28px' }}>
      <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#0FA882', marginBottom: '6px' }}>
        Section {num}
      </div>
      <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(22px, 4vw, 32px)', color: '#0A1628', lineHeight: 1.15, marginBottom: '8px' }}>
        {title}
      </div>
      {desc && <div style={{ fontSize: '14px', color: '#6C757D', maxWidth: '640px', lineHeight: 1.7 }}>{desc}</div>}
    </div>
  );
}

/* ─── Charts (client-side only) ────────────────────── */
function Charts() {
  const monthly = useRef(null);
  const sourceBar = useRef(null);
  const convRate = useRef(null);
  const bubble = useRef(null);
  const respTime = useRef(null);
  const zoneDonut = useRef(null);
  const chartsRef = useRef({});

  useEffect(() => {
    let script = document.getElementById('chartjs-cdn');
    const init = () => buildCharts();
    if (!script) {
      script = document.createElement('script');
      script.id = 'chartjs-cdn';
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js';
      script.onload = init;
      document.head.appendChild(script);
    } else if (window.Chart) {
      init();
    } else {
      script.addEventListener('load', init);
    }
    return () => {
      Object.values(chartsRef.current).forEach(c => c?.destroy?.());
    };
  }, []);

  function buildCharts() {
    const C = window.Chart;
    C.defaults.font.family = "'DM Sans', sans-serif";
    C.defaults.color = '#6C757D';

    const months = [
      'Jan 22','Feb 22','Mar 22','Apr 22','May 22','Jun 22','Jul 22','Aug 22','Sep 22','Oct 22','Nov 22','Dec 22',
      'Jan 23','Feb 23','Mar 23','Apr 23','May 23','Jun 23','Jul 23','Aug 23','Sep 23','Oct 23','Nov 23','Dec 23',
      'Jan 24','Feb 24','Mar 24','Apr 24','May 24','Jun 24','Jul 24','Aug 24','Sep 24','Oct 24','Nov 24','Dec 24',
    ];
    const leadsData = [2100,2050,2200,2350,2400,2450,2500,2520,2600,2900,2850,2820,2500,2480,2650,2700,2780,2820,2880,2900,2950,3100,3050,3000,2700,2650,2800,2900,2950,3020,2964,2927,2905,2994,2801,2999];
    const convData  = [9.5,9.8,10,10.5,11,10.8,11.2,11,11.5,9.8,9.5,5.2,10.2,10.4,10.8,11.1,11.3,11,11.4,11.2,11.8,10,9.8,5,11,11.2,11.5,11.8,11.4,11.2,11.5,10.7,12.2,7.2,7.4,3];

    if (monthly.current) {
      chartsRef.current.m?.destroy();
      chartsRef.current.m = new C(monthly.current, {
        type: 'bar',
        data: {
          labels: months,
          datasets: [
            { label: 'Lead Volume', data: leadsData, backgroundColor: 'rgba(10,22,40,0.12)', borderColor: '#0A1628', borderWidth: 1, yAxisID: 'y', borderRadius: 3 },
            { label: 'Conv Rate %', data: convData, type: 'line', borderColor: '#E8A020', backgroundColor: 'rgba(232,160,32,0.1)', tension: 0.4, pointRadius: 2, pointBackgroundColor: '#E8A020', yAxisID: 'y1', borderWidth: 2, fill: true },
          ],
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { maxRotation: 45, font: { size: 10 }, autoSkip: true, maxTicksLimit: 18 }, grid: { display: false } },
            y: { position: 'left', title: { display: true, text: 'Leads', font: { size: 11 } }, grid: { color: 'rgba(0,0,0,0.05)' } },
            y1: { position: 'right', title: { display: true, text: 'Conv %', font: { size: 11 } }, min: 0, max: 20, grid: { display: false } },
          },
        },
      });
    }

    const sources = ['JustDial','Google Ads','GMB','Sulekha','Instagram Ads','Facebook Ads','Website Inq.','WhatsApp','FB Lead Form','Referral'];
    const sourceCounts = [18865,16734,10589,9601,8399,7377,7322,5175,4318,4145];
    const sourceColors = ['#0A1628','#0FA882','#E8A020','#2563EB','#D85A30','#854F0B','#0F6E56','#3C3489','#1D9E75','#7A4F08'];

    if (sourceBar.current) {
      chartsRef.current.sb?.destroy();
      chartsRef.current.sb = new C(sourceBar.current, {
        type: 'bar',
        data: { labels: sources, datasets: [{ label: 'Leads', data: sourceCounts, backgroundColor: sourceColors, borderRadius: 4 }] },
        options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { color: 'rgba(0,0,0,0.05)' }, ticks: { font: { size: 11 } } }, y: { ticks: { font: { size: 11 } }, grid: { display: false } } } },
      });
    }

    const convRates = [9.3,13,15.1,7.8,6.2,7.1,16.4,11.9,6.9,28.4];
    if (convRate.current) {
      chartsRef.current.cr?.destroy();
      chartsRef.current.cr = new C(convRate.current, {
        type: 'bar',
        data: { labels: sources, datasets: [{ label: 'Conv %', data: convRates, backgroundColor: convRates.map(v => v >= 15 ? '#0FA882' : v >= 10 ? '#E8A020' : '#D85A30'), borderRadius: 4 }] },
        options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { color: 'rgba(0,0,0,0.05)' }, max: 32, ticks: { font: { size: 11 }, callback: v => v + '%' } }, y: { ticks: { font: { size: 11 } }, grid: { display: false } } } },
      });
    }

    const bubbleSources = [
      { label: 'Referral', x: 0, y: 28.4, r: 14, color: '#0FA882' },
      { label: 'WhatsApp', x: 17, y: 11.9, r: 10, color: '#0FA882' },
      { label: 'GMB', x: 66, y: 15.1, r: 18, color: '#0FA882' },
      { label: 'Web Inq.', x: 88, y: 16.4, r: 15, color: '#0FA882' },
      { label: 'Google Ads', x: 461, y: 13, r: 20, color: '#E8A020' },
      { label: 'JustDial', x: 307, y: 9.3, r: 22, color: '#E8A020' },
      { label: 'Sulekha', x: 208, y: 7.8, r: 17, color: '#E8A020' },
      { label: 'FB Ads', x: 297, y: 7.1, r: 15, color: '#D85A30' },
      { label: 'IG Ads', x: 341, y: 6.2, r: 16, color: '#D85A30' },
      { label: 'Cold Call', x: 131, y: 5.9, r: 10, color: '#D85A30' },
    ];
    if (bubble.current) {
      chartsRef.current.bu?.destroy();
      chartsRef.current.bu = new C(bubble.current, {
        type: 'bubble',
        data: { datasets: bubbleSources.map(s => ({ label: s.label, data: [{ x: s.x, y: s.y, r: s.r }], backgroundColor: s.color + 'BB', borderColor: s.color, borderWidth: 1.5 })) },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: ctx => `${ctx.dataset.label}: CPL ₹${ctx.parsed.x}, Conv ${ctx.parsed.y}%` } } },
          scales: {
            x: { title: { display: true, text: 'Cost Per Lead (₹)', font: { size: 11 } }, min: -30, grid: { color: 'rgba(0,0,0,0.05)' } },
            y: { title: { display: true, text: 'Conversion Rate (%)', font: { size: 11 } }, min: 0, max: 35, grid: { color: 'rgba(0,0,0,0.05)' } },
          },
        },
      });
    }

    if (respTime.current) {
      chartsRef.current.rt?.destroy();
      chartsRef.current.rt = new C(respTime.current, {
        type: 'bar',
        data: { labels: ['< 1 hr', '1–4 hrs', '4–8 hrs', '8–24 hrs', '24+ hrs'], datasets: [{ label: 'Conversion Rate %', data: [12.9,11.2,9.6,9.5,6.9], backgroundColor: ['#0FA882','#5DCAA5','#E8A020','#D85A30','#8B2E10'], borderRadius: 6 }] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { grid: { display: false } }, y: { grid: { color: 'rgba(0,0,0,0.05)' }, max: 16, ticks: { callback: v => v + '%' } } } },
      });
    }

    if (zoneDonut.current) {
      chartsRef.current.zd?.destroy();
      chartsRef.current.zd = new C(zoneDonut.current, {
        type: 'doughnut',
        data: { labels: ['South','Central','North','West','OMR','GST Belt'], datasets: [{ data: [234,214,199,165,155,119], backgroundColor: ['#0A1628','#0FA882','#E8A020','#2563EB','#D85A30','#ADB5BD'], borderWidth: 2, borderColor: '#fff' }] },
        options: { responsive: true, maintainAspectRatio: false, cutout: '68%', plugins: { legend: { display: false } } },
      });
    }
  }

  const cardStyle = { background: '#fff', border: '1px solid rgba(10,22,40,0.1)', borderRadius: '16px', padding: '24px' };
  const titleStyle = { fontSize: '14px', fontWeight: 600, color: '#0A1628', marginBottom: '4px' };
  const subStyle = { fontSize: '12px', color: '#6C757D', marginBottom: '20px' };

  return (
    <>
      {/* Monthly Trend */}
      <div style={{ ...cardStyle, marginBottom: '20px' }}>
        <div style={titleStyle}>Monthly Lead Volume &amp; Conversion Trend (2022–2024)</div>
        <div style={subStyle}>Seasonal peaks in Q4 (Oct–Dec); conversion dips at year-end due to pipeline lag</div>
        <div style={{ position: 'relative', height: '280px' }}>
          <canvas ref={monthly} role="img" aria-label="Monthly lead volume and conversion rate trend 2022 to 2024" />
        </div>
      </div>

      {/* Source Volume + Conv Rate */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="chart-row-2">
        <div style={cardStyle}>
          <div style={titleStyle}>Lead Volume by Source</div>
          <div style={subStyle}>Total leads generated per channel</div>
          <div style={{ position: 'relative', height: '320px' }}>
            <canvas ref={sourceBar} role="img" aria-label="Lead counts per acquisition channel" />
          </div>
        </div>
        <div style={cardStyle}>
          <div style={titleStyle}>Conversion Rate by Source (%)</div>
          <div style={subStyle}>% of leads that converted per channel</div>
          <div style={{ position: 'relative', height: '320px' }}>
            <canvas ref={convRate} role="img" aria-label="Conversion rates per source channel" />
          </div>
        </div>
      </div>

      {/* Bubble + Funnel */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="chart-row-2">
        <div style={cardStyle}>
          <div style={titleStyle}>CPL vs Conversion Rate — Source Comparison</div>
          <div style={subStyle}>Bubble size = total leads; top-right = high efficiency</div>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '12px' }}>
            <span style={{ fontSize: '11px', background: '#E1F5EE', padding: '3px 8px', borderRadius: '4px', color: '#0B7A5C' }}>Top-Right = Best ROI Zone</span>
            <span style={{ fontSize: '11px', background: '#FAECE7', padding: '3px 8px', borderRadius: '4px', color: '#8B2E10' }}>Bottom-Right = High Cost, Low Return</span>
          </div>
          <div style={{ position: 'relative', height: '280px' }}>
            <canvas ref={bubble} role="img" aria-label="CPL versus conversion rate scatter plot" />
          </div>
        </div>
        <div style={cardStyle}>
          <div style={titleStyle}>Lead Conversion Funnel</div>
          <div style={subStyle}>Drop-off at each stage of the sales pipeline</div>
          <FunnelViz />
        </div>
      </div>

      {/* Response Time + Zone Donut */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }} className="chart-row-2">
        <div style={cardStyle}>
          <div style={titleStyle}>Response Time Impact on Conversion</div>
          <div style={subStyle}>Leads responded to within 1 hour convert 85% more than 24+ hour responses</div>
          <div style={{ position: 'relative', height: '240px' }}>
            <canvas ref={respTime} role="img" aria-label="Conversion rate by response time bucket" />
          </div>
        </div>
        <div style={cardStyle}>
          <div style={titleStyle}>Zone-wise Revenue Distribution</div>
          <div style={subStyle}>South Chennai and OMR Corridor lead in corporate IT contracts</div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginTop: '8px' }}>
            <div style={{ position: 'relative', width: '160px', height: '200px', flexShrink: 0 }}>
              <canvas ref={zoneDonut} role="img" aria-label="Donut chart of revenue by Chennai zone" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', flex: 1, justifyContent: 'center', marginTop: '16px' }}>
              {[
                { color: '#0A1628', name: 'South Chennai', val: '₹234 Cr' },
                { color: '#0FA882', name: 'Central Chennai', val: '₹214 Cr' },
                { color: '#E8A020', name: 'North Chennai', val: '₹199 Cr' },
                { color: '#2563EB', name: 'West Chennai', val: '₹165 Cr' },
                { color: '#D85A30', name: 'OMR Corridor', val: '₹155 Cr' },
                { color: '#ADB5BD', name: 'GST Road Belt', val: '₹119 Cr' },
              ].map(({ color, name, val }) => (
                <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '2px', background: color, flexShrink: 0 }} />
                  <div style={{ flex: 1, color: '#3D4B5C' }}>{name}</div>
                  <div style={{ color: '#0A1628', fontWeight: 600, fontFamily: 'DM Mono, monospace', fontSize: '11px' }}>{val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Funnel component ─────────────────────────────── */
function FunnelViz() {
  const stages = [
    { label: 'Total Leads', count: '105,000', pct: '100%', w: '100%', bg: '#0A1628', pctColor: '#0A1628' },
    { label: 'Contacted', count: '97,548', pct: '92.9%', w: '92%', bg: '#1a3a5c', pctColor: '#0A1628' },
    { label: 'Proposal Sent', count: '31,199', pct: '29.7%', w: '30%', bg: '#0FA882', pctColor: '#0A1628' },
    { label: 'Negotiation', count: '17,116', pct: '16.3%', w: '16%', bg: '#1D9E75', pctColor: '#0A1628' },
    { label: 'Converted', count: '11,366', pct: '10.8%', w: '11%', bg: '#E8A020', pctColor: '#E8A020', bold: true },
    { label: 'Lost', count: '57,861', pct: '55.1%', w: '55%', bg: '#D85A30', pctColor: '#D85A30' },
  ];
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '8px' }}>
        {stages.map(({ label, count, pct, w, bg, pctColor, bold }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '110px', fontSize: '12px', color: '#3D4B5C', fontWeight: 500 }}>{label}</div>
            <div style={{ flex: 1 }}>
              <div style={{ height: '36px', width: w, borderRadius: '6px', background: bg, display: 'flex', alignItems: 'center', padding: '0 14px', fontSize: '12px', fontWeight: 600, color: 'white', minWidth: '50px' }}>
                {count}
              </div>
            </div>
            <div style={{ width: '48px', textAlign: 'right', fontSize: '12px', fontWeight: bold ? 700 : 600, color: pctColor, fontFamily: 'DM Mono, monospace' }}>{pct}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '14px', padding: '12px', background: '#FAECE7', borderRadius: '6px' }}>
        <strong style={{ fontSize: '12px', color: '#8B2E10' }}>Critical Gap: </strong>
        <span style={{ fontSize: '12px', color: '#8B2E10' }}>62.3% of qualified leads (Proposal Sent) fail to convert. Improved follow-up cadence + pricing flexibility could recover ~3,200 deals/year.</span>
      </div>
    </div>
  );
}

/* ─── Heatmap ──────────────────────────────────────── */
function Heatmap() {
  const sources = ['Google Ads','JustDial','Facebook Ads','Instagram Ads','Sulekha','Referral','WhatsApp'];
  const quarters = ['Q1 22','Q2 22','Q3 22','Q4 22','Q1 23','Q2 23','Q3 23','Q4 23','Q1 24','Q2 24','Q3 24','Q4 24'];
  const data = [
    [1100,1150,1250,1450,1250,1320,1400,1580,1350,1380,1420,1680],
    [1400,1380,1420,1620,1500,1540,1600,1780,1580,1600,1640,1840],
    [480,500,530,620,520,560,590,680,550,580,600,700],
    [520,540,580,680,560,610,640,730,610,640,660,760],
    [600,640,680,790,700,730,770,880,720,760,790,880],
    [260,270,290,340,290,310,320,370,310,320,340,380],
    [320,340,370,420,360,390,410,470,390,410,430,490],
  ];
  const maxVal = Math.max(...data.flat());
  const cellBg = (v) => {
    const i = v / maxVal;
    if (i > 0.8) return { bg: '#0A1628', tc: 'white' };
    if (i > 0.6) return { bg: '#0FA882', tc: 'white' };
    if (i > 0.4) return { bg: '#5DCAA5', tc: 'white' };
    if (i > 0.2) return { bg: '#9FE1CB', tc: '#085041' };
    return { bg: '#E1F5EE', tc: '#085041' };
  };
  const th = { fontSize: '10px', color: '#6C757D', fontWeight: 600, padding: '5px 6px', textAlign: 'center', textTransform: 'uppercase', letterSpacing: '0.05em' };
  return (
    <div style={{ overflowX: 'auto', marginTop: '12px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
        <thead>
          <tr>
            <th style={{ ...th, textAlign: 'left' }}></th>
            {quarters.map(q => <th key={q} style={th}>{q}</th>)}
          </tr>
        </thead>
        <tbody>
          {sources.map((src, i) => (
            <tr key={src}>
              <td style={{ fontSize: '11px', color: '#6C757D', paddingRight: '8px', paddingTop: '5px', paddingBottom: '5px', whiteSpace: 'nowrap' }}>{src}</td>
              {data[i].map((v, j) => {
                const { bg, tc } = cellBg(v);
                return <td key={j} style={{ background: bg, color: tc, padding: '6px 4px', textAlign: 'center', borderRadius: '4px', fontFamily: 'DM Mono, monospace', fontWeight: 500 }}>{v}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── SQL Block ────────────────────────────────────── */
function SqlBlock({ children }) {
  return (
    <pre style={{ background: '#0A1628', borderRadius: '16px', padding: '24px', fontFamily: 'DM Mono, monospace', fontSize: '12px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, overflowX: 'auto', marginBottom: '16px', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
      {children}
    </pre>
  );
}

/* ─── Main Component ───────────────────────────────── */
export default function LeadGenReport() {
  /* shared styles */
  const S = {
    navy: '#0A1628', gold: '#E8A020', teal: '#0FA882', coral: '#D85A30', blue: '#2563EB',
    wrap: { maxWidth: '1200px', margin: '0 auto', padding: '48px 24px' },
    card: { background: '#fff', border: '1px solid rgba(10,22,40,0.1)', borderRadius: '16px', padding: '24px' },
    kpiCard: { background: '#fff', border: '1px solid rgba(10,22,40,0.1)', borderRadius: '16px', padding: '20px', position: 'relative', overflow: 'hidden' },
  };

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        .report-body { font-family: 'DM Sans', sans-serif; background: #F8F9FA; color: #0A1628; }
        .chart-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .kpi-grid-5 { display: grid; grid-template-columns: repeat(5,1fr); gap: 16px; }
        .strategy-grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
        .ml-grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
        .rec-grid-2 { display: grid; grid-template-columns: repeat(2,1fr); gap: 16px; }
        .exec-findings-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        .swot-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; border-radius: 16px; overflow: hidden; border: 1px solid rgba(10,22,40,0.1); }
        .budget-grid-4 { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        .schema-grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
        .roadmap-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
        .dax-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .challenges-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 14px; }
        @media (max-width: 900px) {
          .kpi-grid-5 { grid-template-columns: repeat(2,1fr) !important; }
          .strategy-grid-3, .ml-grid-3, .exec-findings-3, .schema-grid-3, .roadmap-grid { grid-template-columns: 1fr !important; }
          .chart-row-2, .rec-grid-2, .swot-grid, .dax-grid, .budget-grid-4, .challenges-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="report-body">
        {/* ── Back nav ── */}
        <div style={{ background: '#0A1628', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link href="/#projects" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
            ← Back to Portfolio
          </Link>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span style={{ color: '#E8A020', fontSize: '13px', fontWeight: 500 }}>Lead Generation Analysis — SafeGuard Security</span>
        </div>

        {/* ══ COVER ══════════════════════════════════════════ */}
        <div style={{ background: '#0A1628', padding: '60px 40px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -120, right: -120, width: 500, height: 500, borderRadius: '50%', border: '80px solid rgba(232,160,32,0.08)' }} />
          <div style={{ position: 'absolute', bottom: -80, left: -80, width: 360, height: 360, borderRadius: '50%', border: '60px solid rgba(15,168,130,0.07)' }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(232,160,32,0.15)', border: '1px solid rgba(232,160,32,0.35)', borderRadius: '100px', padding: '6px 16px', color: '#F5C55A', fontSize: '12px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '36px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#E8A020', display: 'inline-block' }} />
              Confidential · Portfolio Project · 2024
            </div>

            <h1 style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(32px, 5.5vw, 58px)', lineHeight: 1.08, color: '#fff', maxWidth: '700px', marginBottom: '20px' }}>
              Marketing Lead Generation{' '}
              <em style={{ fontStyle: 'italic', color: '#E8A020' }}>Analysis</em>
            </h1>

            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.55)', maxWidth: '540px', fontWeight: 300, marginBottom: '48px' }}>
              A complete data-driven study of multi-channel lead performance, conversion funnel optimization, and growth strategy for a private security services agency operating across Chennai, India.
            </p>

            <div style={{ display: 'flex', gap: '40px', marginBottom: '60px', flexWrap: 'wrap' }}>
              {[
                { val: '1,05,000', label: 'Leads Analyzed' },
                { val: '₹108.7 Cr', label: 'Total Revenue' },
                { val: '14', label: 'Lead Channels' },
                { val: '3 Years', label: 'Data Period' },
              ].map(({ val, label }) => (
                <div key={label} style={{ borderLeft: '2px solid rgba(232,160,32,0.4)', paddingLeft: '16px' }}>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: '#E8A020' }}>{val}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '28px', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '12px' }}>
                <strong style={{ color: '#fff', display: 'block', fontSize: '14px', marginBottom: '4px' }}>SafeGuard Security Services Pvt. Ltd.</strong>
                Chennai, Tamil Nadu · India · GST Services / B2B+B2C Security
              </div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '22px', color: '#E8A020', letterSpacing: '0.02em', textAlign: 'right' }}>
                SecureLeads
                <span style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'DM Sans', sans-serif", fontSize: '11px', display: 'block', marginTop: '2px' }}>Analytics Report · FY 2022–2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* ══ BODY ═══════════════════════════════════════════ */}
        <div style={S.wrap}>

          {/* S1 · Project Overview */}
          <section aria-labelledby="s1-heading" style={{ marginBottom: '64px' }}>
            <SecHeader num="01" title="Project Overview" desc="SafeGuard Security Services operates across Chennai's corporate, residential, and industrial segments. This report analyzes 3 years of lead generation data across 14 channels to identify conversion drivers, budget inefficiencies, and scalable growth opportunities." />
            <div className="schema-grid-3">
              {[
                { name: 'Industry', desc: 'Private Security Services — manpower supply, access control, event security' },
                { name: 'Geography', desc: '6 zones: North, South, Central, West Chennai, OMR Corridor, GST Road Belt' },
                { name: 'Data Period', desc: 'January 2022 – December 2024 (36 months, 1,05,000 lead records)' },
                { name: 'Channels Tracked', desc: '14 channels: JustDial, Google Ads, GMB, Sulekha, Meta, WhatsApp, Referral, Cold Call, Field' },
                { name: 'Segments', desc: 'Corporate IT Parks, Offices, Residential, Gated Communities, Industrial, Events' },
                { name: 'Sales Team', desc: '15 agents tracked for performance, response time, and conversion attribution' },
              ].map(({ name, desc }) => (
                <div key={name} style={{ ...S.card }}>
                  <div style={{ fontFamily: 'DM Mono, monospace', fontSize: '12px', fontWeight: 500, color: '#2563EB', marginBottom: '4px' }}>{name}</div>
                  <div style={{ fontSize: '12px', color: '#3D4B5C' }}>{desc}</div>
                </div>
              ))}
            </div>
          </section>
          <Divider />

          {/* S2 · Dataset Design */}
          <section aria-labelledby="s2-heading" style={{ marginBottom: '64px' }}>
            <SecHeader num="02" title="Dataset Design" desc="A synthetic but statistically realistic dataset of 1,05,000 rows generated using Python Faker, Numpy, and domain-calibrated probability distributions." />
            <div style={{ background: '#fff', border: '1px solid rgba(10,22,40,0.1)', borderRadius: '16px', overflow: 'hidden', marginBottom: '20px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                <thead>
                  <tr style={{ background: '#F8F9FA' }}>
                    {['Field Name','Data Type','Description','Sample Value'].map(h => (
                      <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#6C757D', borderBottom: '1px solid rgba(10,22,40,0.1)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Lead_ID', 'VARCHAR', 'Unique identifier (LSA-YYYY-NNNNNN)', 'LSA-2023-048291'],
                    ['Date / Time', 'DATETIME', 'Lead submission timestamp', '2023-07-14 10:32'],
                    ['Source', 'VARCHAR', 'Lead channel origin', 'Google Ads'],
                    ['Campaign_Name', 'VARCHAR', 'Specific ad campaign name', 'Corporate_Security_TG'],
                    ['Customer_Type', 'VARCHAR', 'Segment classification', 'Corporate IT Park'],
                    ['Zone / Area', 'VARCHAR', 'Chennai zone + specific area', 'OMR Corridor / Siruseri'],
                    ['Lead_Status', 'ENUM', 'New → Contacted → Proposal → Negotiation → Converted / Lost', 'Converted'],
                    ['Cost_Per_Lead', 'FLOAT', 'Attributed marketing cost per lead (₹)', '₹ 412.50'],
                    ['Conversion_Value', 'FLOAT', 'Annual contract value on conversion (₹)', '₹ 1,85,000'],
                    ['Response_Time_Hrs', 'FLOAT', 'Time to first agent contact (hours)', '1.8'],
                    ['Follow_Up_Count', 'INT', 'Number of follow-up touchpoints', '5'],
                    ['Sales_Agent', 'VARCHAR', 'Assigned agent name', 'Arjun K'],
                    ['Lost_Reason', 'VARCHAR', 'Reason for non-conversion (Lost leads only)', 'Price too high'],
                    ['Day_of_Week / Quarter', 'VARCHAR', 'Derived temporal fields', 'Wednesday / Q3'],
                  ].map(([field, type, desc, sample]) => {
                    const typeColor = type === 'FLOAT' || type === 'INT' ? 'badge-green' : type === 'ENUM' ? 'badge-amber' : type === 'DATETIME' ? 'badge-blue' : 'badge-navy';
                    const bgMap = { 'badge-green': '#E1F5EE', 'badge-amber': '#FEF0C7', 'badge-blue': '#EFF6FF', 'badge-navy': 'rgba(10,22,40,0.08)' };
                    const tcMap = { 'badge-green': '#0B7A5C', 'badge-amber': '#7A4F08', 'badge-blue': '#1640A0', 'badge-navy': '#0A1628' };
                    return (
                      <tr key={field} style={{ borderBottom: '1px solid rgba(10,22,40,0.1)' }}>
                        <td style={{ padding: '10px 14px', color: '#0A1628', fontWeight: 600, fontFamily: 'DM Mono, monospace', fontSize: '12px' }}>{field}</td>
                        <td style={{ padding: '10px 14px' }}><span style={{ display: 'inline-block', padding: '3px 9px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, background: bgMap[typeColor], color: tcMap[typeColor] }}>{type}</span></td>
                        <td style={{ padding: '10px 14px', color: '#3D4B5C' }}>{desc}</td>
                        <td style={{ padding: '10px 14px', color: '#3D4B5C', fontFamily: 'DM Mono, monospace', fontSize: '12px' }}>{sample}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div style={{ background: '#F8F9FA', border: '1px solid rgba(10,22,40,0.1)', borderRadius: '16px', padding: '20px', fontSize: '13px', color: '#3D4B5C' }}>
              <strong style={{ color: '#0A1628', display: 'block', marginBottom: '8px' }}>Data Cleaning Pipeline (6 Steps)</strong>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '12px' }} className="schema-grid-3">
                {[
                  'Impute missing CPL with source-level median (group-wise fillna)',
                  'Replace negative Response_Time values with source median',
                  'Fill null Follow_Up_Count with 0; cast to INT',
                  'Strip whitespace & standardize categorical text fields',
                  'Drop duplicate Lead_IDs (exact match deduplication)',
                  'Cap Conversion_Value outliers at 99th percentile',
                ].map((step, i) => (
                  <div key={i}><span style={{ color: '#0FA882', fontWeight: 700 }}>Step {i + 1} › </span>{step}</div>
                ))}
              </div>
            </div>
          </section>
          <Divider />

          {/* S3 · KPIs */}
          <section aria-labelledby="s3-heading" style={{ marginBottom: '64px' }}>
            <SecHeader num="03" title="Master KPI Framework" desc="Executive-level KPIs calculated across the full 3-year dataset (1,05,000 leads, FY 2022–2024)." />
            <KpiGrid />
          </section>
          <Divider />

          {/* S4 · Analysis + Charts */}
          <section aria-labelledby="s4-heading" style={{ marginBottom: '64px' }}>
            <SecHeader num="04" title="Data Analysis — Charts & Insights" />
            <Charts />

            {/* Source ROI Table */}
            <div style={{ background: '#fff', border: '1px solid rgba(10,22,40,0.1)', borderRadius: '16px', overflow: 'hidden', marginTop: '20px' }}>
              <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(10,22,40,0.1)' }}>
                <div style={{ fontSize: '14px', fontWeight: 600, color: '#0A1628' }}>Source Performance Deep Dive</div>
                <div style={{ fontSize: '12px', color: '#6C757D' }}>CPL, CAC, Conversion Rate, and Revenue per channel</div>
              </div>
              <SourceTable />
            </div>

            {/* Heatmap */}
            <div style={{ ...S.card, marginTop: '20px' }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#0A1628', marginBottom: '4px' }}>Campaign Performance Heatmap — Leads by Source × Quarter</div>
              <div style={{ fontSize: '12px', color: '#6C757D', marginBottom: '4px' }}>Darker = higher lead volume. Seasonal spikes visible in Q4 across paid channels.</div>
              <Heatmap />
            </div>
          </section>
          <Divider />

          {/* S5 · SQL */}
          <section aria-labelledby="s5-heading" style={{ marginBottom: '64px' }}>
            <SecHeader num="05" title="SQL Queries" desc="Production-ready SQL for key analytical use cases. Compatible with PostgreSQL, MySQL, and BigQuery." />
            <SqlQueries />
          </section>
          <Divider />

          {/* S6 · Power BI */}
          <section aria-labelledby="s6-heading" style={{ marginBottom: '64px' }}>
            <SecHeader num="06" title="Power BI Dashboard Wireframe" desc="Executive-level dashboard layout with KPI cards, funnel, geo map, trend analysis, and heatmap. Built using star-schema data model with 5 DAX measures." />
            <PbiWireframe />
            <DaxMeasures />
          </section>
          <Divider />

          {/* S7 · Strategy */}
          <section aria-labelledby="s7-heading" style={{ marginBottom: '64px' }}>
            <SecHeader num="07" title="Digital Marketing Optimization Strategy" />
            <div className="strategy-grid-3">
              <StratCard color="#E8A020" icon="🔍" title="Google Ads Optimization" items={['Target buyer-intent keywords: "security guard service Chennai", "office security agency OMR"','Eliminate broad match — use exact + phrase only','Negative keywords: "free", "job", "training", "course"','Separate campaigns for each segment (Corporate, Residential, Industrial)','Call extensions + location extensions mandatory','Ad scheduling: 9AM–7PM weekdays; reduce weekend spend by 40%']} />
              <StratCard color="#0FA882" icon="📱" title="Meta Ads Strategy" items={['Retarget website visitors (30-day window) with social proof ads','Lookalike audiences from existing corporate client list','Separate creatives for apartment managers vs IT park facilities heads','Lead Form ads for residential; Message ads for corporate','Video testimonials from existing clients — 15-sec reels','Monthly budget cap: ₹40K/month Facebook; ₹30K Instagram']} />
              <StratCard color="#2563EB" icon="🌐" title="SEO & GMB Optimization" items={['Target: "security services in Chennai" (3,600 monthly searches)','GMB: post weekly updates, add 20+ photos, enable messaging','Create location pages: /security-services-adyar, /security-omr-corridor','Schema markup for LocalBusiness + ServiceArea','Blog strategy: 2 posts/month on safety tips, regulatory compliance','Collect 50+ Google reviews with templated follow-up request']} />
              <StratCard color="#D85A30" icon="💬" title="WhatsApp & CRM Automation" items={['Instant auto-reply within 5 minutes of WhatsApp inquiry','Lead nurturing sequence: Day 1 → brochure, Day 3 → case study, Day 7 → offer','CRM integration: Zoho CRM / Freshsales for lead tracking','Assign leads to agents within 30 minutes based on zone + segment','SLA alert system: escalate if no contact within 2 hours','Weekly pipeline review meetings with sales team']} />
              <StratCard color="#0A1628" icon="🎯" title="Conversion Rate Optimization" items={['Landing page A/B test: phone-first CTA vs form vs WhatsApp button','Add trust signals: client logos, guard count, years in business, certifications','Mobile-first landing page (60%+ traffic is mobile)','Add live chat widget (Tidio or Intercom)','Proposal PDF template: personalized within 2 hours of lead','Offer a free 7-day trial for residential — reduces price objection']} />
              <StratCard color="#E8A020" icon="🤝" title="Referral & Partnership Program" items={['Referral program: ₹5,000 reward per converted B2B referral','Partner with property management firms, facility managers, RWAs','Tie up with event management companies for event security contracts','Corporate HR referral tie-up: 3-month free guard for employee housing complex','Target: double referral share from 4% → 10% within 12 months']} />
            </div>
            <BudgetCard />
          </section>
          <Divider />

          {/* S8 · SWOT */}
          <section aria-labelledby="s8-heading" style={{ marginBottom: '64px' }}>
            <SecHeader num="08" title="SWOT Analysis" />
            <SwotGrid />
          </section>
          <Divider />

          {/* S9 · Recommendations */}
          <section aria-labelledby="s9-heading" style={{ marginBottom: '64px' }}>
            <SecHeader num="09" title="Data-Driven Business Recommendations" />
            <Recommendations />
          </section>
          <Divider />

          {/* S10 · AI/ML */}
          <section aria-labelledby="s10-heading" style={{ marginBottom: '64px' }}>
            <SecHeader num="10" title="AI / ML Use Cases & Future Roadmap" />
            <MlCards />
            <Roadmap />
          </section>
          <Divider />

          {/* S11 · Executive Summary */}
          <section aria-labelledby="s11-heading" style={{ marginBottom: '64px' }}>
            <SecHeader num="11" title="Final Executive Summary" />
            <ExecSummary />
          </section>
        </div>

        {/* Footer */}
        <footer style={{ background: '#0A1628', padding: '32px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
            <strong style={{ color: '#fff' }}>SafeGuard Security Services · Lead Generation Analytics Report</strong>
            <span style={{ display: 'block', marginTop: '2px' }}>Prepared by: Abul Hassan Mohamed Ansari · FY 2022–2024 · Chennai, India</span>
          </div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', fontFamily: 'DM Mono, monospace' }}>
            Dataset: 1,05,000 rows · 22 fields · Generated via Python Faker · Analysis: Pandas + NumPy
          </div>
        </footer>
      </div>
    </>
  );
}

/* ─── Sub-components ───────────────────────────────── */
function KpiCard({ val, label, change, accent, green }) {
  const bg = accent ? '#0A1628' : green ? '#E1F5EE' : '#fff';
  const valColor = accent ? '#E8A020' : green ? '#0B7A5C' : '#0A1628';
  const labelColor = accent ? 'rgba(255,255,255,0.5)' : '#6C757D';
  const changeColor = accent ? 'rgba(255,255,255,0.4)' : change?.startsWith('Target') ? '#D85A30' : '#0FA882';
  return (
    <div style={{ background: bg, border: '1px solid rgba(10,22,40,0.1)', borderRadius: '16px', padding: '20px' }}>
      <div style={{ fontSize: '26px', fontWeight: 700, color: valColor, lineHeight: 1 }}>{val}</div>
      <div style={{ fontSize: '11px', color: labelColor, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '6px' }}>{label}</div>
      {change && <div style={{ fontSize: '12px', marginTop: '8px', color: changeColor, fontWeight: 500 }}>{change}</div>}
    </div>
  );
}

function KpiGrid() {
  return (
    <>
      <div className="kpi-grid-5" style={{ marginBottom: '16px' }}>
        <KpiCard val="1,05,000" label="Total Leads" change="+18% YoY growth" accent />
        <KpiCard val="11,366" label="Converted Leads" change="10.8% conversion rate" />
        <KpiCard val="₹108.7 Cr" label="Total Revenue" change="3-year cumulative" green />
        <KpiCard val="₹237" label="Avg Cost per Lead" change="vs ₹310 industry avg" />
        <KpiCard val="₹2,190" label="Customer Acq. Cost" change="All channels blended" />
      </div>
      <div className="kpi-grid-5">
        <KpiCard val="₹95,640" label="Avg Deal Value" change="Annual contract basis" />
        <KpiCard val="4,268%" label="Blended ROI" change="Revenue / Ad Spend" accent />
        <KpiCard val="₹93,249" label="Est. Customer LTV" change="18-month avg tenure × 65% renewal" green />
        <KpiCard val="1 : 9" label="Lead-to-Sale Ratio" change="Target: 1:7 by Q2" />
        <KpiCard val="5.3 hrs" label="Avg Response Time" change="Target: < 2 hrs" />
      </div>
    </>
  );
}

function SourceTable() {
  const rows = [
    ['Referral', '4,145', '28.4%', '0', '0', '1,136.8', 'Best', 'Scale'],
    ['WhatsApp Business', '5,175', '11.9%', '17', '140', '591.3', 'Best', 'Scale'],
    ['Website Inquiry', '7,322', '16.4%', '88', '536', '1,169.2', 'Top Tier', 'Scale'],
    ['Google My Business', '10,589', '15.1%', '66', '435', '1,530.6', 'Top Tier', 'Optimize'],
    ['Google Ads', '16,734', '13.0%', '461', '3,545', '2,054.4', 'Mid Tier', 'Optimize'],
    ['JustDial', '18,865', '9.3%', '307', '3,314', '1,667.1', 'Mid Tier', 'Optimize'],
    ['Sulekha', '9,601', '7.8%', '208', '2,672', '725.0', 'Mid Tier', 'Reduce'],
    ['Facebook Ads', '7,377', '7.1%', '297', '4,184', '484.8', 'Low ROI', 'Restructure'],
    ['Instagram Ads', '8,399', '6.2%', '341', '5,542', '503.0', 'Low ROI', 'Restructure'],
  ];
  const tierBadge = (t) => {
    if (t === 'Best' || t === 'Top Tier') return { bg: '#E1F5EE', color: '#0B7A5C' };
    if (t === 'Mid Tier') return { bg: '#FEF0C7', color: '#7A4F08' };
    return { bg: '#FAECE7', color: '#8B2E10' };
  };
  const actionBadge = (a) => {
    if (a === 'Scale') return { bg: '#E1F5EE', color: '#0B7A5C' };
    if (a === 'Optimize') return { bg: '#FEF0C7', color: '#7A4F08' };
    return { bg: '#FAECE7', color: '#8B2E10' };
  };
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
      <thead>
        <tr style={{ background: '#F8F9FA' }}>
          {['Source','Leads','Conv %','Avg CPL (₹)','CAC (₹)','Revenue (₹ L)','ROI Tier','Action'].map(h => (
            <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.07em', color: '#6C757D', borderBottom: '1px solid rgba(10,22,40,0.1)' }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(([src, leads, conv, cpl, cac, rev, tier, action]) => {
          const tb = tierBadge(tier); const ab = actionBadge(action);
          return (
            <tr key={src} style={{ borderBottom: '1px solid rgba(10,22,40,0.1)' }}>
              <td style={{ padding: '10px 14px', color: '#0A1628', fontWeight: 600 }}>{src}</td>
              <td style={{ padding: '10px 14px', color: '#3D4B5C' }}>{leads}</td>
              <td style={{ padding: '10px 14px', color: '#3D4B5C' }}>{conv}</td>
              <td style={{ padding: '10px 14px', fontFamily: 'DM Mono, monospace', fontSize: '12px', color: '#3D4B5C' }}>{cpl}</td>
              <td style={{ padding: '10px 14px', fontFamily: 'DM Mono, monospace', fontSize: '12px', color: '#3D4B5C' }}>{cac}</td>
              <td style={{ padding: '10px 14px', fontFamily: 'DM Mono, monospace', fontSize: '12px', color: '#3D4B5C' }}>{rev}</td>
              <td style={{ padding: '10px 14px' }}><span style={{ display: 'inline-block', padding: '3px 9px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, background: tb.bg, color: tb.color }}>★ {tier}</span></td>
              <td style={{ padding: '10px 14px' }}><span style={{ display: 'inline-block', padding: '3px 9px', borderRadius: '100px', fontSize: '11px', fontWeight: 600, background: ab.bg, color: ab.color }}>{action}</span></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function SqlQueries() {
  return (
    <>
      <SqlBlock>{`-- ① KPI Summary by Source
SELECT
  Source,
  COUNT(*) AS Total_Leads,
  SUM(Is_Converted) AS Conversions,
  ROUND(AVG(Is_Converted) * 100, 1) AS Conv_Rate_Pct,
  ROUND(AVG(Cost_Per_Lead), 0) AS Avg_CPL,
  ROUND(SUM(Cost_Per_Lead) / NULLIF(SUM(Is_Converted), 0), 0) AS CAC,
  ROUND(SUM(Conversion_Value) / 100000, 1) AS Revenue_Lakhs
FROM security_leads
GROUP BY Source
ORDER BY Revenue_Lakhs DESC;`}</SqlBlock>

      <SqlBlock>{`-- ② Monthly Trend Analysis
SELECT
  DATE_TRUNC('month', Date) AS Month,
  COUNT(*) AS Leads,
  SUM(Is_Converted) AS Conversions,
  ROUND(AVG(Is_Converted) * 100, 1) AS Conv_Rate,
  SUM(Conversion_Value) AS Revenue,
  LAG(COUNT(*)) OVER (ORDER BY DATE_TRUNC('month', Date)) AS Prev_Month_Leads
FROM security_leads
GROUP BY 1
ORDER BY 1;`}</SqlBlock>

      <SqlBlock>{`-- ③ Agent Performance Leaderboard
SELECT
  Sales_Agent,
  COUNT(*) AS Total_Leads,
  SUM(Is_Converted) AS Closed,
  ROUND(AVG(Is_Converted) * 100, 1) AS Close_Rate_Pct,
  ROUND(AVG(Response_Time_Hrs), 1) AS Avg_Response_Hrs,
  SUM(Conversion_Value) AS Revenue_Generated,
  RANK() OVER (ORDER BY SUM(Is_Converted) DESC) AS Rank
FROM security_leads
GROUP BY Sales_Agent
ORDER BY Revenue_Generated DESC;`}</SqlBlock>

      <SqlBlock>{`-- ④ Lead Scoring Model — High-Value Lead Identification
SELECT Lead_ID, Source, Customer_Type, Zone,
  (
    CASE WHEN Source IN ('Referral','Website Inquiry') THEN 30 ELSE 10 END
    + CASE WHEN Customer_Type LIKE '%Corporate%' THEN 25 ELSE 5 END
    + CASE WHEN Response_Time_Hrs < 2 THEN 20 WHEN Response_Time_Hrs < 8 THEN 10 ELSE 0 END
    + CASE WHEN Follow_Up_Count BETWEEN 3 AND 7 THEN 15 ELSE 5 END
    + CASE WHEN Zone IN ('OMR Corridor','South Chennai') THEN 10 ELSE 0 END
  ) AS Lead_Score
FROM security_leads
WHERE Lead_Status NOT IN ('Converted', 'Lost')
ORDER BY Lead_Score DESC LIMIT 500;`}</SqlBlock>
    </>
  );
}

function PbiWireframe() {
  return (
    <div style={{ background: '#1E2A3A', borderRadius: '22px', padding: '28px', overflow: 'hidden' }}>
      {/* Top bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
        <div style={{ width: '20px', height: '20px', background: '#E8A020', borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, color: '#fff', flexShrink: 0 }}>S</div>
        <div style={{ fontSize: '16px', fontWeight: 600, color: '#fff' }}>SafeGuard · Lead Generation Executive Dashboard</div>
        <div style={{ display: 'flex', gap: '8px', marginLeft: 'auto', flexWrap: 'wrap' }}>
          {['Year: 2024','Zone: All','Source: All','Agent: All'].map(f => (
            <div key={f} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '100px', padding: '4px 12px', fontSize: '11px', color: 'rgba(255,255,255,0.7)' }}>{f}</div>
          ))}
          <div style={{ background: 'rgba(232,160,32,0.2)', border: '1px solid rgba(232,160,32,0.4)', borderRadius: '100px', padding: '4px 12px', fontSize: '11px', color: '#F5C55A' }}>Reset Filters</div>
        </div>
      </div>
      {/* KPI row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '10px', marginBottom: '14px' }} className="kpi-grid-5">
        {[['35,214','Total Leads'],['3,904','Conversions'],['₹37.3 Cr','Revenue'],['₹224','Avg CPL'],['11.1%','Conv Rate']].map(([val,lbl],i) => (
          <div key={lbl} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '8px', padding: '12px 14px', border: i===4?'1px solid rgba(232,160,32,0.4)':'none' }}>
            <div style={{ fontSize: '20px', fontWeight: 700, color: i===4?'#4ADE80':'#E8A020' }}>{val}</div>
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', marginTop: '3px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{lbl}</div>
          </div>
        ))}
      </div>
      {/* Charts row */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '10px', marginBottom: '12px' }} className="pbi-charts-row">
        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '14px', minHeight: '160px' }}>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '10px' }}>Monthly Lead Trend</div>
          <svg viewBox="0 0 300 100" style={{ width: '100%', height: '100px' }}>
            <polyline points="10,80 35,65 60,55 85,60 110,45 135,50 160,40 185,55 210,42 235,35 260,45 285,38" fill="none" stroke="#E8A020" strokeWidth="2"/>
            {[10,35,60,85,110,135,160,185,210,235,260,285].map((x,i) => {
              const hs = [18,33,43,38,53,48,58,43,56,63,53,60];
              return <rect key={x} x={x} y={90-hs[i]} width="14" height={hs[i]} fill="rgba(255,255,255,0.08)" rx="2"/>;
            })}
          </svg>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '14px', minHeight: '160px' }}>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '10px' }}>Source Share</div>
          <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100px' }}>
            <circle cx="50" cy="50" r="38" fill="none" stroke="#E8A020" strokeWidth="20" strokeDasharray="44 196"/>
            <circle cx="50" cy="50" r="38" fill="none" stroke="#0FA882" strokeWidth="20" strokeDasharray="36 204" strokeDashoffset="-44"/>
            <circle cx="50" cy="50" r="38" fill="none" stroke="#2563EB" strokeWidth="20" strokeDasharray="28 212" strokeDashoffset="-80"/>
            <circle cx="50" cy="50" r="38" fill="none" stroke="#D85A30" strokeWidth="20" strokeDasharray="132 108" strokeDashoffset="-108"/>
          </svg>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '14px', minHeight: '160px' }}>
          <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '10px' }}>Funnel Visual</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
            {[['All Leads — 35,214','100%','rgba(255,255,255,0.15)','rgba(255,255,255,0.5)'],['Contacted — 32,700','80%','rgba(15,168,130,0.3)','#9FE1CB'],['Proposal','30%','rgba(15,168,130,0.5)','#9FE1CB'],['Negotiation','20%','rgba(232,160,32,0.5)','#E8A020'],['Conv','11%','#E8A020','#1E2A3A']].map(([t,w,bg,tc]) => (
              <div key={t} style={{ height: '14px', background: bg, borderRadius: '3px', width: w, fontSize: '9px', color: tc, display: 'flex', alignItems: 'center', paddingLeft: '6px' }}>{t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DaxMeasures() {
  const measures = [
    { title: 'Conversion Rate', code: `Conv Rate % =\nDIVIDE(\n  COUNTROWS(FILTER(Leads, Leads[Status]="Converted")),\n  COUNTROWS(Leads)\n) * 100` },
    { title: 'Customer Acquisition Cost', code: `CAC =\nDIVIDE(\n  SUM(Leads[Cost_Per_Lead]),\n  COUNTROWS(FILTER(Leads, Leads[Status]="Converted"))\n)` },
    { title: 'ROI %', code: `ROI % =\nDIVIDE(\n  SUM(Leads[Revenue]) - SUM(Leads[CPL_Total]),\n  SUM(Leads[CPL_Total])\n) * 100` },
    { title: 'MoM Lead Growth', code: `MoM Growth % =\nVAR PrevMonth = CALCULATE(\n  COUNTROWS(Leads),\n  PREVIOUSMONTH(Dates[Date]))\nRETURN DIVIDE([Total Leads] - PrevMonth, PrevMonth) * 100` },
  ];
  return (
    <div style={{ marginTop: '20px', background: '#fff', border: '1px solid rgba(10,22,40,0.1)', borderRadius: '16px', padding: '24px' }}>
      <div style={{ fontSize: '14px', fontWeight: 600, color: '#0A1628', marginBottom: '16px' }}>Key DAX Measures</div>
      <div className="dax-grid">
        {measures.map(({ title, code }) => (
          <div key={title} style={{ background: '#0A1628', color: 'rgba(255,255,255,0.8)', padding: '14px', borderRadius: '10px', fontFamily: 'DM Mono, monospace', fontSize: '12px', lineHeight: 1.7 }}>
            <div style={{ color: '#F5C55A', fontSize: '11px', marginBottom: '6px', fontFamily: 'DM Sans, sans-serif', fontWeight: 600 }}>{title}</div>
            {code}
          </div>
        ))}
      </div>
    </div>
  );
}

function StratCard({ color, icon, title, items }) {
  return (
    <div style={{ background: '#fff', border: '1px solid rgba(10,22,40,0.1)', borderRadius: '16px', padding: '22px', borderTop: `3px solid ${color}` }}>
      <div style={{ fontSize: '24px', marginBottom: '12px' }}>{icon}</div>
      <div style={{ fontSize: '15px', fontWeight: 700, color: '#0A1628', marginBottom: '8px' }}>{title}</div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontSize: '13px', color: '#3D4B5C' }}>
            <span style={{ color: '#0FA882', fontWeight: 700 }}>→ </span>{item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function BudgetCard() {
  const items = [
    { name: 'Google Ads + SEO', pct: '35%', amt: '₹87,500 / month', w: '35%' },
    { name: 'Meta Ads (FB + IG)', pct: '20%', amt: '₹50,000 / month', w: '20%' },
    { name: 'JustDial + Sulekha', pct: '15%', amt: '₹37,500 / month', w: '15%' },
    { name: 'WhatsApp + CRM Tools', pct: '10%', amt: '₹25,000 / month', w: '10%' },
    { name: 'Referral Program', pct: '10%', amt: '₹25,000 / month', w: '10%' },
    { name: 'Content & Branding', pct: '6%', amt: '₹15,000 / month', w: '6%' },
    { name: 'Field Marketing', pct: '4%', amt: '₹10,000 / month', w: '4%' },
    { name: 'Testing & Reserve', pct: '—', amt: 'Always keep 15% testing budget', w: '5%', gold: true },
  ];
  return (
    <div style={{ background: '#0A1628', borderRadius: '22px', padding: '36px', color: '#fff', marginTop: '28px' }}>
      <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>Recommended Monthly Marketing Budget: ₹2.5 Lakhs</div>
      <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '0' }}>Optimized allocation based on ROI analysis — shifting spend to highest-converting channels</div>
      <div className="budget-grid-4" style={{ marginTop: '24px' }}>
        {items.map(({ name, pct, amt, w, gold }) => (
          <div key={name} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '10px', padding: '18px', border: gold ? '1px solid rgba(232,160,32,0.4)' : '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '6px' }}>{name}</div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: '#E8A020' }}>{pct}</div>
            <div style={{ fontSize: '12px', color: gold ? '#F5C55A' : 'rgba(255,255,255,0.5)', marginTop: '4px' }}>{amt}</div>
            <div style={{ height: '3px', borderRadius: '2px', background: 'rgba(255,255,255,0.15)', marginTop: '10px' }}>
              <div style={{ height: '3px', borderRadius: '2px', background: '#E8A020', width: w }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SwotGrid() {
  const cells = [
    { cls: 's', headC: '#3B6D11', titleC: '#27500A', bg: '#EAF3DE', head: 'Internal', title: 'Strengths', dotC: '#639922', textC: '#3B6D11', items: ['Consistent recurring contract revenue — monthly retainers reduce churn risk','High CLV (₹93K avg) relative to low CAC (₹2,190) — strong unit economics','Multi-segment presence (corporate, residential, industrial) reduces concentration risk','Established Google My Business presence driving 15% organic conversion rate','15-member trained sales team with CRM-ready workflow','Strong referral network — 28.4% conversion, highest among all channels'] },
    { cls: 'w', headC: '#8B2E10', titleC: '#711B0A', bg: '#FAECE7', head: 'Internal', title: 'Weaknesses', dotC: '#D85A30', textC: '#8B2E10', items: ['55% lead loss rate — over half of leads lost, mostly price-related objections','Avg response time 5.3 hours — well above the 1-hour golden window','Instagram Ads CAC ₹5,542 — worst performing paid channel, poor ROI','No formal lead scoring system — all leads treated equally by sales team','Weak content marketing — no SEO-optimized blog, low organic traffic','No automated lead nurturing — manual follow-ups prone to drop-off'] },
    { cls: 'o', headC: '#0B7A5C', titleC: '#085041', bg: '#E1F5EE', head: 'External', title: 'Opportunities', dotC: '#0FA882', textC: '#0B7A5C', items: ['OMR IT corridor expansion — 15+ new IT parks planned 2025–2026','Corporate security compliance mandates (ISO 14001, PSARA) driving demand','WhatsApp Business API allows automated proposal dispatch at ₹17 CPL','Fragmented Sulekha/JustDial competitors — SEO can steal their organic share','Event security vertical growing 22% annually — Tamil Nadu wedding/concert boom','Smart building integrations (IoT + manned guarding) — premium pricing opportunity'] },
    { cls: 't', headC: '#7A4F08', titleC: '#633806', bg: '#FEF0C7', head: 'External', title: 'Threats', dotC: '#E8A020', textC: '#7A4F08', items: ['Price undercutting by unorganized local competitors offering INR 8,000/month guards','Rising guard wages and ESIC/PF compliance costs squeezing margins','JustDial and Sulekha algorithm changes can reduce listing visibility overnight','Low customer switching cost — B2B contracts expire annually, easy to lose','Meta Ads CPL rising 15–20% YoY in Chennai security keyword space','AI-powered remote surveillance startups as substitute for manned guarding'] },
  ];
  return (
    <div className="swot-grid">
      {cells.map(({ bg, head, headC, title, titleC, dotC, textC, items }) => (
        <div key={title} style={{ background: bg, padding: '28px', minHeight: '220px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: headC, marginBottom: '4px' }}>{head}</div>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '22px', color: titleC, marginBottom: '14px' }}>{title}</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {items.map((item, i) => (
              <li key={i} style={{ fontSize: '13px', lineHeight: 1.55, display: 'flex', gap: '8px', color: textC }}>
                <span style={{ color: dotC, fontSize: '10px', marginTop: '3px', flexShrink: 0 }}>✦</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Recommendations() {
  const recs = [
    { n: 1, title: 'Double Down on Referral Program', text: 'Referral has a 28.4% conversion rate — 2.6× the overall average — at ZERO CPL. A structured ₹5,000 B2B referral incentive program targeting existing clients, partners, and property managers could realistically scale referral volume from 4% to 10–12% of total leads within 12 months, adding ~600 high-quality conversions annually.', impact: 'Projected Impact: +600 conversions/year | ₹5.7 Cr additional revenue' },
    { n: 2, title: 'Enforce 2-Hour Response SLA Across All Channels', text: 'Data shows leads responded to within 1 hour convert at 12.9% vs 6.9% for 24+ hour responses — nearly double. Implementing CRM-based auto-assignment, WhatsApp instant reply, and escalation alerts can bring average response time from 5.3 hrs to under 2 hrs, recovering an estimated 1,200+ conversions annually from the existing pipeline.', impact: 'Projected Impact: +1,200 conversions from same lead volume | ₹11.5 Cr revenue' },
    { n: 3, title: 'Restructure Meta Ads — Shift to Retargeting', text: 'Instagram Ads CAC is ₹5,542 — 2.5× the blended average. The problem is cold audience targeting. Replace broad awareness campaigns with retargeting audiences (website visitors, GMB viewers, video watchers). Reduce total Meta budget by 30% and reallocate to Google Ads and GMB optimization, which deliver 13–15% conversion rates at lower CAC.', impact: 'Cost Saving: ₹21,000/month | Better quality leads from existing budget' },
    { n: 4, title: 'Implement AI-Powered Lead Scoring', text: 'Train a gradient boosting model (XGBoost) on historical conversion data using features: Source, Customer_Type, Zone, Response_Time_Hrs, Follow_Up_Count, Day_of_Week, and Campaign_Name. Score every incoming lead 0–100. Focus agent time on leads scoring 70+. This eliminates guesswork and ensures high-CAC channels like Instagram are not given equal agent resources as referrals.', impact: 'Expected Improvement: Conv rate from 10.8% → 14–16% by prioritization alone' },
    { n: 5, title: 'Build OMR Corridor as Priority Zone', text: 'OMR corridor shows 10.8% conversion and is growing fastest due to new IT park developments. Create a dedicated OMR sales pod with 2 specialized agents, hyper-local Google Ads campaigns targeting "security services OMR Chennai" and "IT park security Sholinganallur", and partner with 3–5 major facility management companies in the corridor.', impact: 'Zone Target: ₹30 Cr additional revenue from OMR in 24 months' },
    { n: 6, title: 'Activate WhatsApp Business API at Scale', text: 'WhatsApp has the lowest CAC of all paid channels (₹140) with a respectable 11.9% conversion. Activate WhatsApp Business API, create automated drip sequences for each customer type (corporate vs residential), and use broadcast lists for monthly check-ins with qualified but unconverted leads. This channel is massively underinvested at only 5,175 leads out of 1,05,000.', impact: 'Target: Triple WhatsApp lead volume to 15,000/year | Low CPL at scale' },
  ];
  return (
    <div className="rec-grid-2">
      {recs.map(({ n, title, text, impact }) => (
        <div key={n} style={{ background: '#fff', border: '1px solid rgba(10,22,40,0.1)', borderRadius: '16px', padding: '22px', display: 'flex', gap: '16px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#0A1628', color: '#E8A020', fontWeight: 700, fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{n}</div>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#0A1628', marginBottom: '5px' }}>{title}</div>
            <div style={{ fontSize: '13px', color: '#3D4B5C', lineHeight: 1.6 }}>{text}</div>
            <div style={{ display: 'inline-block', marginTop: '8px', fontSize: '11px', fontWeight: 600, padding: '3px 8px', borderRadius: '4px', background: '#E1F5EE', color: '#0B7A5C' }}>{impact}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MlCards() {
  const cards = [
    { style: 'a', bg: '#0A1628', tag: 'Model 1 · Classification', tagC: 'rgba(255,255,255,0.35)', title: 'Lead Scoring Engine', titleC: '#E8A020', body: 'XGBoost or LightGBM model trained on 1,05,000 historical leads to predict conversion probability (0–100 score) for every new incoming lead in real time.', bodyC: 'rgba(255,255,255,0.65)', dotC: '#E8A020', itemC: 'rgba(255,255,255,0.55)', items: ['Features: Source, Customer_Type, Zone, Response_Time, Follow_Up_Count, Day, Campaign','Target variable: Is_Converted (binary)','Expected AUC: 0.78–0.82 based on feature richness','Deployment: REST API → CRM webhook → agent dashboard score card','Business impact: Sales team focuses on top 30% leads → 40% higher close rate'] },
    { style: 'b', bg: '#E1F5EE', tag: 'Model 2 · Time Series', tagC: '#0FA882', title: 'Demand Forecasting', titleC: '#085041', body: 'Facebook Prophet or SARIMA model to forecast monthly lead volumes and conversion rates by channel, enabling proactive budget planning and staffing.', bodyC: '#0B7A5C', dotC: '#0F6E56', itemC: '#0B7A5C', items: ['Inputs: 36 months of monthly lead data by source','Outputs: 6-month ahead forecast with confidence intervals','Seasonality: captures Q4 peaks and January dips automatically','Use case: Pre-hire 3 extra agents before peak season; pre-book JustDial listings','Accuracy target: MAPE < 12% on rolling 3-month window'] },
    { style: 'c', bg: '#FEF0C7', tag: 'Model 3 · Survival Analysis', tagC: '#E8A020', title: 'Churn Prediction & CLV', titleC: '#633806', body: 'Cox Proportional Hazards model to estimate time-to-churn for existing clients, enabling proactive retention campaigns before contract renewal dates.', bodyC: '#7A4F08', dotC: '#E8A020', itemC: '#7A4F08', items: ['Features: Contract_Value, Zone, Customer_Type, Tenure_Months, Support_Tickets','Output: Churn probability in next 90 days per client','Trigger: Auto-alert when churn probability > 40% → assign retention agent','CLV model: Avg deal value × renewal probability × expected tenure','Business impact: 10% reduction in churn = ₹8 Cr revenue retained annually'] },
  ];
  return (
    <div className="ml-grid-3" style={{ marginBottom: '16px' }}>
      {cards.map(({ bg, tag, tagC, title, titleC, body, bodyC, dotC, itemC, items }) => (
        <div key={title} style={{ background: bg, border: '1px solid rgba(10,22,40,0.1)', borderRadius: '16px', padding: '22px' }}>
          <div style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: tagC, marginBottom: '10px' }}>{tag}</div>
          <div style={{ fontSize: '16px', fontWeight: 700, color: titleC, marginBottom: '8px' }}>{title}</div>
          <div style={{ fontSize: '13px', color: bodyC, lineHeight: 1.65 }}>{body}</div>
          <ul style={{ listStyle: 'none', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {items.map((item, i) => (
              <li key={i} style={{ fontSize: '12px', color: itemC, display: 'flex', gap: '6px' }}>
                <span style={{ color: dotC, fontSize: '9px', marginTop: '3px' }}>⬥</span>{item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Roadmap() {
  const phases = [
    { color: '#E8A020', label: 'Phase 1 · Q1 2025', text: 'CRM Integration (Zoho), WhatsApp API, response-time SLA enforcement, Power BI dashboard go-live' },
    { color: '#0FA882', label: 'Phase 2 · Q2 2025', text: 'Lead scoring model deployment, SEO content engine, referral program launch, OMR zone pod setup' },
    { color: '#2563EB', label: 'Phase 3 · Q3–Q4 2025', text: 'Demand forecasting model, churn prediction system, personalized retargeting automation, event security vertical expansion' },
    { color: '#D85A30', label: 'Phase 4 · 2026', text: 'AI chatbot for 24/7 lead qualification, IoT-integrated smart security proposition, expansion to Coimbatore and Bengaluru' },
  ];
  return (
    <div style={{ background: '#fff', border: '1px solid rgba(10,22,40,0.1)', borderRadius: '16px', padding: '24px' }}>
      <div style={{ fontSize: '14px', fontWeight: 600, color: '#0A1628', marginBottom: '16px' }}>Future Scalability Roadmap</div>
      <div className="roadmap-grid">
        {phases.map(({ color, label, text }) => (
          <div key={label} style={{ borderLeft: `3px solid ${color}`, paddingLeft: '14px' }}>
            <div style={{ fontSize: '11px', color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '5px' }}>{label}</div>
            <div style={{ fontSize: '13px', color: '#3D4B5C' }}>{text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExecSummary() {
  return (
    <>
      <div style={{ background: '#0A1628', borderRadius: '22px', padding: '48px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: '200px', color: 'rgba(232,160,32,0.07)', position: 'absolute', top: '-20px', left: '30px', lineHeight: 1, pointerEvents: 'none' }}>"</div>
        <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(16px,2.5vw,22px)', fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', lineHeight: 1.4, marginBottom: '28px', position: 'relative', zIndex: 1 }}>
          "SafeGuard is generating strong revenue (₹108.7 Cr over 3 years) but leaving significant money on the table — nearly 62% of qualified leads go cold after a proposal. The data is unambiguous: fix response time, automate follow-up, and scale the two highest-ROI channels — Referral and WhatsApp — and you unlock the next ₹40 Cr without increasing your ad budget."
        </div>
        <div className="exec-findings-3" style={{ position: 'relative', zIndex: 1 }}>
          {[
            { title: 'Top Finding #1 — Response Time Crisis', text: 'Leads responded to within 1 hour convert at 12.9% — nearly double the 24+ hour rate of 6.9%. With an average response time of 5.3 hours across the team, the company is systematically killing leads it has already paid to acquire. A 2-hour SLA target with CRM automation could recover 1,200+ annual conversions.' },
            { title: 'Top Finding #2 — Channel ROI Imbalance', text: 'Referral and WhatsApp deliver exceptional ROI at effectively zero and ₹140 CAC respectively — yet represent only 9% of total lead volume. Meanwhile Instagram Ads at ₹5,542 CAC consumes disproportionate budget. Rebalancing spend toward owned and low-cost channels could generate the same leads at 40% lower cost.' },
            { title: 'Top Finding #3 — Segment Prioritization', text: 'Corporate IT Parks generate ₹46 Cr (42%) of total revenue from 22% of leads — the highest revenue-per-lead segment. Every marketing rupee spent acquiring IT park leads generates 3.2× the return of residential leads. A dedicated OMR IT corridor growth strategy is the single highest-leverage initiative available.' },
          ].map(({ title, text }) => (
            <div key={title} style={{ borderLeft: '2px solid rgba(232,160,32,0.4)', paddingLeft: '16px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#E8A020', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{title}</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{text}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '20px', background: '#fff', border: '1px solid rgba(10,22,40,0.1)', borderRadius: '16px', padding: '24px' }}>
        <div style={{ fontSize: '14px', fontWeight: 600, color: '#0A1628', marginBottom: '14px' }}>Real-World Challenges in Lead Generation (Security Services)</div>
        <div className="challenges-grid">
          {[
            { icon: '⚠', iconC: '#D85A30', title: 'Price Sensitivity', text: 'Buyers routinely compare 4–6 vendors. Premium pricing needs strong social proof and demonstrated compliance record to justify.' },
            { icon: '⚠', iconC: '#D85A30', title: 'Long B2B Sales Cycles', text: 'Corporate contracts often take 30–90 days from inquiry to PO. CRM discipline and drip nurturing are essential to avoid pipeline decay.' },
            { icon: '⚠', iconC: '#D85A30', title: 'Attribution Complexity', text: 'A lead may discover via Google, get referred by a colleague, and close via WhatsApp. Multi-touch attribution is critical for correct budget decisions.' },
            { icon: '▲', iconC: '#E8A020', title: 'Seasonality Impact', text: 'Events, festivals (Oct–Dec), and corporate year-end expansions create demand spikes. Budget must flex 25–30% in Q4 to capture this window.' },
            { icon: '▲', iconC: '#E8A020', title: 'Digital Trust Gap', text: 'Decision-makers in security are often non-digital-native. LinkedIn outreach and in-person demos matter alongside digital channels.' },
            { icon: '▲', iconC: '#E8A020', title: 'Unorganized Competition', text: 'Local agencies operate without GST, ESIC compliance — allowing predatory pricing. The counterstrategy is value differentiation, not price-matching.' },
          ].map(({ icon, iconC, title, text }) => (
            <div key={title} style={{ display: 'flex', gap: '10px' }}>
              <span style={{ color: iconC, fontSize: '16px', flexShrink: 0 }}>{icon}</span>
              <div>
                <strong style={{ color: '#0A1628', display: 'block', marginBottom: '3px', fontSize: '13px' }}>{title}</strong>
                <div style={{ fontSize: '13px', color: '#3D4B5C' }}>{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
