

// let tampilPesan = function (nama){
//     console.log(`Hallo ${nama}`);
// }

// tampilPesan("Yopiangga");


// let tampilPesan = nama => {
//     console.log(`Hallo ${nama}`);
// }

// tampilPesan("Yopiangga");

// let mahasiswa = ['Alfian', 'Prisma', 'Yopiangga'];
// let jumlahHuruf = fJumlahHuruf(mahasiswa);

// function fJumlahHuruf(mahasiswa){
//     let i;
//     let huruf = [];
//     for(i=0; i<mahasiswa.length; i++){
//         huruf[i] = mahasiswa[i].length;
//     }

//     return huruf;
// }

// console.log(jumlahHuruf);



// let mahasiswa = ['Alfian', 'Prisma', 'Yopiangga'];
// let jumlahHuruf = mahasiswa => {
//     let i;
//     let huruf = [];

//     for(i=0; i<mahasiswa.length; i++){
//         huruf[i] = mahasiswa[i].length;
//     }

//     return huruf;
// }

// console.log(jumlahHuruf(mahasiswa));


let mahasiswa = ['Alfian', 'Prisma', 'Yopiangga'];

let jumlahHuruf = mahasiswa.map(nama => ({
    nama: nama,
    jmlHuruf : nama.length
}));

console.log(jumlahHuruf);