var enemyDiv;
var allEnemy = document.getElementsByClassName("enemy");
var dyingSound = new Audio("dying.wav");
var deadEnemy;
var EnemyPos;


class Enemy {
    constructor (name) {
        this.name = name;
        this.x = Math.random()*755 +"px";
        this.y = 0;
        this.startCreate = this.createEnemy();
        this.kill = setInterval(this.killEnemy, 6000);
    }

    createEnemy = () => {
        this.create = document.createElement("div");
        this.create.className = "enemy";
        this.create.style.left = this.x;
        bgImg.appendChild(this.create);
        this.startMove = setInterval(this.moveEnemy, 10);
        //this.kill = setInterval(this.killEnemy, 6000);
        this.create.style.top = this.y + "px";
    }

    moveEnemy = () => {
            this.y += 1;
            this.create.style.top = this.y + "px";
            //console.log(this.y);
            if (this.create.offsetTop === 546) {
                while (bgImg.childNodes[2]) {
                    bgImg.removeChild(bgImg.lastChild)
                }
            }

            var heroEnemyHorDist = heroImage.getBoundingClientRect().left - this.create.getBoundingClientRect().left;
            var heroEnemyVerDist = heroImage.getBoundingClientRect().top - this.create.offsetTop;
            //console.log(heroEnemyHorDist);
            //console.log(heroEnemyVerDist);
            //console.log(this.create.offsetTop);

            if (heroEnemyHorDist < 45 
                && heroEnemyHorDist > -35
                && heroEnemyVerDist < 54) {
                this.create.className = "enemy-dead";
                clearInterval(this.startMove);
                dyingSound.play();
            }
        }

    killEnemy () {
        deadEnemy = document.getElementsByClassName("enemy-dead");
        for (var i=0;i<deadEnemy.length;i++) {
            deadEnemy[i].remove();
        }
    }
}

var newEnemy;

setInterval (() => {
    newEnemy = new Enemy('me')
    }, 3000);







