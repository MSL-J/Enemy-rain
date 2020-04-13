


var enemyDiv;

setInterval (function() {
    enemyDiv = document.createElement("div");

    enemyDiv.style.left = Math.random()*755 +"px";

    bgImg.appendChild(enemyDiv);


    enemyDiv.className = "enemy";


}, 3000);



var allEnemy;

var EnemyPos;

var dyingSound;


setInterval (function () {
    allEnemy = document.getElementsByClassName("enemy");

    for (var i=0;i<allEnemy.length;i++){
        EnemyPos = allEnemy[i].getBoundingClientRect().top;
        
        EnemyPos += 1;

        if (EnemyPos === 546) {
            while (bgImg.childNodes[2]) {
                bgImg.removeChild(bgImg.lastChild)
            }
        }

        allEnemy[i].style.top = EnemyPos + "px";

        var heroEnemyHorDist = heroImage.getBoundingClientRect().left - allEnemy[i].getBoundingClientRect().left;

        var heroEnemyVerDist = heroImage.getBoundingClientRect().top - allEnemy[i].getBoundingClientRect().top;


        if (heroEnemyHorDist < 45 
            && heroEnemyHorDist > -35
            && heroEnemyVerDist < 54) {
            allEnemy[i].className = "enemy-dead";
            dyingSound = new Audio("dying.wav");
            dyingSound.play();
        }
    }
}, 10)





var deadEnemy;

setInterval (function () {
    deadEnemy = document.getElementsByClassName("enemy-dead");

    for (var i=0;i<deadEnemy.length;i++) {
        deadEnemy[i].remove();
    }
}, 6000)






class Enemy {
  
}