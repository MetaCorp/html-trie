/**
 * html-trie v0.1.1
 * Copyright 2017 Léopold Szabatura
 * Released under the MIT License
 * https://github.com/MetaCorp/html-trie
 */

(function(root, factory) {
  /* ======= Global Wade ======= */
  if(typeof module === "undefined") {
    root.HtmlTrie = factory();
  } else {
    module.exports = factory();
  }
}(this, function() {
    var config = {
      hitClassName: 'trie-hit'
    }
    
    function htmlTrie (Trie, array) {
      this.trie = new Trie(array)
    }
    
    htmlTrie.prototype.oninput = function (str) {
      var this$1 = this;
    
      if (!this.hits) { return }
      if (str === '') {
        this.hits.innerHTML = ''
        return
      }
      var hits = this.trie.search(str || this.searchBox.value)
      this.hits.innerHTML = ''
      for (var i = 0, l = hits.length; i < l; i++) {
        var div = document.createElement('div')
        div.className = config.className
        div.innerHTML = hits[i]
        this$1.hits.appendChild(div)
      }
    }
    
    htmlTrie.prototype.searchBox = function (props) {
      var this$1 = this;
    
      this.searchBox = props.container
      this.searchBox.oninput = function () {
        props.oninput && props.oninput()
        this$1.oninput()
      }
    }
    
    htmlTrie.prototype.hits = function (props) {
      this.hits = props.container
    }
    
    var HtmlTrie = htmlTrie
    
    HtmlTrie.config = config
    
    HtmlTrie.version = "0.1.1"
    
    return HtmlTrie;
}));
