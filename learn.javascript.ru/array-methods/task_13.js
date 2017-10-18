var list = {
    value: 1,
    next: {
        value:2,
        next: {
            value:3,
            next: {
                value:4,
                next:null
            }
        }
    }
}

// function printList(list) {

//     var node = list;
//     while(node) {
//         console.log(node.value);
//         node = node.next;
//     }    
// }
//  function printList(list) {

//     var node = list;
//     console.log(node.value);
//     node = node.next;
    
//     if(node){
//         printList(node);
//     } else {
//         return false;
//     }
//  }

// function printList(list) {

//     console.log(list.value);

//     if(list.next) {
//         printList(list.next);
//     }
// }


function printReverseList(list) {

    if(list.next) {
       printReverseList(list.next);
       console.log(list.value);
    } else {
        console.log(list.value);
    }
}

printReverseList(list);
process.exit(1);