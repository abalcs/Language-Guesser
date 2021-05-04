const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const input = process.argv[2];
const langCode = franc(input);
if(langCode === 'und') {
    console.log('SORRY, COULD NOT FIGURE IT OUT.  PLEASE TRY WITH MORE SAMPLE TEXT'.red);
}

const language = langs.where('3', langCode);
console.log(`Our best guess is ${language.name.green}`);