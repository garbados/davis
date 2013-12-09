function (doc) {
  if (doc.type === 'porter') {
    doc
      .tags
      .split(',')
      .filter(function (tag) {
        return tag;
      })
      .forEach(function (tag) {
        emit(doc.tag, null);
      });
  }
}