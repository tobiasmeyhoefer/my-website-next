// let x = 0, y = 0, dirX = 1, dirY = 1;
const speed = 1

// let dvd = document.getElementById("dvd");

let infos = document.getElementsByClassName("bouncing_info")
let box = document.getElementById("box")

//array mit allen 3 Dingern...
const positions = [
  {
    x: 0,
    y: 0,
    dirX: 1,
    dirY: 1,
  },
  {
    x: 60,
    y: 40,
    dirX: 1,
    dirY: 1,
  },
  {
    x: 120,
    y: 90,
    dirX: 1,
    dirY: 1,
  },
]

// const dvdWidth = dvd.clientWidth;
// const dvdHeight = dvd.clientHeight;
const boxWidth = box.clientWidth
const boxHeight = box.clientHeight

function animate() {
  //für jede info
  for (let i = 0; i < infos.length; i++) {
    //berechnung von höhe und breite
    const width = infos[i].clientWidth;
    const height = infos[i].clientHeight;

    if (positions[i].y + height >= boxHeight || positions[i].y < 0) {
      positions[i].dirY *= -1
      //hier funktion callen die den text dann anschließend ändert
      infos[i].innerHTML = eigenschaften[randomIntFromInterval(0, 5)]
    }
    if (positions[i].x + width >= boxWidth || positions[i].x < 0) {
      positions[i].dirX *= -1
    }

    positions[i].x += positions[i].dirX * speed
    positions[i].y += positions[i].dirY * speed
    infos[i].style.left = positions[i].x + "px"
    infos[i].style.top = positions[i].y + "px"
  }

  window.requestAnimationFrame(animate)
}

window.requestAnimationFrame(animate)

const eigenschaften = [
  "21 years old",
  "track and field athlete",
  "born in berlin",
  "i like kung fu panda",
  "cars 2 is better then cars 1",
  "i hate oliven",
]

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
