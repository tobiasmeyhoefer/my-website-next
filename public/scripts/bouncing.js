const speed = 1;
let infos = document.getElementsByClassName("bouncing_info");
let box = document.getElementById("box");

let firstRender = true;

//array mit allen 3 Dingern...
const positions = [
  {
    x: 300,
    y: 100,
    dirX: -1,
    dirY: 1,
    firstRender: true, // Hinzugefügt für jedes Element
  },
  {
    x: 800,
    y: 0,
    dirX: -1,
    dirY: -1,
    firstRender: true, // Hinzugefügt für jedes Element
  },
  {
    x: 600,
    y: 200,
    dirX: 1,
    dirY: 1,
    firstRender: true, // Hinzugefügt für jedes Element
  },
];

let boxWidth = box.clientWidth;
let boxHeight = box.clientHeight;

function animate() {
  //für jede info
  for (let i = 0; i < infos.length; i++) {
    //berechnung von höhe und breite
    const width = infos[i].clientWidth;
    const height = infos[i].clientHeight;

    if (positions[i].y + height >= boxHeight || positions[i].y < 0) {
      positions[i].dirY *= -1;
      changeText(i)
    }
    if (positions[i].x + width >= boxWidth || positions[i].x < 0) {
      positions[i].dirX *= -1;
      //hier funktion callen die den text dann anschließend ändert
      changeText(i)
    }

    if (positions[i].firstRender) {
      let le = randomIntFromInterval(0, boxWidth - infos[i].clientWidth);
      let to = randomIntFromInterval(0, boxHeight - infos[i].clientHeight);
      infos[i].style.left = le + "px";
      infos[i].style.top = to + "px";
      positions[i].x = le;
      positions[i].y = to;
      positions[i].firstRender = false;
    } else {
      positions[i].x += positions[i].dirX * speed;
      positions[i].y += positions[i].dirY * speed;
      infos[i].style.left = positions[i].x + "px";
      infos[i].style.top = positions[i].y + "px";
    }
  }

  animationId = window.requestAnimationFrame(animate);
}

let resizeTimer;
onresize = () => {
  window.cancelAnimationFrame(animationId);
  changeInfosVisibility(false)
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    //wenn resizing abgeschlossen ist:
    //neue Zufallswerte ermitteln und animation starten
    changeInfosVisibility(true) 
    randomizeStartPosition()
    animationId = window.requestAnimationFrame(animate);
  }, 250);
};
let animationId = window.requestAnimationFrame(animate);

//hier die eigenschaften die man auf der Seite dann schlussendlich sieht...
const eigenschaften = [
  "21 years old",
  "track and field athlete",
  "born in berlin",
  "based in berlin",
  "i like kung fu panda",
  "cars 2 is the best cars",
  "i hate olives",
  "18.09.2002 🎂",
  "I'm giving every music type a chance",
  "I try to live very health",
  "passion for aesthetics"
];

function randomizeStartPosition() {
  box = document.getElementById("box");
  boxWidth = box.clientWidth;
  for (let i = 0; i < infos.length; i++) {
    let le = randomIntFromInterval(0, boxWidth - infos[i].clientWidth);
    let to = randomIntFromInterval(0, boxHeight - infos[i].clientHeight);
    infos[i].style.left = le + "px";
    infos[i].style.top = to + "px";
    positions[i].x = le;
    positions[i].y = to;
    positions[i].firstRender = false;
  }
}

function changeInfosVisibility(visibility) {
  for (let i = 0; i < infos.length; i++) {
    infos[i].style.opacity = visibility ? "1" : "0";
  }
}

//hilfsfunktion
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function changeText(i) {
  while (true) {
    let characteristic = eigenschaften[randomIntFromInterval(0, 5)];
    if (characteristic != infos[i].innerHTML) {
      infos[i].innerHTML = characteristic;
      break;
    }
  }
}
