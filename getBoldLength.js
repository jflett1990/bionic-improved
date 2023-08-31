function getBoldLength(word) {

  let boldLength = 2;

  if (word.length > 6) {
    boldLength = 4;
  }

  if (word.length > 10) {
    boldLength = 5;
  }

  return boldLength;

  function getBoldLength(word) {

    let boldLength = 2;

    if (word.length > 6) {
      boldLength = 4;
    }

    if (word.length > 10) {
      boldLength = 5;
    }

    // Validate input
    if (typeof word !== 'string') {
      throw new Error('Input word must be a string');
    }

    return boldLength;

  }

  function makeTextBionic(text) {
    // Rest of code
  }
}
