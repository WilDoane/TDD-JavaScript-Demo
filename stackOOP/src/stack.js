var authorsName = "William Doane";

var stack = (function () {
  var theStack = [];

  return {
    init: function () {
      theStack = [];
    },
  
    push: function (e) {
      theStack.push(e);
    },
    
    pop: function () {
      if (theStack.length !== 0) {
        return theStack.pop();
      }
    },
    
    peek: function (index) {
      var i = (typeof index !== "undefined") ? index : this.size() - 1;
      
      return theStack[i];
    }, 

    contains: function (e) {
      var i;
      for (i = 0; i < this.size(); i = i + 1) {
        if (theStack[i] === e) {
          return true;
        }
      }
      
      return false;
    }, 

    size: function () {
      return theStack.length;
    }

  };
}());

