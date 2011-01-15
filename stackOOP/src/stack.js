var myStack = (function(){
  var stack = [],

  return {
    init: function() {
      stack = [];
    },
  
    push: function(e) {
      stack.push(e);
    },
    
    pop: function() {
      if (stack.length != 0) {
        return stack.pop();
      }
    },
    
    peek: function(index) {
      var i = (typeof index !== "undefined") ? index : this.size();
      
      return stack[i];
    }, 

    size: function() {
      return stack.length - 1;
    },

  };
}());

