

var heroImage = document.getElementById("hero");

var bgImg = document.getElementById("bg");

var bgSt = window.getComputedStyle(bgImg);

var bgMarg = bgSt.marginLeft.split('p')[0];

var pos = heroImage.getBoundingClientRect().left - bgMarg;

document.addEventListener("keydown", function(e) {
    if (0<pos && pos<765){
        if (e.keyCode === 37) {
            heroImage.className = "left-face";
            // console.log(pos);
            pos -= 10;
            if (pos < 0){
                pos = 0.1;
            }
            heroImage.style.left = pos + "px";
        }
        else if (e.keyCode === 39) {
            heroImage.className = "right-face";
            // console.log(pos);
            pos += 10;
            if (pos > 765) {
                pos = 764.9;
            }
            heroImage.style.left = pos + "px";
        }
    }
})

document.addEventListener("keyup", function() {
    heroImage.className = "front-face";
})







class Hero {
  
}