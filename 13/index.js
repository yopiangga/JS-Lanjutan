
// const mhs = {
//     nama : 'Yopiangga',
//     umur : 33,
//     nrp  : 3120600001,
//     email: 'yopigambyok@gmail.com'
// };


// const el = `<div class="mhs">
// <h2>${mhs.nama}</h2>
// <span class="nrp">${mhs.nrp}</span>
// </div>`;

// document.body.innerHTML = el;



// const mhs = [
//     {
//         nama: 'Yopiangga1',
//         email: 'yopigambyok@gmail.com1'
//     },
//     {
//         nama: 'Yopiangga2',
//         email: 'yopigambyok@gmail.com2'
//     }, 
//     {
//         nama: 'Yopiangga3',
//         email: 'yopigambyok@gmail.com3'
//     }
// ];


// const el = `<div class="mhs">

//     ${mhs.map(function(m){
//         return `<ul>
        
//         <li>${m.nama}</li>
//         <li>${m.email}</li>

//         </ul`
//     }).join('')}

// </div>`


// const lagu = {
//     judul : 'Tetap Dalam Jiwa',
//     penyanyi : 'Isyana Saraswati',
//     feet : 'Yopiangga'
// }

// const el = `<div class="lagu">

//     <ul>
//         <li>${lagu.judul}</li>
//         <li>${lagu.penyanyi} ${lagu.feet ? `(Feet. ${lagu.feet})` : ""}</li>

//     </ul>

// </div>`


const mhs = {
    nama: 'Yopiangga',
    semester: 5,
    mataKuliah: [
        'Praktikum Konsep Pemrograman',
        'Logika Algoritma',
        'Workshop Desain Web',
        'Konsep Teknologi Informasi'
    ]
}

function cetakMataKuliah(mataKuliah){
    return  `<ol>
    
    ${mataKuliah.map(function(mK){
        return `<li>${mK}</li>`
    }).join('') }
    
    </ol>`
}


const el = `<div class="mhs">

    <h2>${mhs.nama}</h2>
    <span>Semester ${mhs.semester}</span>
    <h4>Mata Kuliah :</h4>
    
    ${cetakMataKuliah(mhs.mataKuliah)}    

</div>`

document.body.innerHTML = el;