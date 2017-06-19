// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here

  var elements = [];
  var body = document.body;
  
  var findChildElementsByClassName = function(element, className) {
  	var childElements = [];
    /*  MAY NEED TO MOVE THIS IF STATEMENT OUT OF THIS FUNCTION  */
    if (element.hasChildNodes()) {
      var children = element.childNodes;
      // search the child nodes
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        // ensure not undefined
        if (child.classList !== undefined) {
          // then look for the className
          if (child.classList.contains(className)) {
            // if found, add 
            childElements.push(child);
          } else if (child.hasChildNodes()) {
            var children = findChildElementsByClassName(child, className);
            if (children.length) {
            	childElements.push(findChildElementsByClassName(child, className));
            } 
          }
        }
      }
    }
    return childElements;
  };
  
  elements = findChildElementsByClassName(body, className);
  // need to flatten out before returning
  _.flatten(elements);
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

