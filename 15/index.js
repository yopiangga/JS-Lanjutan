

// const perkenalan = ['Hallo', 'nama', 'saya', 'Yopiangga'];

// const [salam, satu, dua, nama] = perkenalan;

// const [salam, , , nama] = perkenalan;


// let a = 1;
// let b = 2;

// [a, b] = [b, a];


// function coba(){
//     return [1, 2];
// }


// const [a, b] = coba();

// const [a, ...values] = [1, 2, 3, 4, 5];

// console.log(a);


// const mhs = {
//     nama : 'yopiangga',
//     umur : 18
// }


// const {nama, umur} = mhs;




// ({nama, umur} = {
//     nama : 'yopiangga',
//     umur : 18
// });



// const mhs = {
//     nama : 'yopiangga',
//     umur : 18
// }


// const {nama: a, umur: b} = mhs;



// const mhs = {
//     nama : 'yopiangga',
//     umur : 18,
//     // email :  'yopiangga@gmail.com'
// }


// const {nama: a, umur: b, email = 'email@gmail.com'} = mhs;


// const mhs = {
//     nama : 'yopiangga',
//     umur : 18,
//     // email :  'yopiangga@gmail.com'
// }


// const {nama, ...values} = mhs;




const mhs = {
    id : 123,
    nama : 'yopiangga',
    umur : 18,
    email :  'yopiangga@gmail.com'
}


function getIdMhs({id}){
    return id;
}

console.log(getIdMhs(mhs));