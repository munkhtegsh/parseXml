const parseXml = require('./parseXml');

describe('XML correctly parsed to JSON: ', () => {
  it('parseXml function should return the expected value', () => {
    const expected = { a: 'bla', b: { c: 'yes', d: 'no' } };
    expect(parseXml('<a>bla</a><b><c>yes</c><d>no</d></b>')).toEqual(expected);
  });

  it('parseXml function should return the same value when there is more than one non nested tags', () => {
    const expected = { a: 'bla', b: { c: 'yes', d: 'no' }, p: 'paystand' };
    expect(parseXml('<a>bla</a><b><c>yes</c><d>no</d></b><p>paystand</p>')).toEqual(expected);
  });
});

