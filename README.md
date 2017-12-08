# Trie

Html binding for [Trie](https://github.com/MetaCorp/trie)

[![Build Status](https://travis-ci.org/MetaCorp/html-trie.svg?branch=master)](https://travis-ci.org/MetaCorp/html-trie)

### Installation

NPM

```sh
npm install @metacorp/html-trie @metacorp/trie
```

CDN

```html
<script src="https://unpkg.com/@metacorp/trie"></script>
<script src="https://unpkg.com/@metacorp/trie-html"></script>
```

### Usage

Initialize Trie with an array of data.

```js
const htmlTrie = new HtmlTrie(Trie, ['Apple', 'Lemon', 'Orange', 'Tomato'])
```

Now bind an input with `searchBox`

```js
htmlTrie.searchBox({
  container: document.getElementById('searchBox')
})
```

And an result element with `hits`

```js
htmlTrie.hits({
  container: document.getElementById('hits')
})
```

### Configuration

```js
// Don't preprocess at all
HtmlTrie.config.hitClassName = 'result-item'

```

### License

Licensed under the [MIT License](https://github.com/MetaCorp/trie/blob/master/LICENSE)

Copyright (c) Meta l.szabatura@gmail.com
