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
      changeText(i);
    }
    if (positions[i].x + width >= boxWidth || positions[i].x < 0) {
      positions[i].dirX *= -1;
      //hier funktion callen die den text dann anschließend ändert
      changeText(i);
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
  if (isMobile() && hasTouchSupport()) {
    return;
  }
  window.cancelAnimationFrame(animationId);
  changeInfosVisibility(false);
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    //wenn resizing abgeschlossen ist:
    //neue Zufallswerte ermitteln und animation starten
    changeInfosVisibility(true);
    randomizeStartPosition();
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
  "passion for aesthetics",
];

function randomizeStartPosition() {
  box = document.getElementById("box");
  boxWidth = box.clientWidth;
  boxHeight = box.clientHeight;
  if (positions.length === 3) {
    positions[0].dirX = 1;
    positions[0].dirY = 1;
    positions[1].dirX = -1;
    positions[1].dirY = 1;
    positions[2].dirX = -1;
    positions[2].dirY = -1;
  }
  for (let i = 0; i < infos.length; i++) {
    let le = randomIntFromInterval(100, boxWidth - infos[i].clientWidth - 100);
    let to = randomIntFromInterval(
      100,
      boxHeight - infos[i].clientHeight - 100,
    );
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
    if (characteristic != infos[i].querySelector("p").innerHTML) {
      infos[i].querySelector("p").innerHTML = characteristic;
      break;
    }
  }
}

function isMobile() {
  const regex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

function hasTouchSupport() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

// const setThemeColor = (color) => {
//   const meta = document.querySelector('meta[name="theme-color"]')
//   console.log("WARTE")
//   if (meta) {
//     console.log("GEFUNDEN: " + color)
//     meta.setAttribute('content', color)
//   }
// }

// if ("IntersectionObserver" in window) {
//   const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         const { isIntersecting, target } = entry
//         if (isIntersecting) {
//           const color = window.getComputedStyle(target).getPropertyValue("background-color");
//           console.log("color: " + color)
//           setThemeColor(color)
//         }
//       })
//   }, {
//     root: document.getElementById('viewport'),
//     rootMargin: "1px 0px -100% 0px",
//     treshold: 0.1
//   })
  
//   document.querySelectorAll('.section').forEach(section => {
//     console.log("test")
//     console.log(section)
//     observer.observe(section)
//   })
// }
