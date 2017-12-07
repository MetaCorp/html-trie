const Trie = require('@metacorp/trie')

const config = {
}

function htmlTrie (array) {
  this.trie = new Trie(array)
}

htmlTrie.prototype.searchBox = function (props) {
  this.searchBox = props.container
  this.searchBox.oninput = () => {
    if (!this.hits) return
    const hits = this.trie.search(this.searchBox.value)
    var ret = ''
    hits.forEach(hit => ret += `<div class="trie-hit">${hit}</div>`)
    this.hits.innerHtml = ''
    this.hits.appendChild(ret)
  } 
}

htmlTrie.prototype.hits = function (props) {
  this.hits = props.container
}

const HtmlTrie = htmlTrie

HtmlTrie.config = config

HtmlTrie.version = "__VERSION__"
