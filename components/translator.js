const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  // This is a class which contains nothing but one method... maybe this could have been a function... but just going with what FCC set out which was an empty class to use
  translate(text, locale) {
    let translation = text;

    // 1. start of American to British translation if condition
    if (locale === 'american-to-british') {
      // 1.1 iterate over first object of American-British equivalents
      for (const property in americanOnly) {
        const propertyRegEx = new RegExp(`\\b${property}\\b`, 'gi')
        translation = translation.replaceAll(propertyRegEx, `<span class="highlight">${americanOnly[property]}</span>`);
      }

      // 1.2 iterate over second object of American-British equivalents
      for (const property in americanToBritishSpelling) {
        const propertyRegEx = new RegExp(`\\b${property}\\b`, 'gi')
        translation = translation.replaceAll(propertyRegEx, `<span class="highlight">${americanToBritishSpelling[property]}</span>`);
      }

      // 1.3 iterate over third object of American-British equivalents
      for (const property in americanToBritishTitles) {
        const propertyRegEx = new RegExp(`\\b${property}`, 'g')
        translation = translation.replaceAll(propertyRegEx, `<span class="highlight">${americanToBritishTitles[property]}</span>`);

        let propertyCapitalised = property.charAt(0).toUpperCase() + property.slice(1);
        const propertyCapRegEx = new RegExp(`\\b${propertyCapitalised}`, 'g')

        translation = translation.replaceAll(propertyCapRegEx, `<span class="highlight">${americanToBritishTitles[property].charAt(0).toUpperCase() + americanToBritishTitles[property].slice(1)}</span>`);
      }

      // 1.4 convert time format from American to British
      let timeRegexUSA = /([0-9]|0[0-9]|1[0-9]|2[0-3])(:|\.)([0-5][0-9])/g;
      translation = translation.replaceAll(timeRegexUSA, '<span class="highlight">$1.$3</span>')
      // end of American to British translation if condition


      // 2. start of British to American translation else if condition
    } else if (locale === 'british-to-american') {
      // 2.1 iterate over first object of British-American equivalents
      for (const property in britishOnly) {
        const propertyRegEx = new RegExp(`\\b${property}\\b`, 'gi')
        translation = translation.replaceAll(propertyRegEx, `<span class="highlight">${britishOnly[property]}</span>`);
      }

      // 2.2 iterate over second object of British-American equivalents
      for (const property in americanToBritishSpelling) {
        const propertyRegEx = new RegExp(`\\b${americanToBritishSpelling[property]}\\b`, 'gi')
        translation = translation.replaceAll(propertyRegEx, `<span class="highlight">${property}</span>`);
      }

      // 2.3 iterate over third object of British-American equivalents
      for (const property in americanToBritishTitles) {
        const propertyRegEx = new RegExp(`\\b${americanToBritishTitles[property]}\\b`, 'g')
        translation = translation.replaceAll(propertyRegEx, `<span class="highlight">${property}</span>`);

        let valueCapitalised = americanToBritishTitles[property].charAt(0).toUpperCase() + americanToBritishTitles[property].slice(1);
        const valueCapRegEx = new RegExp(`\\b${valueCapitalised}\\b`, 'g')
        translation = translation.replaceAll(valueCapRegEx, `<span class="highlight">${property.charAt(0).toUpperCase() + property.slice(1)}</span>`);
      }

      // 2.4 convert time format from British to American
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