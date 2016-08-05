function supports_html5_storage() {
  try {
    console.log('true');
    return 'localStorage' in window && window['localStorage'] !== null;
} catch (e) {
  console.log('false');
    return false;
  }
}
