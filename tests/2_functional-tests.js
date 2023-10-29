const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

  suite('POST /api/translate', () => {
    // TEST 1
    test('1. Translation with text and locale fields', (done) => {
      chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
        .send({
          text: 'Mangoes are my favorite fruit.',
          locale: 'american-to-british'
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.translation, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
          done();
        });
    });

    // TEST 2
    test('2. Translation with text and invalid locale field', (done) => {
      chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
        .send({
          text: 'Mangoes are my favorite fruit.',
          locale: 'american-to-british-to-american'
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, 'Invalid value for locale field');
          done();
        });
    });

    // TEST 3
    test('3. Translation with missing text field', (done) => {
      chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
        .send({
          locale: 'american-to-british'
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, 'Required field(s) missing');
          done();
        });
    });

    // TEST 4
    test('4. Translation with missing locale field', (done) => {
      chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
        .send({
          text: 'Mangoes are my favorite fruit.'
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, 'Required field(s) missing');
          done();
        });
    });

    // TEST 5
    test('5. Translation with empty text', (done) => {
      chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
        .send({
          text: '',
          locale: 'american-to-british'
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.error, 'No text to translate');
          done();
        });
    });

    // TEST 6
    test('6. Translation with text that needs no translation', (done) => {
      chai
        .request(server)
        .keepOpen()
        .post('/api/translate')
        .send({
          text: 'Hello, how are you?',
          locale: 'american-to-british'
        })
        .end((err, res) => {
          assert.equal(res.status, 200);
          assert.equal(res.body.translation, 'Everything looks good to me!');
          done();
        });
    });
    
  });
});



// Write the following tests in tests/2_functional-tests.js:

// Translation with text and locale fields: POST request to /api/translate
// Translation with text and invalid locale field: POST request to /api/translate
// Translation with missing text field: POST request to /api/translate
// Translation with missing locale field: POST request to /api/translate
// Translation with empty text: POST request to /api/translate
// Translation with text that needs no translation: POST request to /api/translate