const field = document.getElementById("bg");
const startBtn = document.getElementById("startBtn");
const hero = document.createElement("div");
const score = document.createElement("div");
const ghostAudio = new Audio('audio.wav');

class Ghost {
  constructor() {
    this.spawnGhost = document.createElement("div");
    this.x = Math.floor(Math.random() * (750 - 0 + 1) + 0);
    this.speed = Math.floor(Math.random() * (15 - 5 + 1) + 5);
    this.y = 0;
    //유령 설정
    this.spawnGhost.className = "ghost live";
    this.spawnGhost.style.left = `${this.x}px`;
    field.appendChild(this.spawnGhost);
    this.startSpawn = setInterval(this.move, 100);
  }

  move = () => {
    if (this.y <= 490) {
      this.y += this.speed;
      this.spawnGhost.style.top = `${this.y}px`;
    } else {
      if (this.x > heroHandler.hit[0] && this.x < heroHandler.hit[1]) {
        heroHandler.scores += 10;
        score.innerText = `${heroHandler.scores}점`;
        this.spawnGhost.classList = "ghost die";
        ghostAudio.play();
        clearInterval(this.startSpawn);
        setTimeout(() => {
          field.removeChild(this.spawnGhost);
        }, 2000);
      } else {
        if (this.y < 550) {
          this.y += 10;
          this.spawnGhost.style.top = `${this.y}px`;
        } else {
          heroHandler.scores -= 10;
          score.innerText = `${heroHandler.scores}점`;
          clearInterval(this.startSpawn);
          field.removeChild(this.spawnGhost);
        }
      }
    }
  };
}

class Hero {
  constructor() {
    this.x = 382.5;
    this.scores = 0;
    this.speed = 20;
    this.hit = [];
  }

  move = (e) => {
    if (e.key === "ArrowLeft") {
      if (this.x <= 10) {
        return;
      }
      hero.className = "hero left";
      this.x += -this.speed;
      this.hit = [this.x - 35, this.x + 35];
      hero.style.left = `${this.x}px`;
    } else if (e.key === "ArrowRight") {
      if (this.x >= 760) {
        return;
      }
      hero.className = "hero right";
      this.x += this.speed;
      this.hit = [this.x - 35, this.x + 35];
      hero.style.left = `${this.x}px`;
    }
  };

  front() {
    hero.className = "hero front";
  }

  heroInit = () => {
    hero.className = "hero front";
    hero.style.left = `${this.x}px`;
    score.className = "score";
    score.innerText = `${this.scores}점`;
    field.appendChild(hero);
    field.appendChild(score);
    startBtn.innerText = "START";
    startBtn.style.backgroundColor = "blue";
  };
}

let spnG;
const startStop = () => {
  // START, STOP Btn
  if (startBtn.innerText === "START") {
    spnG = setInterval(() => {
      let a = new Ghost();
    }, 2000); // let a 를 넣어줘야 해?
    heroHandler.heroInit();
    startBtn.innerText = "STOP";
    startBtn.style.backgroundColor = "red";
    scores = 0;
  } else {
    clearInterval(spnG);
    startBtn.innerText = "START";
    startBtn.style.backgroundColor = "blue";
  }
};

//상시

const heroHandler = new Hero();
heroHandler.heroInit();

document.addEventListener("keydown", heroHandler.move);
document.addEventListener("keyup", heroHandler.front);
startBtn.addEventListener("click", startStop);