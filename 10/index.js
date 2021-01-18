

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// const angkaFilter = [];

// for(let i=0; i<angka.length; i++){
//     if(angka[i] >= 3){
//         angkaFilter.push(angka[i]);
//     }
// }

// console.log(angkaFilter);


// const newAngka = angka.filter(function(a){
//     if(a >= 3){
//         return a;
//     }
// })

// console.log(newAngka);

// const newAngka = angka.map(function(a){
//     return a*2;
// })

// console.log(newAngka);


// const newAngka = angka.reduce(function(total, a){
//     return total += a;
// })

// console.log(newAngka);


const hasil = angka.filter(function(a){
    return a>5;
}).map(function(a){
    return a * 3;
}).reduce(function(total, a){
    return total += a;
})

console.log(hasil);