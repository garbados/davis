function (doc) {
  if (doc.type === 'porter') {
    emit(doc.category, null);
  }
}