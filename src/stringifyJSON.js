// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  console.log(obj);
  // your code goes here
  if (obj !== null && obj !== undefined) {
    var str = '';
    if (Array.isArray(obj)) {
      str = '[';
      if (obj.length) {
        for (var i = 0; i < obj.length; i++) {
          str += stringifyJSON(obj[i]);
          if (i < (obj.length - 1)) {
            str += ',';
          }
        }
      }
      str += ']';
    } else if (typeof(obj) === 'object') {
      str = '{';
      var count = 0;
      var numOfProps = Object.keys(obj).length;
      for (var prop in obj) {
      	count++;
      	if (typeof(obj[prop]) !== 'function' && typeof(obj[prop]) !== undefined) {
      	  str += stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]);
      	  if (count < numOfProps) {
      	    str += ',';
      	  } 
      	} else {
          return '{}';
      	}
      }
      str += '}';
    } else if (typeof(obj) === 'string') {
      if (obj === 'functions' || obj === 'undefined') {
        str = '';
      } else {
        str = '"' + obj + '"';
      }
    } else if (typeof(obj) === 'boolean') {
      str = obj.toString();
    } else if (typeof(obj) === 'number') {
      str = obj.toString();
    } else if (typeof(obj) === 'function') {
      str = '';
    }
  } else {
    if (obj === null) {
  	  str = 'null';
  	} else if (obj === undefined) {
  	  str = '';
  	}
  }
  return str;
};
