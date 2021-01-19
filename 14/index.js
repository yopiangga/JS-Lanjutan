
// const nama = 'Yopiangga';
// const umur = 18;

// function coba(strings, ...values){
//     let result = '';
//     strings.forEach(function(e, i){
//         result += `${e}${values[i] || ''}`;
//     })
//     return result;

//     return strings.reduce(function(result, str, i){
//         return `${result}${str}${values[i] || ''}`;
//     }, '')
// }

// const str = coba`Hallo, nama saya ${nama}, saya ${umur} tahun`;
// console.log(str);



const nama = 'Yopiangga';
const umur = 18;
const email = 'yopigambyok@gmail.com';

function highlight(strings, ...values){
    // let result = '';
    // strings.forEach(function(e, i){
    //     result += `${e}${values[i] || ''}`;
    // })
    // return result;

    return strings.reduce(function(result, str, i){
        return `${result}${str}<span class="hl">${values[i] || ''}</span>`;
    }, '')
}

const str = highlight`Hallo, nama saya ${nama}, saya ${umur} tahun, email saya adalah ${email}`;
console.log(str);


document.body.innerHTML = str;