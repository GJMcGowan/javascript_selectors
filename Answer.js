var $ = function (selector) {
  var elements = [];

  if(selector === "div") {
    var div = document.getElementsByTagName("div")
    for (var i = div.length - 1; i >= 0; i--) {
      elements.push(div[i])
    };
  };

  // if(selector === "#") {
  //   document.getElementById(selector)
  // }

  return elements;
}
