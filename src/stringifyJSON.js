// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
	if (obj) {
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
	      	str += stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]);
	        if (count < numOfProps) {
	          str += ',';
	        }
	      }
	      str += '}';
	    } else if (typeof(obj) === 'string') {
	    	// str = '"' + obj + '"';
	    	str = "'" + obj + "'";
	    } else if (typeof(obj) === 'boolean') {
	    	str = obj.toString();
	    } else if (typeof(obj) === 'number') {
	    	str = obj.toString();
	    }
	  } else {
	  	str = 'null';
	  }
    return str;
};
