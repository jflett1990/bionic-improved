 // content.js

document.addEventListener('DOMContentLoaded', () => {

  function makeTextBionic(text) {

    const words = text.split(' ');

    return words.map((word) => {
      //Modify text here
    }).join(' ');

  }

  function processNode(node) {
    //Process DOM nodes
  }

  Array.from(document.body.childNodes).forEach(processNode);

  console.log('Bionic Reading Script Loaded');

});