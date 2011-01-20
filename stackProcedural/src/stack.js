var authorsName = "William Doane";
var stack = [];

function stackInit() {
  stack = [];
}

function stackSize() {
  return stack.length;
}

function stackAdd(element) {
  stack.push(element);
}

function stackPeek(index) {
  if (index === undefined) {
    index = (stack.length) - 1;
  }
  return stack[index];
}

function stackGet() {
  return stack.pop();
}

function stackContains(element) {
  var i;
  
  for(i = 0; i <= stack.length - 1; i = i + 1) {
    if (stackPeek(i) === element) {
      return true;
    }
  }
  
  return false;
}
