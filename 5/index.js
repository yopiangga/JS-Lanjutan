

// function init(){

//     return function (nama){
//         console.log(nama);
//     }

// }

// let panggilNama = init();
// panggilNama("Yopiangga");





// function ucapkanSalam(waktu){

//     return function (nama){
//         console.log(`Hallo ${nama}, ${waktu}`);
//     }

// }

// let pagi = ucapkanSalam("Selamat Pagi");
// let siang = ucapkanSalam("Selamat Siang");
// let malam = ucapkanSalam("Selamat Malam");

// pagi("Yopiangga");


// let add = (function (){
//     let counter = 0; 

//     return function (){
//         return ++counter;
//     }
// })()

// console.log(add());
// console.log(add());
// console.log(add());


let add = function (){
    let counter = 0; 

    function addCounter (){
        return ++counter;
    }
    return addCounter;
}

let a = add();

console.log(a());
console.log(a());
console.log(a());

