function makeBuffer() { /* ваш код */ 
  
  var buff = "";
  function buffer(str) {
    
    // console.log(arguments);
    if (!str && (str!=0)) {
      return buff;
    }
    
    buff+=str;
  }

  buffer.clear = function() {
    buff = "";
}

return buffer;
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
console.log( buffer() )
buffer.clear();
// получить текущее значение
console.log( buffer() ); // Замыкания Использовать Нужно!

