//  task1
function sumArg() {
   arguments.reduce = [].reduce;
   return arguments.reduce(function(a,b){
        return a + b;
    })
}
function sumArg2() {
    return [].reduce.call(arguments, function(a, b){
        return a + b;
    })
}
 console.log(sumArg(1,2,3,5));
//  console.log(sumArg2(1,2,3,5));

//  task1

function applyAll(func) {   
    // console.log( arguments, [].slice.call(arguments, 1));
    return func.apply(this, [].slice.call(arguments, 1));
}
console.log(applyAll(sumArg, 1, 2, 5));


var calculator = {
   read: function() {
    this.num1 = prompt('enter number', 5);
    this.num2 = prompt('enter number', 5);
    },
    sum: function() {
        return  parseInt(this.num1) + +this.num2;
    },
    mul: function() {
        return this.num1 * this.num2;
    }
}


calculator.read();
console.log(calculator.sum() );
console.log(calculator.mul() );


//  bind
"use strict";

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) { 
    console.log(this);
      
    ok();
     }
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  loginOk: function() {
    console.log( this.login + ' вошёл в сайт' );
  },

  loginFail: function() {
    console.log( this.login + ': ошибка входа' );
  },

  checkPassword: function() {
    ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
  }
};

user.checkPassword();


//  closure
"use strict";

function ask(question, answer, ok, fail) {
var result = prompt(question, '');
if (result.toLowerCase() == answer.toLowerCase()) { 
    
    ok();
    }
else fail();
}

var user = {
login: 'Василий',
password: '12345',

loginOk: function() {
    console.log( this.login + ' вошёл в сайт' );
},

loginFail: function() {
    console.log( this.login + ': ошибка входа' );
},

checkPassword: function() {
    let self = this;
    ask("Ваш пароль?", self.password, function() { self.loginOk(); } , function() { self.loginFail});
}
};

user.checkPassword();




// closure for universal ask function
"use strict";

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  // метод для вызова из ask
  loginDone: function(result) {
    alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
  },

  checkPassword: function() {
      let _this = this;
    ask("Ваш пароль?", this.password,
      function() {
        _this.loginDone(true);
      },
      function() {
        _this.loginDone(false);
      }
    );
  }
};

var vasya = user;
user = null;
vasya.checkPassword();




// bind for universal ask function
"use strict";

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  // метод для вызова из ask
  loginDone: function(result) {
    alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
  },

  checkPassword: function() {
    ask("Ваш пароль?", this.password,

        this.loginDone.bind(this, true),

        this.loginDone.bind(this, false)
      
    );
  }
};

var vasya = user;
user = null;
vasya.checkPassword();



// // currying
function mul(a,b) {
    return a*b;
}

var double = mul.bind(null, 2);

console.log(double(3));

var obj = {

}

var arr = ["id1", "id2", "id3"];

for( let i = 0; i<arr.length; i++) {
    obj[arr[i]] = {};
}

console.log(obj)

var o = {f:"fval"}
 

var o2 = {
   [o.f]: 1
 };


console.log(o2) // should be o2 = {fval:1}
