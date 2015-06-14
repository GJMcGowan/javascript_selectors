var $ = function (selector) {
  var elements = [];
  var validCSS = ["div", "input", "img"];
  words = [];

  // Splits id's and classes away from each other, so they can be dealt with separetly.
  var parser = function(selector) {
    newSelector = selector.replace("#", ",#").replace(".", ",.");
    words = newSelector.split(",");
    adder();
  };

  // Applies functions to each array item, based on whether they are ids, classes or whatever.
  var adder = function() {
    for(var i = words.length - 1; i >= 0; i--) {
      if(words[i].charAt(0) === "#"){
        getId(words[i]);
        // Not affecting tests
        culler(words[i]);
      } else if(words[i].charAt(0) === ".") {
        getClass(words[i]);
        // Not affecting tests
        culler(words[i]);
      } else if(validCSS.indexOf(words[i]) > -1) {
        getCSS(words[i]);
        culler(words[i]);
      } else {
        console.log("Nothing found");
      };
    };
  };

  var deleter = function(element, word) {
    if(word.charAt(0) === "#"){
      console.log("Maybe running with " + word + " and "+ element.id)
      if(element.id !== word.substring(1)) {
        console.log("Running with " + word + " and "+ element.id)
        elements.splice(elements.indexOf(element), 1);
      };
    } else if(word.charAt(0) === ".") {
      var array = element.className.split(" ");
      if(array.indexOf(word.substring(1)) <= -1) {
        elements.splice(elements.indexOf(element), 1);
      };
    } else if(validCSS.indexOf(word) > -1) {
      if(element.tagName !== word.toUpperCase()) {
        elements.splice(elements.indexOf(element), 1);        
      };
    } else {
      console.log("Nothing");
    };
  };

  var culler = function(word) {
    for(var i = elements.length - 1; i >= 0; i--) {
      elementzzz = elements;
      deleter(elements[i], word);
    };
  };

  // Helpers //

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
      }
    };   
  };

  parser(selector);

  // Required as for some reason the iterator cuts out on the last run through.
  culler(words[words.length - 1])

  return elements;
};
