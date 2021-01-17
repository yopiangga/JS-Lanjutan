
// 1. Literal
// let mahasiswa = {
//     nama : "Alfian Prisma Yopiangga",
//     energi : 10,
//     makan : function (porsi){
//         this.energi += porsi;
//         console.log(`Selamat makan ${this.nama}`);
//     }
// }




// 2. Function Declaration

// let mahasiswa1 = Mahasiswa("Alfian Prisma Yopiangga1", 10);
// let mahasiswa2 = Mahasiswa("Alfian Prisma Yopiangga2", 20);

// function Mahasiswa(nama, energi){
//     let mahasiswa = {};

//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = function (porsi){
//         mahasiswa.energi += porsi;
//         console.log(`Selamat makan ${mahasiswa.nama}`);
//     }

//     mahasiswa.main = function (jam){
//         mahasiswa.energi -= jam;
//         console.log(`Selamat bermain ${mahasiswa.nama}`);
//     }

//     return mahasiswa;
// }


// 3. Constructor Function

// function Mahasiwa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;
    
//     this.makan = function (porsi){
//         this.energi += porsi;
//         console.log(`Selamat makan ${this.nama}`);
//     }

//     this.main = function (jam){
//         this.energi -= jam;
//         console.log(`Selamat bermain ${this.nama}`);
//     }
// }

// let mahasiswa1 = new Mahasiwa("Alfian Prisma Yopiangga1", 10);
// let mahasiswa2 = new Mahasiwa("Alfian Prisma Yopiangga2", 20);
