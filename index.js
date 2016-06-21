'use strict'

const original = document.querySelector('[name="description"]').content

/**
 * Dinamically manipulates the description metatag dinamically.
 * @param {string} text - The new content to insert in meta tag.
 * @return The new content of description meta tag.
 */
function set (text) {
  let metatag = document.querySelector('[name="description"]')
  let metaItemProp = document.querySelector('[itemprop="description"]')

  if (metatag) {
    metatag.content = text
  } else {
    let metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    metaDescription.setAttribute('content', text)
    document.head.appendChild(metaDescription)
  }

  if (metaItemProp) {
    metaItemProp.content = text
  } else {
    let metaItemProp = document.createElement('meta')
    metaItemProp.setAttribute('itemprop', 'description')
    metaItemProp.setAttribute('content', text)
    document.head.appendChild(metaItemProp)
  }
}

exports = module.exports = set

exports.reset = function () {
  set(original)
}
