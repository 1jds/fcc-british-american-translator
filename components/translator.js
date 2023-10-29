const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

  translate(text, locale) {
    let translation = text;

    // start of American to British translation if condition
    if (locale === 'american-to-british') {
      for (const property in americanOnly) {
        const propertyRegEx = new RegExp(`\\b${property}\\b`, 'gi')
        translation = translation.replaceAll(propertyRegEx, `<span class="highlight">${americanOnly[property]}</span>`);
      }

      for (const property in americanToBritishSpelling) {
        const propertyRegEx = new RegExp(`\\b${property}\\b`, 'gi')
        translation = translation.replaceAll(propertyRegEx, `<span class="highlight">${americanToBritishSpelling[property]}</span>`);
      }

      for (const property in americanToBritishTitles) {
        const propertyRegEx = new RegExp(`\\b${property}`, 'g')
        translation = translation.replaceAll(propertyRegEx, `<span class="highlight">${americanToBritishTitles[property]}</span>`);
        
        let propertyCapitalised = property.charAt(0).toUpperCase() + property.slice(1);
        const propertyCapRegEx = new RegExp(`\\b${propertyCapitalised}`, 'g')        
        
        translation = translation.replaceAll(propertyCapRegEx, `<span class="highlight">${americanToBritishTitles[property].charAt(0).toUpperCase() + americanToBritishTitles[property].slice(1)}</span>`);
      }

      let timeRegexUSA = /([0-9]|0[0-9]|1[0-9]|2[0-3])(:|\.)([0-5][0-9])/g;
      translation = translation.replaceAll(timeRegexUSA, '<span class="highlight">$1.$3</span>')
      // end of American to British translation if condition


      // start of British to American translation else if condition
    } else if (locale === 'british-to-american') {
      for (const property in britishOnly) {
        const propertyRegEx = new RegExp(`\\b${property}\\b`, 'gi')
        translation = translation.replaceAll(propertyRegEx, `<span class="highlight">${britishOnly[property]}</span>`);
      }

      for (const property in americanToBritishSpelling) {
        const propertyRegEx = new RegExp(`\\b${americanToBritishSpelling[property]}\\b`, 'gi')
        translation = translation.replaceAll(propertyRegEx, `<span class="highlight">${property}</span>`);
      }

      for (const property in americanToBritishTitles) {
        const propertyRegEx = new RegExp(`\\b${americanToBritishTitles[property]}\\b`, 'g')
        translation = translation.replaceAll(propertyRegEx, `<span class="highlight">${property}</span>`);

        let valueCapitalised = americanToBritishTitles[property].charAt(0).toUpperCase() + americanToBritishTitles[property].slice(1);

        const valueCapRegEx = new RegExp(`\\b${valueCapitalised}\\b`, 'g')        
        
        translation = translation.replaceAll(valueCapRegEx, `<span class="highlight">${property.charAt(0).toUpperCase() + property.slice(1)}</span>`);
      }

      let timeRegexUSA = /([0-9]|0[0-9]|1[0-9]|2[0-3])(:|\.)([0-5][0-9])/g;
      translation = translation.replaceAll(timeRegexUSA, '<span class="highlight">$1:$3</span>')

    }
    // end of British to American translation else if condition

    // handle cases where no substititions were made to the original text; else return the original text and the translation in an object as required by the instructions
    if (text === translation) {
      return { text, translation: 'Everything looks good to me!' }
    } else {
      return {
        text,
        translation
      };

    }

  }

}

module.exports = Translator;