function processNode(node) {

  if (node.nodeType === Node.TEXT_NODE) {
    node.parentElement.innerHTML = makeTextBionic(node.nodeValue);
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    Array.from(node.childNodes).forEach(processNode);
  }

}
