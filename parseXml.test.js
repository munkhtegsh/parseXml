const parseXml = require('./parseXml');

test('parseXml function should return the expected value', () => {
  const expected = { a: 'bla', b: { c: 'yes', d: 'no' } };
  expect(parseXml('<a>bla</a><b><c>yes</c><d>no</d></b>')).toEqual(expected);
});


