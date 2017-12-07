const config = {
}

function htmlTrie (Trie, array) {
  this.trie = new Trie(array)
}

htmlTrie.prototype.oninput = function (str) {
  if (!this.hits) return
  if (str === '') {
    this.hits.innerHTML = ''
    return
  }
  const hits = this.trie.search(str || this.searchBox.value)
  var ret = ''
  this.hits.innerHTML = ''
  hits.forEach(hit => {
    const div = document.createElement('div')
    div.innerHTML = `<div class="trie-hit">${hit}</div>`
    this.hits.appendChild(div)
  })
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
