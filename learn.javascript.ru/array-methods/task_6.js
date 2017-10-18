var obj = {
	className: 'open menu'
}
// added class if it doesnt exist in obj
function addClass(obj,str) {
    var ar = obj.className.split(' ');
    var add = true;
    for(var i=0; i<ar.length; i++){
        if(ar[i] === str) {
            add = false;
        }
    }
    if (add) {
        // added class with nbsp;
        var class_name_arr = obj.className + " " + str;
        obj.className = class_name_arr;
    }
    // console.log(class_name_arr);
}

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

console.log(obj);