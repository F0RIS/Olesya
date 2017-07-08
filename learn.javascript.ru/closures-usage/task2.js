function makeBuffer() { /* ваш код */ 
  
  var buff = "";
  return function(str) {
    
    console.log(arguments);
    if (!str && (str!=0)) {
      return buff;
    }
    
    buff+=str;
    
  }
}

var buffer = makeBuffer();

buffer();
// добавить значения к буферу
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');
buffer(0);
buffer(1);
buffer(0);

// получить текущее значение
console.log( buffer() ); // Замыкания Использовать Нужно!

