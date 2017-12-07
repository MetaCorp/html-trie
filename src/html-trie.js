const config = {
}

function htmlTrie (Trie, array) {
  this.trie = new Trie(array)
}

htmlTrie.prototype.oninput = function (str) {
  console.log('oninput: ', str || this.searchBox.value)
  if (!this.hits) return
  const hits = this.trie.search(str || this.searchBox.value)
  var ret = ''
  console.log('hits: ', hits)
  this.hits.innerHtml = ''
  hits.forEach(hit => {
    const div = document.createElement('div')
    div.innerHTML = `<div class="trie-hit">${hit}</div>`
    this.hits.appendChild(div)
  })
  console.log('ret: ', ret)
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
