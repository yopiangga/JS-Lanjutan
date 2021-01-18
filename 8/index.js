

// const Mahasiswa = function (){
//     this.nama = "Alfian Prisma Yopiangga",
//     this.usia = 18
//     this.sayHallo = function(){
//         console.log(`Hallo, nama saya ${this.nama} dan usia saya ${this.usia}`);
//     }
// }

// const yopiangga = new Mahasiswa();



// const Mahasiswa = () => {
//     this.nama = "Alfian Prisma Yopiangga",
//     this.usia = 18
//     this.sayHallo = () => {
//         console.log(`Hallo, nama saya ${this.nama} dan usia saya ${this.usia}`);
//     }
// }

// const yopiangga = new Mahasiswa();


// const mhs1 = {
//     nama : "Yopiangga",
//     usia : 18,
//     sayHallo : () => {
//         console.log(`Hallo, nama saya ${mhs1.nama} dan usia saya ${mhs1.usia}`);
//     }
// }



// const Mahasiswa = function(){
//     this.nama = "Yopiangga",
//     this.usia = 18,
//     this.sayHallo = function(){
//         console.log(`Hallo nama saya ${this.nama}, usia saya ${this.usia}`);
//     }

//     setInterval( () => {
//         console.log(this.usia += 1);
//     }, 500);

// }

// const yopiangga = new Mahasiswa();


const box = document.querySelector('.box');

box.addEventListener('click', function(){

    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);

    setTimeout( () => {
        this.classList.toggle(dua);
    }, 600);
});



