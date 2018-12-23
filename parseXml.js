// 1. filter the keys
// 2. filter the contents
// 3. make recursive calls, if '<' tag exists after the '>' tag

function getKey(str) {
  let key = '';
  for (let char of str) {
    if (char === '>') {
      return key;
    } else {
      key += char
    }
  }
}

// getKey('a>')

function getContent(str, key) {
  let endTagIdx = str.indexOf(`</${key}>`);
  return str.substring(0, endTagIdx);
}

// getContent('bla</a>', 'a');

function parseXml(str) {
  let dict = {};
  if (str.indexOf("<") == -1) {
    return str
  }

  let i = 0;
  while (i < str.length) {
    if (str[i] === '<') {
      let key = getKey(str.substring(i + 1));
      str = str.substring(i + key.length + 2);
      let content = getContent(str, key);
      str = str.substring(content.length + key.length + 3);
      const dictValues = parseXml(content);
      dict[key] = dictValues;
    }
  }
  return dict;
}
// parseXml('<a>bla</a><b><c>yes</c><d>no</d></b>');

module.exports = parseXml;
