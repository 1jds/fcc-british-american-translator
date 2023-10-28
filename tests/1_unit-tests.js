const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
  // TEST 1
  test('Test 1 - Translate Mangoes are my favorite fruit to British English', (done) => {
    const testText = 'Mangoes are my favorite fruit';
    let result = translator.translate(testText, 'american-to-british');
    const expectedResult = {
        text: 'Mangoes are my favorite fruit',
        translation: 'Mangoes are my <span class="highlight">favourite</span> fruit'
      };
    assert.deepEqual(result, expectedResult);
    done();
  });
  
  // TEST 2
  test('Test 2 - Translate I ate yogurt for breakfast to British English', (done) => {
    const testText = 'I ate yogurt for breakfast';
    let result = translator.translate(testText, 'american-to-british');
    const expectedResult = {
      text: 'I ate yogurt for breakfast',
      translation: 'I ate <span class="highlight">yoghurt</span> for breakfast'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 3
  test('Test 3 - Translate We had a party at my friend\'s condo to British English', (done) => {
    const testText = 'We had a party at my friend\'s condo';
    let result = translator.translate(testText, 'american-to-british');
    const expectedResult = {
      text: 'We had a party at my friend\'s condo',
      translation: 'We had a party at my friend\'s <span class="highlight">flat</span>'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 4
  test('Test 4 - Translate Can you toss this in the trashcan for me? to British English', (done) => {
    const testText = 'Can you toss this in the trashcan for me?';
    let result = translator.translate(testText, 'american-to-british');
    const expectedResult = {
      text: 'Can you toss this in the trashcan for me?',
      translation: 'Can you toss this in the <span class="highlight">bin</span> for me?'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 5
  test('Test 5 - Translate The parking lot was full to British English', (done) => {
    const testText = 'The parking lot was full';
    let result = translator.translate(testText, 'american-to-british');
    const expectedResult = {
      text: 'The parking lot was full',
      translation: 'The <span class="highlight">car park</span> was full'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 6
  test('Test 6 - Translate Like a high tech Rube Goldberg machine to British English', (done) => {
    const testText = 'Like a high tech Rube Goldberg machine';
    let result = translator.translate(testText, 'american-to-british');
    const expectedResult = {
      text: 'Like a high tech Rube Goldberg machine',
      translation: 'Like a high tech <span class="highlight">Heath Robinson device</span>'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 7
  test('Test 7 - Translate To play hooky means to skip class or work. to British English', (done) => {
    const testText = 'To play hooky means to skip class or work.';
    let result = translator.translate(testText, 'american-to-british');
    const expectedResult = {
      text: 'To play hooky means to skip class or work.',
      translation: 'To <span class="highlight">bunk off</span> means to skip class or work.'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 8
  test('Test 8 - Translate No Mr. Bond, I expect you to die. to British English', (done) => {
    const testText = 'No Mr. Bond, I expect you to die.';
    let result = translator.translate(testText, 'american-to-british');
    const expectedResult = {
      text: 'No Mr. Bond, I expect you to die.',
      translation: 'No <span class="highlight">Mr</span> Bond, I expect you to die.'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 9
  test('Test 9 - Translate Dr. Grosh will see you now. to British English', (done) => {
    const testText = 'Dr. Grosh will see you now.';
    let result = translator.translate(testText, 'american-to-british');
    const expectedResult = {
      text: 'Dr. Grosh will see you now.',
      translation: '<span class="highlight">Dr</span> Grosh will see you now.'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 10
  test('Test 10 - Translate Lunch is at 12:15 today. to British English', (done) => {
    const testText = 'Lunch is at 12:15 today.';
    let result = translator.translate(testText, 'american-to-british');
    const expectedResult = {
      text: 'Lunch is at 12:15 today.',
      translation: 'Lunch is at <span class="highlight">12.15</span> today.'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 11
  test('Test 11 - Translate We watched the footie match for a while. to American English', (done) => {
    const testText = 'We watched the footie match for a while.';
    let result = translator.translate(testText, 'british-to-american');
    const expectedResult = {
      text: 'We watched the footie match for a while.',
      translation: 'We watched the <span class="highlight">soccer</span> match for a while.'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 12
  test('Test 12 - Translate Paracetamol takes up to an hour to work. to American English', (done) => {
    const testText = 'Paracetamol takes up to an hour to work.';
    let result = translator.translate(testText, 'british-to-american');
    const expectedResult = {
      text: 'Paracetamol takes up to an hour to work.',
      translation: '<span class="highlight">Tylenol</span> takes up to an hour to work.'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 13
  test('Test 13 - Translate First, caramelise the onions. to American English', (done) => {
    const testText = 'First, caramelise the onions.';
    let result = translator.translate(testText, 'british-to-american');
    const expectedResult = {
      text: 'First, caramelise the onions.',
      translation: 'First, <span class="highlight">caramelize</span> the onions.'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 14
  test('Test 14 - Translate I spent the bank holiday at the funfair. to American English', (done) => {
    const testText = 'I spent the bank holiday at the funfair.';
    let result = translator.translate(testText, 'british-to-american');
    const expectedResult = {
      text: 'I spent the bank holiday at the funfair.',
      translation: 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 15
  test('Test 15 - Translate I had a bicky then went to the chippy. to American English', (done) => {
    const testText = 'I had a bicky then went to the chippy.';
    let result = translator.translate(testText, 'british-to-american');
    const expectedResult = {
      text: 'I had a bicky then went to the chippy.',
      translation: 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 16
  test('Test 16 - Translate I\'ve just got bits and bobs in my bum bag. to American English', (done) => {
    const testText = 'I\'ve just got bits and bobs in my bum bag.';
    let result = translator.translate(testText, 'british-to-american');
    const expectedResult = {
      text: 'I\'ve just got bits and bobs in my bum bag.',
      translation: 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.'
    }
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 17
  test('Test 17 - Translate The car boot sale at Boxted Airfield was called off. to American English', (done) => {
    const testText = 'The car boot sale at Boxted Airfield was called off.';
    let result = translator.translate(testText, 'british-to-american');
    const expectedResult = {
      text: 'The car boot sale at Boxted Airfield was called off.',
      translation: 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 18
  test('Test 18 - Translate Have you met Mrs Kalyani? to American English', (done) => {
    const testText = 'Have you met Mrs Kalyani?';
    let result = translator.translate(testText, 'british-to-american');
    const expectedResult = {
      text: 'Have you met Mrs Kalyani?',
      translation: 'Have you met <span class="highlight">Mrs.</span> Kalyani?'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 19
  test('Test 19 - Translate Prof Joyner of King\'s College, London. to American English', (done) => {
    const testText = 'Prof Joyner of King\'s College, London.';
    let result = translator.translate(testText, 'british-to-american');
    const expectedResult = {
      text: 'Prof Joyner of King\'s College, London.',
      translation: '<span class="highlight">Prof.</span> Joyner of King\'s College, London.'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 20
  test('Test 20 - Translate Tea time is usually around 4 or 4.30. to American English', (done) => {
    const testText = 'Tea time is usually around 4 or 4.30.';
    let result = translator.translate(testText, 'british-to-american');
    const expectedResult = {
      text: 'Tea time is usually around 4 or 4.30.',
      translation: 'Tea time is usually around 4 or <span class="highlight">4:30</span>.'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 21
  test('Test 21 - Highlight translation in Mangoes are my favorite fruit.', (done) => {
    const testText = 'Mangoes are my favorite fruit.';
    let result = translator.translate(testText, 'american-to-british');
    const expectedResult = {
      text: 'Mangoes are my favorite fruit.',
      translation: 'Mangoes are my <span class="highlight">favourite</span> fruit.'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 22
  test('Test 22 - Highlight translation in I ate yogurt for breakfast.', (done) => {
    const testText = 'I ate yogurt for breakfast.';
    let result = translator.translate(testText, 'american-to-british');
    const expectedResult = {
      text: 'I ate yogurt for breakfast.',
      translation: 'I ate <span class="highlight">yoghurt</span> for breakfast.'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 23
  test('Test 23 - Highlight translation in We watched the footie match for a while.', (done) => {
    const testText = 'We watched the footie match for a while.';
    let result = translator.translate(testText, 'british-to-american');
    const expectedResult = {
      text: 'We watched the footie match for a while.',
      translation: 'We watched the <span class="highlight">soccer</span> match for a while.'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 24
  test('Test 24 - Highlight translation in Paracetamol takes up to an hour to work.', (done) => {
    const testText = 'Paracetamol takes up to an hour to work.';
    let result = translator.translate(testText, 'british-to-american');
    const expectedResult = {
      text: 'Paracetamol takes up to an hour to work.',
      translation: '<span class="highlight">Tylenol</span> takes up to an hour to work.'
    };
    assert.deepEqual(result, expectedResult);
    done();
  });

  // TEST 25
  test('Test 25 - All remaining highlighted words should also be highlighted.', (done) => {
    const testText = 'First, caramelise the onions. Then, add the salt and pepper and mix well.';
    let result = translator.translate(testText, 'british-to-american');
    const expectedResult = {
      text: 'First, caramelise the onions. Then, add the salt and pepper and mix well.',
      translation: 'First, <span class="highlight">caramelize</span> the onions. Then, add the'
  }
    assert.deepEqual(result, expectedResult);
    done();
  });
  
    

});


// Write the following tests in tests/1_unit-tests.js:

// Translate Mangoes are my favorite fruit. to British English
// Translate I ate yogurt for breakfast. to British English
// Translate We had a party at my friend's condo. to British English
// Translate Can you toss this in the trashcan for me? to British English
// Translate The parking lot was full. to British English
// Translate Like a high tech Rube Goldberg machine. to British English
// Translate To play hooky means to skip class or work. to British English
// Translate No Mr. Bond, I expect you to die. to British English
// Translate Dr. Grosh will see you now. to British English
// Translate Lunch is at 12:15 today. to British English
// Translate We watched the footie match for a while. to American English
// Translate Paracetamol takes up to an hour to work. to American English
// Translate First, caramelise the onions. to American English
// Translate I spent the bank holiday at the funfair. to American English
// Translate I had a bicky then went to the chippy. to American English
// Translate I've just got bits and bobs in my bum bag. to American English
// Translate The car boot sale at Boxted Airfield was called off. to American English
// Translate Have you met Mrs Kalyani? to American English
// Translate Prof Joyner of King's College, London. to American English
// Translate Tea time is usually around 4 or 4.30. to American English
// Highlight translation in Mangoes are my favorite fruit.
// Highlight translation in I ate yogurt for breakfast.
// Highlight translation in We watched the footie match for a while.
// Highlight translation in Paracetamol takes up to an hour to work.
