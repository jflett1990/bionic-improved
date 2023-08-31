function makeTextBionic(text) {

  const words = text.split(' ');

  return words.map((word) => {

    const boldLength = getBoldLength(word);

    const boldPart = word.substr(0, boldLength);
    const normalPart = word.substr(boldLength);

    return `<b>${boldPart}</b>${normalPart}`;

  }).join(' ');

}
