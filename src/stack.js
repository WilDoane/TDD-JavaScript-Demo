var author = "William Doane";
var stack = new Array();

function stackInit() {
  stack = new Array();
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
  for(var i = 0; i <= stack.length - 1; i++) {
    if (stackPeek(i) == element) {
      return true;
    }
  }
  
  return false;
}
