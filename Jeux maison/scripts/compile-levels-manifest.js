const fs = require('fs');
const path = require('path');

const sourceDir = path.join(process.cwd(), 'public', 'assets', 'ice', 'Level');
const targetPath = path.join(process.cwd(), 'dist', 'assets', 'ice', 'Level', 'manifest.json');
const levels = [
  // Dynamically via FS and loop
];

fs.readdir(sourceDir, {}, function(err, files){
  console.log(files);

  fs.writeFile(targetPath, JSON.stringify(files), function (err) {
    if (err) return console.log(err);
    console.log('Levels Manifest created.');
  });
});

