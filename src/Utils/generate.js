const Typography = require('typography');
const fs = require("fs");

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Roboto'],
  bodyFontFamily: ['Roboto'],
  googleFonts: [{
    name: 'Roboto',
    styles: [
      '400',
    ]
  }, ]

  // See below for the full list of options.
})

fs.writeFileSync("global.css", typography.toString());