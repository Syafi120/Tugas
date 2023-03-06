function perkali(a, b) {
    return a * b;
}
console.log(perkali(2, 2));

let kali = (a, b) => a * b;

console.log(kali(4, 2));

let zodiac = () => {
    let bln = document.getElementsByName("bln")[0].value;
    let tgl = document.getElementsByName("tgl")[0].value;
    let hasil = "invalid";
    if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
        if (bln == 1 && tgl < 32) {
            hasil = "capricorn";
            if (tgl > 21) {
                hasil = "aquarius";
            }
        }
        if (bln == 2 && tgl < 30) {
            hasil = "aquarius";
            if (tgl > 18) {
                hasil = "pisces";
            }
            
        }
        if (bln == 3 && tgl < 32) {
            hasil = "pisces";
            if (tgl > 21) {
                hasil = "aries";
            }
        }
        if (bln == 4 && tgl < 31) {
            hasil = "aries";
            if (tgl > 21 ) {
                hasil = "taurus";
            }
        }
        if (bln == 5 && tgl < 32) {
            hasil = "taurus";
            if (tgl > 20) {
                hasil = 'gemmini';
            }
        }
        if (bln == 6 && tgl < 31) {
            hasil = "gemini";
            if (tgl > 20) {
                hasil = 'cancer';
            }
        }
        if (bln == 7 && tgl < 32) {
            hasil = "cancer";
            if (tgl > 20) {
                hasil = 'leo';
            }
        }
        if (bln == 8 && tgl < 32) {
            hasil = "leo";
            if (tgl > 20) {
                hasil = 'virgo';
            }
        }
        if (bln == 9 && tgl < 31) {
            hasil = "virgo";
            if (tgl > 20) {
                hasil = 'libra';
            } 
        }
        if (bln == 10&& tgl < 32) {
            hasil = "libra";
            if (tgl > 20) {
                hasil = 'scorpio';
            }
        }
        if (bln == 11 && tgl < 31) {
            hasil = "scorpio";
            if (tgl > 20) {
                hasil = 'sagitarius';
            }
        }
        if (bln == 12 && tgl < 32) {
            hasil = "sagitarius";
            if (tgl > 20) {
                hasil = 'capricorn'
            } 
        }
    }
    document.querySelector('#belajar').innerHTML = hasil;
}

console.log(zodiac(1, 4));

let lulus = () => {
    let nilai = document.getElementById('nilai').value;
    hasil = nilai > 0 && nilai <= 100 ? nilai > 80 ? "lulus" : "gagal" : "invalid";
    document.querySelector('#belajar').innerHTML = hasil;
}


console.log(lulus(89));

let convert = () => {
    let angka = document.getElementById("num").value;
    let terbilang = (angka) => {

        var bilne=["","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas"];
        if(angka < 12){
            return bilne[angka];
        }else if(angka < 20){
            return terbilang(angka-10)+" belas";
        }else if(angka < 100){
            return terbilang(Math.floor(angka/10))+" puluh "+terbilang(angka%10);
        }else if(angka < 200){
            return "seratus "+terbilang(angka-100);
        }else if(angka < 1000){
            return terbilang(Math.floor(angka/100))+" ratus "+terbilang(angka%100);
        }else if(angka < 2000){
            return "seribu "+terbilang(angka-1000);
        }else if(angka < 1000000){
            return terbilang(Math.floor(angka/1000))+" ribu "+terbilang(angka%1000);
        }else if(angka < 1000000000){
            return terbilang(Math.floor(angka/1000000))+" juta "+terbilang(angka%1000000);
        }else if(angka < 1000000000000){
            return terbilang(Math.floor(angka/1000000000))+" milyar "+terbilang(angka%1000000000);
        }else if(angka < 1000000000000000){
            return terbilang(Math.floor(angka/1000000000000))+" trilyun "+terbilang(angka%1000000000000);
        }    
    }

    document.querySelector('#belajar').innerHTML = terbilang(angka);
    
}

let prima = () => {
    let num = document.getElementById("number").value;
    let bagi = 0;
    for (let i = 1; i < num; i++) {
        num % i == 0 ? bagi++ : null;
    }
    bagi == 1 ? document.querySelector('#belajar').innerHTML = "Prima" : document.querySelector('#belajar').innerHTML = "Bukan Prima";
}