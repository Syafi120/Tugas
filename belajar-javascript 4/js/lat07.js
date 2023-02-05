let bil = [1,3,5,9];

function kali(num) {
    return num * 2;
}
console.log(kali(2));


let hasil = bil.map(num => num + 2);


console.log(hasil);

document.querySelector("#tampil").innerHTML = hasil;

// let out = `<tbody>`;

// hasil.forEach(Element => {
//     out += `<tr><td>${Element}</td></tr>`;
// });

// out += `</tbody>`;

// document.querySelector("#tabel").innerHTML = out;

let siswa = [
    {nama : "yanto", sekolah : "SMKN 2 Buduran" , kelas : "11 RPL"},
    {nama : "Faza", sekolah : "SMKN 2 Buduran", kelas : "11 RPL"},
    {nama : "adit", sekolah : "SMKN 2 Buduran", Kelas : "11 RPL"}
];

console.log(siswa);

let out = `
    <thead>
        <tr>
            <th>nama</th>
            <th>sekolah</th>
            <th>kelas</th>
        </tr>
    </thead>
    <tbody>`;
siswa.map(sis => out +=`
        <tr>
            <td>${sis.nama}</td>
            <td>${sis.sekolah}</td>
            <td>${sis.kelas}</td>
        <tr/>`
)
out +=`<tbody/>`

document.querySelector("#tabel").innerHTML = out;

// function sis(item) {
//     console.log(item.nama,item.sekolah,item.kelas);
// }

// ajax jquery

