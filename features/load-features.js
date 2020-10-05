const path = require('path')
const fs = require('fs')

module.exports = (client) => {
  const readFeatures = (dir) => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files) {
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()) {
        readFeatures(path.join(dir, file))
      } else if (file !== 'load-features.js' && file !== '.DS_Store' && file !== 'image1.jpg' && file !== 'image2.jpg' && file !== 'image3.jpg' && file !== 'image4.jpg' && file !== 'image5.jpg'&& file !== 'timer1.jpg'&& file !== 'timer2.jpg'&& file !== 'timer3.jpg'&& file !== 'timer4.jpg') {
        const feature = require(path.join(__dirname, dir, file))
        console.log(`Enabling feature "${file}"`)
        feature(client)
      }
    }
  }

  readFeatures('.')
}
