function Clock(options) {
    this.template = options.template;
}


Clock.prototype.render = function () {
  let date = new Date();

  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let res = this.template.replace('h', hours).replace('m', min).replace('s', sec);  
  
  console.log(res);
}

Clock.prototype.start = function () {
    this.timer = setInterval(function() {
        this.render();
    }.bind(this), 1000)    
}

Clock.prototype.stop = function () {
    clearInterval(this.timer);
}

var clock = new Clock({
    template: 'h:m:s'
  });

  clock.start();

  setTimeout(function() {
      clock.stop()
  }, 5000);
