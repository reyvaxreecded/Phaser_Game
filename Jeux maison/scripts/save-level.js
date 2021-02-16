const fs = require('fs');
const path = require('path');

const targetPath = path.join(process.cwd(), 'public', 'assets', 'ice', 'Level', `Lvl${lvlNumber}.json`);

const Playerstart = playerStart.each()
const World = tiles.each()
const Collectibles = collectibles.each()
const Obstacles = obstacles.each()

fs.writeFile(targetPath, JSON.stringify(Playerstart, World, Collectibles, Obstacles), function(err) {
    if (err) return console.log(err);
    console.log('lvl saved.');
});