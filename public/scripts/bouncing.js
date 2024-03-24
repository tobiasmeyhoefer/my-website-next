// let x = 0, y = 0, dirX = 1, dirY = 1;
const speed = 1

// let dvd = document.getElementById("dvd");

let infos = document.getElementsByClassName("bouncing_info")
let box = document.getElementById("box")

let firstRender = true

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
]

// const dvdWidth = dvd.clientWidth;
// const dvdHeight = dvd.clientHeight;
const boxWidth = box.clientWidth
const boxHeight = box.clientHeight

function animate() {
  // const boxWidth = box.clientWidth
  // const boxHeight = box.clientHeight
  //für jede info
  for (let i = 0; i < infos.length; i++) {
    //berechnung von höhe und breite
    const width = infos[i].clientWidth
    const height = infos[i].clientHeight

    if (positions[i].y + height >= boxHeight || positions[i].y < 0) {
      positions[i].dirY *= -1
    }
    if (positions[i].x + width >= boxWidth || positions[i].x < 0) {
      positions[i].dirX *= -1
      //hier funktion callen die den text dann anschließend ändert
      while (true) {
        let characteristic = eigenschaften[randomIntFromInterval(0, 5)]
        if (characteristic != infos[i].innerHTML) {
          infos[i].innerHTML = characteristic
          break
        }
      }
    }

    if (positions[i].firstRender) {
      let le = randomIntFromInterval(0, boxWidth - infos[i].clientWidth)
      let to = randomIntFromInterval(0, boxHeight - infos[i].clientHeight)
      infos[i].style.left = le + "px"
      infos[i].style.top = to + "px"
      positions[i].x = le
      positions[i].y = to
      positions[i].firstRender = false
    } else {
      positions[i].x += positions[i].dirX * speed
      positions[i].y += positions[i].dirY * speed
      infos[i].style.left = positions[i].x + "px"
      infos[i].style.top = positions[i].y + "px"
    }
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

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}
