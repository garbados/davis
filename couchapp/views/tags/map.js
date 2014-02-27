function (doc) {
  if (doc.tags) {
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