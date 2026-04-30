const fs = require('fs');
const path = require('path');

const filePath = 'd:/Projects/Web Dev/portfolio-nextjs/portfolio/components/sections/HiringAnalysisReport.jsx';
const publicDir = 'd:/Projects/Web Dev/portfolio-nextjs/portfolio/public/images/hiring';

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

let content = fs.readFileSync(filePath, 'utf8');

let counter = 1;
content = content.replace(/src="(data:image\/png;base64,[^"]+)"/g, (match, base64Data) => {
  // Extract just the base64 part
  const base64Part = base64Data.split(',')[1];
  const filename = `chart-${counter++}.png`;
  const outPath = path.join(publicDir, filename);
  
  fs.writeFileSync(outPath, Buffer.from(base64Part, 'base64'));
  console.log(`Saved ${filename}`);
  
  return `src="/images/hiring/${filename}"`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully extracted base64 images and updated JSX file!');
