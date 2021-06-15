const arrayList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for (let i=0; i<arrayList.length; i++){
    
    if (i%3 === 0){
        document.write('Fizz' + '<br>');
    } else if (i%5 === 0){
        document.write('Buzz' + '<br>');
    } else {
        document.write(i + '<br>');
    }

    // switch (true) {

    //     case i%3 === 0:
    //         document.write('Fizz' + '<br>')
    //         break;

    //     case i%5 === 0:
    //         document.write('Buzz' + '<br>')
    //         break;

    //     default:
    //         document.write(i + '<br>');
    //         break;
    // }
    
        
}