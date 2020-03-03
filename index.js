/*

*/
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

var nextImg = 0;

var jsonConfig = {};

console.log("START generating ...")

function resizeOne() {

  var oc = jsonConfig.automations[nextImg];
  var dirName = path.dirname(oc.out);
  console.log("GENERATE image: ", oc.out);

  fs.mkdirSync(dirName, { recursive: true });

  var inPath = jsonConfig.inpath+oc.in;
  sharp(inPath)
    .resize(oc.resize[0], oc.resize[1], {
      kernel: sharp.kernel.nearest,
      fit: 'contain',
      background: jsonConfig.background
    })
    .toFile(oc.out)
    .then(() => {
      nextImg++;
      if (nextImg < jsonConfig.automations.length) {
        setTimeout(resizeOne, 10);
      } else {
        console.log("END automations")
      }
    });
}

let rawdata = fs.readFileSync('automations.json');
jsonConfig = JSON.parse(rawdata);
resizeOne();

