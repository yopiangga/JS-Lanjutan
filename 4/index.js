
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

// const methodMahasiswa = {
    
//     makan : function (porsi){
//         this.energi += porsi;
//         console.log(`Selamat makan ${this.nama}`);
//     },
    
//     main : function (jam){
//         this.energi -= jam; 
//         console.log(`Selamat bermain ${this.nama}`);
//     }
// };

// function Mahasiswa(nama, energi){
//     let mahasiswa = {};
    
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;
    
//     return mahasiswa;
// }

// let mahasiswa1 = Mahasiswa("Alfian Prisma Yopiangga1", 10);
// let mahasiswa2 = Mahasiswa("Alfian Prisma Yopiangga2", 20);

// const methodMahasiswa = {
    
//     makan : function (porsi){
//         this.energi += porsi;
//         console.log(`Selamat makan ${this.nama}`);
//     },
    
//     main : function (jam){
//         this.energi -= jam;
//         console.log(`Selamat bermain ${this.nama}`);
//     }
// };

// function Mahasiswa(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa);
    
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
    
//     return mahasiswa;
// }

// let mahasiswa1 = Mahasiswa("Alfian Prisma Yopiangga1", 10);
// let mahasiswa2 = Mahasiswa("Alfian Prisma Yopiangga2", 20);


// function Mahasiswa(nama, energi){
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (porsi){
//     this.energi += porsi;
//     return `Selamat makan ${this.nama}`;
// }

// Mahasiswa.prototype.main = function (jam){
//     this.energi -= jam;
//     return `Selamat main ${this.nama}`;
// }

// let mahasiswa1 = new Mahasiswa("Alfian Prisma Yopiangga1", 10);
// let mahasiswa2 = new Mahasiswa("Alfian Prisma Yopiangga2", 20);



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

// let mahasiswa1 = new Mahasiswa("Alfian Prisma Yopiangga1", 10);
// let mahasiswa2 = new Mahasiswa("Alfian Prisma Yopiangga2", 20);





class Mahasiswa {
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        this.energi += porsi;
        console.log(`Selamat makan ${this.nama}`); 
    }

    main(jam){
        this.energi -= jam;
        console.log(`Selamat bermain ${this.nama}`);
    }
}

let mahasiswa1 = new Mahasiswa("Alfian Prisma Yopiangga1", 10);
let mahasiswa2 = new Mahasiswa("Alfian Prisma Yopiangga2", 20);