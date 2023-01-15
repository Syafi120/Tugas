
zodiak(2, 10);
function zodiak(bln,tgl) {
    let hasil = "salah";
    if (bln > 0 && bln < 13 && tgl > 0 && tgl < 32) {
        hasil = "zodiak belum dibuat";

        if (bln == 1) {
            hasil = "capricon";
            if (tgl > 21 && tgl < 32) {
                hasil = "aquarius";
            }
        }

        if (bln == 2) {
            hasil = "aquarius";
            if (tgl > 18 && tgl < 30) {
                hasil = "pisces";
            }
        }

        if (bln == 4) {
            hasil = "aries";
            if (tgl > 18 && tgl < 31) {
                hasil = "taurus";
            }
        }
    }
    console.log(hasil);
}
//==================================================================================================================
lulus(75);
function lulus(nilai) {

    let kkm = 75;
    let batas = 100;
    let batwa = 0;

    if (nilai <= batas && nilai >= batwa ) {

        if (nilai >= kkm) {
            input = "lulus";
        }else{
            input = "tidak lulus"
        }
        
    }else{
        input = "dilaur batas nilai";
    }
    console.log(input);
}
//==============================================================================================================
function terbilang(angka) {
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
//===============================================================================================================
function prima(num) {
    
        let pembagi = 0;
    for (let i = 0; i <= num; i++) {
        if (num % i == 0) {
            pembagi++;
        }
    }
    if (pembagi == 2) {
        return "termasuk bilangan prima";
    } else {
        return "tidak termasuk";
    }

    //=======================(eror)===========//
    // for (let i = 0; i < 8; i+1) {
    //     console.log(bilangan.i);

    //     if (bilangan < 5 && bilangan < 6) {
    //         jadi = "termasuk bilangan";
    //     } else {
    //         jadi = "tidak termasuk";
    //     }
    // }
        // console.log(bilangan);
//========================(cacat)===================//
    // if (bilangan >= 1 && bilangan <= 8) {
    //     if (bilangan = 2) {
    //         jadi = "termasuk bilangan";
    //     }
    //     if (bilangan = 3) {
    //         jadi = "termasuk bilangan";
    //     }
    //     if (bilangan = 5) {
    //         jadi = "termasuk bilangan";
    //     }
    //     if (bilangan = 7) {
    //         jadi = "termasuk bilangan";
    //     }
    // }else{
    //     jadi = "tidak termasuk";
    // }

    // console.log(jadi)
}
console.log(terbilang(12));
console.log(prima(7));