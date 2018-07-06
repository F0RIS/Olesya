// error
// function Animal(name) {
//     this.name = name;
//   }
  
//   Animal.prototype.walk = function() {
//     alert( "ходит " + this.name );
//   };
  
//   function Rabbit(name) {
//     this.name = name;
//   }
//   Rabbit.prototype = Animal.prototype;
  
//   Rabbit.prototype.walk = function() {
//     alert( "прыгает! и ходит: " + this.name );
//   };

// work
function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.walk = function() {
    console.log( "ходит " + this.name );
  };
  
  function Rabbit() {
    Animal.apply(this, arguments);
  }
  Rabbit.prototype = Object.create(Animal.prototype);
  Rabbit.prototype.constructor = Rabbit;
  
  Rabbit.prototype.walk = function() {
    console.log( "прыгает! и ходит: " + this.name );
  };

  var r = new Rabbit('anton');
  console.log(r.walk());
  

