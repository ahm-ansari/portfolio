const fs = require('fs');
const path = '@/components/sections/HiringAnalysisReport.jsx';
let content = fs.readFileSync(path, 'utf8');

// Convert style={{`css-string`}} (double braces + backtick) to style={{cssObject}}
content = content.replace(/style=\{\{`([^`]*?)`\}\}/g, (match, cssStr) => {
  // Convert CSS string to JS object
  const props = cssStr.split(';').filter(s => s.trim());
  const jsProps = props.map(prop => {
    const colonIdx = prop.indexOf(':');
    if (colonIdx === -1) return '';
    const key = prop.slice(0, colonIdx).trim();
    const val = prop.slice(colonIdx + 1).trim();
    // Convert kebab-case to camelCase
    const camelKey = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    // Escape single quotes in value
    const safeVal = val.replace(/'/g, "\\'");
    return `${camelKey}: '${safeVal}'`;
  }).filter(Boolean).join(', ');
  return `style={{${jsProps}}}`;
});

fs.writeFileSync(path, content, 'utf8');
const remaining = (content.match(/style=\{\{`/g) || []).length;
const stringStyle = (content.match(/style="/g) || []).length;
console.log(`Done - remaining double-brace-backtick styles: ${remaining}`);
console.log(`Remaining HTML string styles: ${stringStyle}`);
