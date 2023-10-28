'use strict';

const Translator = require('../components/translator.js');

module.exports = function(app) {

  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      console.log("This is what was posted", req.body)
      let text = req.body.text
      let locale = req.body.locale
      
      if (text === undefined || locale === undefined) {
        res.send({ error: 'Required field(s) missing' })
        return
      } else if (text === "") {
        res.send({ error: 'No text to translate' })
        return
      } else if (locale !== "american-to-british" && locale !== "british-to-american") {
        console.log("unknown locale provided");
        res.send({ error: 'Invalid value for locale field' })
        return
      };

      let translation = translator.translate(text, locale);
      console.log(translation)
      res.send(translation)
    });

};

  // If locale does not match one of the two specified locales, return { error: 'Invalid value for locale field' }

  // If text is empty, return { error: 'No text to translate' }

  // If one or more of the required fields is missing, return { error: 'Required field(s) missing' }

// You can POST to /api/translate with a body containing text with the text to translate and locale with either american-to-british or british-to-american. The returned object should contain the submitted text and translation with the translated text.