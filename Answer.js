var $ = function (selector) {
  var elements = [];
  var validCSS = ["div", "input", "img", "DIV", "INPUT", "IMG"];
  words = [];

  // Splits id's and classes away from each other, so they can be dealt with separetly.
  var parser = function(selector) {
    newSelector = selector.replace("#", ",#").replace(".", ",.");
    words = newSelector.split(",");
  };

  // Applies functions to each array item, based on whether they are ids, classes or whatever.
  var adder = function() {
    for(var i = words.length - 1; i >= 0; i--) {
      if(words[i].charAt(0) === "#"){
        getId(words[i])
        culler(words[i]);
      } else if(words[i].charAt(0) === ".") {
        getClass(words[i])
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
      if(element.id !== word.substring(1)) {
        elements.splice(elements.indexOf(element), 1);
      };
    } else if(word.charAt(0) === ".") {
      var array = element.className.split(" ")
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

  // .id, .className, .tagName are very important now...
  // var array = [1, 5, 7]
  // var index = array.indexof(5)
  // if (index > -1 ) {
      // array.splice(index, 1)
  // }

  // Run this after each iteration through, it checks whether items in the array 
  // are valid according to this criteria as well, otherwise takes them out.
  var culler = function(word) {
    for(var i = elements.length - 1; i >= 0; i--) {
      // for the element at this position, is the word true of it?
      // So is it an image and of the right class
      // It is of the right class, but does it have the right id etc.
      elementzzz = elements;
      deleter(elements[i], word);
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
    }
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
  adder();

  // // Is it trying to select images?
  // if(selector.includes("img")) {
  //   var images = document.images;
  //   for (var i = images.length - 1; i >= 0; i--) {
  //     elements.push(images[i]);
  //   };
  // };

  return elements;
};
