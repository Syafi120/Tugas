let buah = [
    "jambu",
    "apel",
    "mangga",
    "jeruk",
    "duren",
];
console.log(buah);
document.querySelector("#tampil").innerHTML = buah[0];

// buah.forEach({
    
// });

// function kali(a,b) {
//     return a * b;
// }

// function tampil(a) {
//     return a;
// }

// console.log(kali(2,3));
// console.log(tampil(2));

let kali  = (a,b) => {
    console.log((a*b));
}

let tampil = (a)=>{
    console.log(a);
}
kali(2,5);
tampil(2);

// let siswa = {
//     nama : ["syafi", "adit", "faza", "eka"],
//     sekolah : "SMKN 2 Buduran",
//     kelas : "11 RPL"
// }
// console.log(siswa);
// console.log(siswa.nama);

let siswa = '("identitas" : [' +
'{"nama" : "faza", "syafi", "adit"}' +
'{"sekolah" : "SMKN 2 BUDURAN"}'+
'{"kelas" : "11 RPL"}'+
'])';
const obj = JSON parse(siswa);
console.log(obj);