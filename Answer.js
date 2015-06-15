var $ = function (selector) {
  var elements = [];
  var validCSS = ["div", "input", "img"];
  var words = [];

  // Splits id's and classes away from each other, so they can be dealt with separately.
  var parser = function(selector) {
    words = selector.replace("#", ",#").replace(".", ",.").split(",");
    adder();
  };

  // Applies functions to each array item, based on whether they are ids, classes or whatever.
  var adder = function() {
    for(var i = words.length - 1; i >= 0; i--) {
      if(words[i].charAt(0) === "#"){
        getId(words[i]);
      } else if(words[i].charAt(0) === ".") {
        getClass(words[i]);
      } else if(validCSS.indexOf(words[i]) > -1) {
        getCSS(words[i]);
      } else {
        console.log("Nothing found");
      };
    };
  };

  // Removes items from the array if they are not valid according to this word.
  var deleter = function(word) {
    for(var i = elements.length - 1; i >= 0; i--) {
      if(word.charAt(0) === "#"){
        deleteByID(elements[i], word)
      } else if(word.charAt(0) === ".") {
        deleteByClass(elements[i], word)
      } else if(validCSS.indexOf(word) > -1) {
        deleteByCSS(elements[i], word)
      } else {
        console.log("Nothing");
      };
    };
  };

  // Helpers //

  var deleteByID = function(element, id) {
    if(element.id !== id.substring(1)) {
      elements.splice(elements.indexOf(element), 1);
    };
  };

  var deleteByClass = function(element, word) {
    var array = element.className.split(" ");
    if(array.indexOf(word.substring(1)) <= -1) {
      elements.splice(elements.indexOf(element), 1);
    };
  };

  var deleteByCSS = function(element, css) {
    if(element.tagName !== css.toUpperCase()) {
      elements.splice(elements.indexOf(element), 1);        
    };
  };

  var getClass = function(className) {
    var classes = document.getElementsByClassName(className.substring(1));
    for (var i = classes.length - 1; i >= 0; i--) {
      if(elements.indexOf(classes[i]) <= -1) {
        elements.push(classes[i]);        
      };
    };
  };

  var getId = function(id) {
    element = (document.getElementById(id.substring(1)))
    if(elements.indexOf(element) <= -1) {
      elements.push(element);
    };
  };

  var getCSS = function(css) {
    var items = document.getElementsByTagName(css);
    for (var i = items.length - 1; i >= 0; i--) {
      if(elements.indexOf(items[i]) <= -1) {
        elements.push(items[i]);
      };
    };   
  };

  parser(selector);
  for (var i = words.length - 1; i >= 0; i--) {
    deleter(words[i])
  };

  return elements;
};
