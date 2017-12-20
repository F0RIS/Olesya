function formatDate(date) {
    var diff = new Date() - date; // разница в миллисекундах
  
    if (diff < 1000) { 
      return 'только что';
    }
  
    var sec = Math.floor(diff / 1000); // округлить  до секунд
  
    if (sec < 60) {
      return sec + ' сек. назад';
    }
  
    var min = Math.floor(diff / 60000); // округлить  до минут
    if (min < 60) {
      return min + ' мин. назад';
    }
  
    
    var d = date;
    d = [
      '0' + d.getDate(),
      '0' + (d.getMonth() + 1),
      '' + d.getFullYear(),
      '0' + d.getHours(),
      '0' + d.getMinutes()
    ];
  
    for (var i = 0; i < d.length; i++) {
      d[i] = d[i].slice(-2);
    }
  
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
  }
  
  console.log( formatDate(new Date(new Date - 1)) ); 
  
  console.log( formatDate(new Date(new Date - 30 * 1000)) ); 
  
  console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); /
  
  console.log( formatDate(new Date(new Date - 86400 * 1000)) ); 