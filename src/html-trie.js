const config = {
  hitClassName: 'trie-hit'
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
  this.hits.innerHTML = ''
  for (var i = 0, l = hits.length; i < l; i++) {
    const div = document.createElement('div')
    div.className = config.className
    div.innerHTML = hits[i]}
    this.hits.appendChild(div)
  }
}

htmlTrie.prototype.searchBox = function (props) {
  this.searchBox = props.container
  this.searchBox.oninput = () => {
    props.oninput && props.oninput()
    this.oninput()
  }
}

htmlTrie.prototype.hits = function (props) {
  this.hits = props.container
}

const HtmlTrie = htmlTrie

HtmlTrie.config = config

HtmlTrie.version = "__VERSION__"
