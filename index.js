'use strict'

/**
 * Dinamically manipulates the description metatag dinamically.
 * @param {string} text - The new content to insert in meta tag.
 * @return The new content of description meta tag.
 */
function set (text) {
  let metatag = document.querySelector('[name="description"]')

  if (metatag) {
    metatag.content = text
  } else {
    let metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    metaDescription.setAttribute('content', text)
    document.head.appendChild(metaDescription)
  }
}

exports = module.exports = set
