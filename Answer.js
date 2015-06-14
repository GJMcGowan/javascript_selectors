var $ = function (selector) {
  var elements = [];
  var validCSS = ["div", "input", "img"];
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
      } else if(words[i].charAt(0) === ".") {
        getClass(words[i])
      } else if(validCSS.indexOf(words[i]) > -1) {
        getCSS(words[i])
      } else {
        console.log("Nothing found");
      };
      culler(words[i]);
    };
  };

  // Run this after each iteration through, it checks whether items in the array 
  // are valid according to this criteria as well, otherwise takes them out.
  var culler = function(item) {
    for(var i = elements.length - 1; i >= 0; i--) {
      // for the element at this position, is the word true of it?
      // So is it an image and of the right class
      // It is of the right class, but does it have the right id etc.
      elements[i]
    };
  };

  var getClass = function(className) {
    var classes = document.getElementsByClassName(className.substring(1));
    for (var i = classes.length - 1; i >= 0; i--) {
      elements.push(classes[i]);
    };
  };

  var getId = function(id) {
    elements.push(document.getElementById(id.substring(1)));
  };

  var getCSS = function(css) {
    var items = document.getElementsByTagName(css);
    for (var i = items.length - 1; i >= 0; i--) {
      elements.push(items[i]);
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
