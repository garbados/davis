function (doc) {
  if (doc.category) {
    emit(doc.category, null);
  }
}