const parseXml = require('./parseXml');

test('XML to json', () => {
  expect(parseXml('<a>bla</a><b><c>yes</c><d>no</d></b>)).toBe({ a: 'bla', b: { c: 'yes', d: 'no' } });
});
