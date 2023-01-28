function setBackgroundMoving() {
    setTimeout(function () {

        // setting background berjalan

        var bg = document.getElementById('main');
        bg.style.backgroundPositionY = (parseInt(bg.style.backgroundPositionY.replace('px','')) + 1) + 'px';

        // update score

        document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1;

        // panggil recursive setbackgroundmoving
        setBackgroundMoving();
    },5);

}
// inisialisasi background berjalan
setBackgroundMoving();

// setting meteor

function setMeteorMoving() {
    var meteor = document.getElementById('meteor'),
        plane  = document.getElementById('plane');

        setTimeout(function() {
            
            meteor.style.marginTop = (parseInt(meteor.style.marginTop.replace('px','')) + 1) + 'px';

            if (parseInt(meteor.style.marginTop.replace('px','') > 500)) {
                meteor.style.marginLeft = (Math.floor(Math.random() * 250)) + 'px';
                meteor.style.marginTop = "-100px";
            }

            // gerakan meteronya lagi

            setMeteorMoving();

        },1);
}
// inisialisasi meteor
setMeteorMoving();


window.addEventListener('keydown', function (e) {
    var plane = document.getElementById('plane'),
        left = parseInt(plane.style.marginLeft.replace('px', '')),
        top = parseInt(plane.style.marginTop.replace('px', ''));
    /*
        W = 87
        A = 65
        S = 83
        D = 68
    */
   if (e.keyCode == 65) {
    if (left > 0) {
        plane.style.marginLeft = (left - 10) + 'px';
    }
}
   if (e.keyCode == 87) {
    if (top > 0) {
        plane.style.marginTop = (top - 10) + 'px';
    }
}
   if (e.keyCode == 68) {
    if (left < 340) {
        plane.style.marginLeft = (left + 10) + 'px';
    }
}
   if (e.keyCode == 83) {
    if (top < 400) {
        plane.style.marginTop = (top + 10) + 'px';
    }
}   
   
});