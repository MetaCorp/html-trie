/**
 * html-trie v0.0.4
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
    }
    
    function htmlTrie (Trie, array) {
      this.trie = new Trie(array)
    }
    
    htmlTrie.prototype.oninput = function (str) {
      var this$1 = this;
    
      console.log('oninput: ', str || this.searchBox.value)
      if (!this.hits) { return }
      var hits = this.trie.search(str || this.searchBox.value)
      var ret = ''
      console.log('hits: ', hits)
      this.hits.innerHtml = ''
      hits.forEach(function (hit) {
        var div = document.createElement('div')
        div.innerHTML = "<div class=\"trie-hit\">" + hit + "</div>"
        this$1.hits.appendChild(div)
      })
      console.log('ret: ', ret)
    }
    
    htmlTrie.prototype.searchBox = function (props) {
      var this$1 = this;
    
      this.searchBox = props.container
      this.searchBox.oninput = function () { return this$1.oninput(); }
    }
    
    htmlTrie.prototype.hits = function (props) {
      this.hits = props.container
    }
    
    var HtmlTrie = htmlTrie
    
    HtmlTrie.config = config
    
    HtmlTrie.version = "0.0.4"
    
    return HtmlTrie;
}));
