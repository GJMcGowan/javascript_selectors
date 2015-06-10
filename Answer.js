var $ = function (selector) {
  var elements = [];

  // Is it trying to select divs?
  // Super-duper hacky.
  if(selector === "div") {
    var div = document.getElementsByTagName("div")
    for (var i = div.length - 1; i >= 0; i--) {
      elements.push(div[i])
    };
  };

  // Is it trying to select by ID?
  if(selector.charAt(0) === "#") {
    elements.push(document.getElementById(selector.substring(1)))
  };

  // Is it trying to select by class?
  if(selector.charAt(0) === ".") {
    var classes = document.getElementsByClassName(selector.substring(1))
    for (var i = classes.length - 1; i >= 0; i--) {
      elements.push(classes[i])
    };
  }

  return elements;
}
