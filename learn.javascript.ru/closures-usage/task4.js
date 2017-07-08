var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

// по полю name (Вася, Маша, Петя)
// users.sort(function(a, b) {
//   return a.name > b.name ? -1 : 1;
// });

// по полю age  (Маша, Вася, Петя)
// users.sort(function(a, b) {
//   return a.age > b.age ? -1 : 1;
// });

users.sort(byField('age'));

function byField(field) {
  return function(a, b) {
     return a[field] > b[field] ? 1 : -1;
  }
}

console.log(users);