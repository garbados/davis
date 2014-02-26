function (doc) {
  if (doc.text) {
    index('default', doc.text);
  }

  if (doc.type) {
    Object
    .keys(doc)
    .filter(function (key) {
      return (key[0] === '_');
    })
    .forEach(function (key) {
      if (doc[key].split) {
        // if it's a string, index it without modification
        index(key, doc[key], { facet: true });
      } else {
        // if it's an array, index each element
        doc[key].forEach(function (value) {
          index(key, value, { facet: true });
        })
      }
    });
  }
}