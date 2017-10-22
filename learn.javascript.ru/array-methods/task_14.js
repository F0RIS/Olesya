function unique(arr) {
    var obj = {};
    var key;

    // transform array to object for elements sort
    for(var i=0; i<arr.length; i++) {
      // created variable to define key of obj;
       key = arr[i];
       // put value from array to key of obj
       obj[key] = key;
    }

    // transform to one array all key of obj
    var keys = Object.keys(obj);
    return keys; 
  }
  
  var strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", "8-()"
  ];
  
  console.log(unique(strings)); // кришна, харе, 8-()

  process.exit(1);