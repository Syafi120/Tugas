// document.querySelector("#paragraf").innerHTML = "Saya Belajar javascript";
// document.querySelector("#content").innerHTML = "<h1>Ganti Isi</h1>";

let tanggal = 22;
let bulan = 9;
if (tanggal > 0 && tanggal < 32 && bulan > 0 && bulan < 13) {
    if (tanggal > 19 && tanggal < 19 && bulan > 0 && bulan < 3) {
        hasil = "aquarius";
    }

    if (tanggal > 18 && tanggal < 21 && bulan > 1 && bulan > 4) {
        hasil = "pisces";
    }

    if (tanggal > 20 && tanggal < 20 && bulan > 2 && bulan < 5) {
        hasil = "aries"
    }

    if (bulan > 3 && bulan < 6) {
        if (tanggal > 19 && tanggal < 21) {
            hasil = "taurus";
        }
    }

    if (bulan > 4 && bulan < 7) {
        if (tanggal > 20 && tanggal < 21) {
            hasil = "gemini";
        }
    }

    if (bulan > 5 && bulan < 8) {
        if (tanggal > 20 && tanggal < 23) {
            hasil = "cancer";
        }
    }

    if (bulan > 6 && bulan < 9 ) {
        if (tanggal > 22 && tanggal < 23) {
            hasil = "leo";
        }
    }

    if (bulan > 7 && bulan < 10) {
        if (tanggal > 22 && tanggal < 23) {
            hasil = "virgo";
        }
    }

    if ( bulan > 8 && bulan < 11) {
        if (tanggal > 22 && tanggal < 23) {
            hasil = "libra";
        }
    }
}
    // console.log("hasil");

document.querySelector("#content").innerHTML = "<h1>" + hasil + "</h1>";
