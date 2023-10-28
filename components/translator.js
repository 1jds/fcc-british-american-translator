const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  
  translate(text, locale) {
    let translation = text;
    
    if(locale === 'american-to-british') {
      translation.split(' ').forEach((word, index) => {
        if(americanOnly.hasOwnProperty(word)) {
          translation = translation.replace(word, `<span class="highlight">${americanOnly[word]}</span>`)
        }
        if(americanToBritishSpelling.hasOwnProperty(word)) {
          translation = translation.replace(word, `<span class="highlight">${americanToBritishSpelling[word]}</span>`)
        }
        if(americanToBritishTitles.hasOwnProperty(word)) {
          translation = translation.replace(word, `<span class="highlight">${americanToBritishTitles[word]}</span>`)
      }
      })
    } else if(locale === 'british-to-american') {
      translation.split(' ').forEach((word, index) => {
        if(britishOnly.hasOwnProperty(word)) {
          translation = translation.replace(word, `<span class="highlight">${britishOnly[word]}</span>`)
        }
        if(Object.values(americanToBritishSpelling).includes(word)) {
          translation = translation.replace(word, `<span class="highlight">${Object.keys(americanToBritishSpelling).find(key => americanToBritishSpelling[key] === word)}</span>`)
    }
        if(Object.values(americanToBritishTitles).includes(word)) {
          translation = translation.replace(word, `<span class="highlight">${Object.keys(americanToBritishTitles).find(key => americanToBritishTitles[key] === word)}</span>`)
        }
      })
    }

    if(text === translation) {
      return {text, translation: 'Everything looks good to me!'}
    
    } else {
      return {
        text,
        translation
      };
      
    }
    
  }

}

module.exports = Translator;