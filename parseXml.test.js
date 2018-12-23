const parseXml = require('./parseXml');

describe('XML correctly parsed to JSON: ', () => {
  it('parseXml function should return the expected value', () => {
    const expected = { a: 'bla', b: { c: 'yes', d: 'no' } };
    expect(parseXml('<a>bla</a><b><c>yes</c><d>no</d></b>')).toEqual(expected);
  });

  it('adds keys when there is more than one non nested tags added to the XML', () => {
    const expected = { a: 'bla', b: { c: 'yes', d: 'no' }, p: 'paystand' };
    expect(parseXml('<a>bla</a><b><c>yes</c><d>no</d></b><p>paystand</p>')).toEqual(expected);
  });

  it('adds keys when there is more than one nested tags added to the XML', () => {
    const expected = { a: 'bla', b: { p: {e: { c: 'yes', d: 'no' }}}};
    expect(parseXml('<a>bla</a><b><p><e><c>yes</c><d>no</d></e></p></b>')).toEqual(expected);
  });

  // it('adds keys when there is more than one nested tags added to the XML', () => {
  //   const expected = { a: 'bla', b: { c: 'yes', d: 'no' }, p: 'paystand' };
  //   expect(parseXml('<a>bla</a><b><c>yes</c><d>no</d></b><p><p>paystand</p></p>')).toEqual(expected);
  // });

});

