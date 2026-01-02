const fs = require('fs');
const { createCanvas } = require('canvas');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

sizes.forEach(size => {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Draw background
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, size, size);
  
  // Draw text
  ctx.fillStyle = '#ffffff';
  ctx.font = `${size / 5}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('CS', size / 2, size / 2);
  
  // Save to public folder
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`public/icon-${size}x${size}.png`, buffer);
});

console.log('Icons generated in public folder');