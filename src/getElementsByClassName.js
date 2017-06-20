// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elements = [];
  var body = document.body;
  
  var findChildElementsByClassName = function(element, className) {
		var childElements;
    
    // does current element contain the class
    if (element.classList !== undefined) {
    	if (element.classList.contains(className)) {
        childElements = element;
      }
    }
    if (childElements !== undefined) {
    	elements.push(childElements);
    }
    
    
    // look for the class via the children
    if (element.hasChildNodes()) {
      var children = element.childNodes;
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.classList !== undefined) {
        	findChildElementsByClassName(child, className);
        }
      } 
    } 
  };
  findChildElementsByClassName(body, className);
  return elements;
};


  // console.log(className);
  // console.log(document.body);
  // var elements = [];
  //   var body = document.body;
    
  //   if (body.hasChildNodes()) {
  //   	var children = body.childNodes;
  // 		for (var i = 0; i < children.length; i++) {
  //     	var child = children[i];
  //     	if (child.classList !== undefined) {
  //       	if (child.classList.contains(className)) {
  //       	  elements.push(child);
  //         }
  //       }
  //     }
  //   }
  //   return elements;

