[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![npm version](https://badge.fury.io/js/meta-description.svg)](https://badge.fury.io/js/meta-description)

# meta-description
Manipulates the Meta Description tag in an webapp and reset

## Motivation
Since the Googlebot can run JavaScript, the SPA are now indexable by Google and are SEO-friendly.
In a SPA is usually not change the meta tags and meta description is very important in the SERP along with the title tag.
This library is designed to solve that problem. It works well with Page.js

## Installation
```
$ npm install meta-description`
```

## API and usage
```js
const metaDesc = require('meta-description')

// Set a new content description
metaDesc('A new description')

// Reset to original meta description
metaDesc.reset()
```

## License
The MIT License (MIT)

Copyright (c) 2016 Chefly Food Sharing, S.L.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
