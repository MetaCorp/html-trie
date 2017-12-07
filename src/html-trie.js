const Trie = require('@metacorp/trie')

const config = {
}

function htmlTrie (array) {
  this.trie = new Trie(array)
}

htmlTrie.prototype.oninput = function (str) {
  console.log('oninput: ', str || this.searchBox.value)
  if (!this.hits) return
  const hits = this.trie.search(str || this.searchBox.value)
  var ret = ''
  console.log('hits: ', hits)
  hits.forEach(hit => ret += `<div class="trie-hit">${hit}</div>`)
  this.hits.innerHtml = ''
  console.log('ret: ', ret)
  this.hits.appendChild(ret)
}

htmlTrie.prototype.searchBox = function (props) {
  this.searchBox = props.container
  this.searchBox.oninput = () => this.oninput()
}

htmlTrie.prototype.hits = function (props) {
  this.hits = props.container
}

const HtmlTrie = htmlTrie

HtmlTrie.config = config

HtmlTrie.version = "__VERSION__"
