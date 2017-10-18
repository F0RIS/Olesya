var obj = {
    className: 'open open open menu'
}

// deleted className if it exist in obj
function removeClass(obj,str) {
    //maked array from str and divided by nbsp;
    var arr = obj.className.split(' ');
    for( var i=0; i<arr.length; i++) {
        //asked if element in arr equal className
        if (arr[i]== str) {
            // deleted  from position=i 1=className
            arr.splice(i,1);
            //pos of next element changed(bcs we deleted prev element = -1),
            // but counter isn't => we need to shift it too;
            i--;
        }
    }
    console.log(arr);
}

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)