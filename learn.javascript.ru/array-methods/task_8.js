var obj = {
    className: 'open open open menu'
}

function removeClass(obj,str) {
    var arr = obj.className.split(' ');
    for( var i=0; i<arr.length; i++){
        if (arr[i]== str) {
            arr.splice(i,1);
            i--;
        }
    }
    console.log(arr);
}

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений (нет такого класса)