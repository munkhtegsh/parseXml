const parseXml = require('./parseXml');

describe('XML correctly parsed to JSON: ', () => {

  // Check the original input parsed to XML correctly
  it('parseXml function should return the expected value', () => {
    const expected = { a: 'bla', b: { c: 'yes', d: 'no' } };
    expect(parseXml('<a>bla</a><b><c>yes</c><d>no</d></b>')).toEqual(expected);
  });

  // Check if there is more tags added to the most outer tag
  it('adds keys when there is more than one non nested tags added to the XML', () => {
    const expected = { a: 'bla', b: { c: 'yes', d: 'no' }, p: 'paystand' };
    expect(parseXml('<a>bla</a><b><c>yes</c><d>no</d></b><p>paystand</p>')).toEqual(expected);
  });

  // Wrote test for adding more than one nested tags to 'b'
  it('adds keys when there is more than one nested tags added to the XML', () => {
    const expected = { a: 'bla', b: { p: {e: { c: 'yes', d: 'no' }}}};
    expect(parseXml('<a>bla</a><b><p><e><c>yes</c><d>no</d></e></p></b>')).toEqual(expected);
  });

  // Incase the tags were words
  it('should catch the word tags', () => {
    const expected = { Paystand: { is: 'awesome company', b: { c: 'yes', d: 'no' }}};
    expect(parseXml('<Paystand><is>awesome company</is><b><c>yes</c><d>no</d></b></Paystand>')).toEqual(expected);
  });
});

