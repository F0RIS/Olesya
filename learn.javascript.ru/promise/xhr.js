function httpGet(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        var error = new Error(this.statusText);
        error.code = status.code;
        reject(error);
      }
    };
    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };
    xhr.send();
  });
}

httpGet(
  "https://api.themoviedb.org/3/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&primary_release_date.gte=2014-09-15&primary_release_date.lte=2017-10-22"
)
  .then(response => console.log(response), error => console.log(error))
  .then(response => console.log(response), error => console.log(error));

// Promise.all([
//     httpGet('https://api.themoviedb.org/3/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&primary_release_date.gte=2014-09-15&primary_release_date.lte=2017-10-22'),
//     httpGet('https://api.themoviedb.org/3/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&primary_release_date.gte=2014-09-15&primary_release_date.lte=2017-10-22')
//   ]).then(results => {
//     console.log(results);
//   });

// Загрузить массив последовательно
("use strict");

let urls = [
  "https://api.themoviedb.org/3/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&primary_release_date.gte=2014-09-15&primary_release_date.lte=2017-10-22",
  "https://api.themoviedb.org/3/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&primary_release_date.gte=2014-09-15&primary_release_date.lte=2017-10-22"
];

let results = [];
let chain = Promise.resolve();

urls.forEach(function(url) {
  chain = chain.then(() => httpGet(url)).then(result => results.push(result));
});

chain.then(() => console.log(console.log(results)));
