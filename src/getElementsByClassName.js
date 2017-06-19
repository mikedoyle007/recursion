// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  console.log(className);
  console.log(document.body);
  var elements = [];
    var body = document.body;
    
    if (body.hasChildNodes()) {
    	var children = body.childNodes;
  		for (var i = 0; i < children.length; i++) {
      	var child = children[i];
      	if (child.classList !== undefined) {
        	if (child.classList.contains(className)) {
        	  elements.push(child);
          }
        }
      }
    }
    return elements;
};
