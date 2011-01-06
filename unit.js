function log(message) {
  document.getElementById("output").innerHTML = 
    document.getElementById("output").innerHTML + "<p>" + message + "</p>";
}

function assert(expr, message) {
  if (!expr) {
    throw new Error(message);
    assert.count++;
  }
  
  return true;
}

function assertEquals(returned, expected, message) {
  assert(returned == expected, message + ". Expected: " + expected + " but was: " + returned)
}

assert.count = 0;