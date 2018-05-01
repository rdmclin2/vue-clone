
// JS权威指南 385
export function getOuterHTML(el) {
  if (el.outerHTML) {
    return el.outerHTML;
  }
  const container = document.createElement('div');
  container.appendChild(el.cloneNode(true));
  return container.innerHTML; // ? 返回了innerHTML?
}
