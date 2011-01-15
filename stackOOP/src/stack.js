var authorsName = "William Doane";

var stack = (function(){
  var _stack = [],

  return {
    init: function() {
      _stack = [];
    },
  
    push: function(e) {
      _stack.push(e);
    },
    
    pop: function() {
      if (_stack.length != 0) {
        return _stack.pop();
      }
    },
    
    peek: function(index) {
      var i = (typeof index !== "undefined") ? index : this.size() - 1;
      
      return _stack[i];
    }, 

    contains: function(e) {
      for (var i = 0; i < this.size(); i++) {
        if (_stack[i] == e) {
          return true;
        }
      }
      
      return false;
    }, 

    size: function() {
      return _stack.length;
    },

  };
}());

