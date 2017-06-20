// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elements = [];
  var body = document.body;
  
  var getElementsByClass = function(element, className) {
    
    if (element.classList !== undefined) {
    	if (element.classList.contains(className) && element !== undefined) {
        elements.push(element);
      }
    }
    
    if (element.hasChildNodes()) {
      var children = element.childNodes;
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        getElementsByClass(child, className);
      } 
    } 
  };

  getElementsByClass(body, className);
  return elements;
};



