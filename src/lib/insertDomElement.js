const insertAfter = (element, after) => {
  const parent = after.parentNode
  parent.insertBefore(element, after.nextElementSibling)
  return element
}

const insertAsLastChild = (element, append) => {
  append.appendChild(element)
  return element
}

/**
 * Insert an element to the DOM.
 * @return the inserted element
 */
export default ({
  el = 'div',
  attr = {},
  after = undefined,
  append = document.body, // defaults to appending to body
}) => {
  const element = document.createElement(el)

  for (const a in attr) {
    element.setAttribute(a, attr[a])
  }

  if (after) return insertAfter(element, after)
  return insertAsLastChild(element, append)
}
