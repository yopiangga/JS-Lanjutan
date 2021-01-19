

// function kalkulasi(a, b){
//     return [a+b, a-b, a*b];
// }

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];

// const [tambah, kurang, kali, bagi = 'Tidak ada'] = kalkulasi(2, 3);


// function kalkulasi(a, b){
//     return {
//         tambah: a+b,
//         kurang: a-b,
//         kali: a*b,
//         bagi: a/b
//     }
// }


// const {kali, bagi, kurang, tambah} = kalkulasi(2, 3);

// console.log(bagi);



// const mhs1 = {
//     nama: "Yopiangga",
//     umur: 18
// }

// function mhsCetak(mhs){
//     return `Hallo nama saya ${mhs.nama}, umur saya ${mhs.umur}`;
// }

// console.log(mhsCetak(mhs1));
// mhsCetak(mhs1);





const mhs1 = {
    nama: "Yopiangga",
    umur: 18,
    nilai : {
        tugas: 80,
        uts: 85,
        uas: 75
    }
}

function mhsCetak({nama, umur, nilai:{tugas, uts, uas}}){
    return `Hallo nama saya ${nama}, umur saya ${umur}, dan nilai uas saya adalah ${uas}`;
}

console.log(mhsCetak(mhs1));