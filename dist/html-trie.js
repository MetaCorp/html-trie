/**
 * html-trie v0.0.1
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
    var Trie = require('@metacorp/trie')
    
    var config = {
    }
    
    function htmlTrie (array) {
      this.trie = new Trie(array)
    }
    
    htmlTrie.prototype.searchBox = function (props) {
      var this$1 = this;
    
      this.searchBox = props.container
      this.searchBox.oninput = function () {
        if (!this$1.hits) { return }
        var hits = this$1.trie.search(this$1.searchBox.value)
        var ret = ''
        hits.forEach(function (hit) { return ret += "<div class=\"trie-hit\">" + hit + "</div>"; })
        this$1.hits.innerHtml = ''
        this$1.hits.appendChild(ret)
      } 
    }
    
    htmlTrie.prototype.hits = function (props) {
      this.hits = props.container
    }
    
    var HtmlTrie = htmlTrie
    
    HtmlTrie.config = config
    
    HtmlTrie.version = "0.0.1"
    
    return HtmlTrie;
}));
