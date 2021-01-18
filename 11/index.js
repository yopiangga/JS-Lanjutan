
let videos = Array.from(document.querySelectorAll('[data-duration]'));

let jsLanjut =  videos.filter(function(video){
    return video.textContent.includes("JAVASCRIPT LANJUTAN");
})

.map(function(item){
    return item.dataset.duration;
})

.map(function(waktu){
    const parts = waktu.split(':').map(function(part){
        return parseFloat(part);
    });
    return (parts[0] * 60) + parts[1];
})

.reduce(function(total, durasi){
    return total += durasi;
});


const jam = Math.floor(jsLanjut / 3660);
jsLanjut = jsLanjut - (jam * 3600);
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - (menit * 60);

const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;


const jumlahVideo = (videos.filter(function(video){
    return video.textContent.includes("JAVASCRIPT LANJUTAN");
})).length;

const pJumlahVideo = document.querySelector('.jumlah-video');
pJumlahVideo.textContent = `${jumlahVideo} Video`;

