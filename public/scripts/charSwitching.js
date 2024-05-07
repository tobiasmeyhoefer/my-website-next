let nameElem = document.getElementById("name");
let myName = "TOBIAS MEYHOEFER";
let myChangingName = "TOBIAS MEYHOEFER";

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let hittedCharsArray = []

async function mainLoop() {
  await delay(700);
  while (true) {
    await delay(50);
    for (let j = 0; j < myName.length; j++) {
      let randomChar = getRandomLetter().toUpperCase()
      if(j == 6) {
        continue
      }
      if(hittedCharsArray.includes(j)) {
        continue;
      } 
      if (randomChar == myName[j]) {
        myChangingName = replaceAt(myChangingName, j, randomChar)
        nameElem.innerHTML = myChangingName;
        hittedCharsArray.push(j)
        continue;
      }
      myChangingName = replaceAt(myChangingName, j, randomChar)
      nameElem.innerHTML = myChangingName;

      if(myChangingName == "TOBIAS MEYHOEFER") {
        return
      }
    }
  }
}

mainLoop();

function replaceAt(word, index, replacement) {
  return word.substring(0, index) + replacement + word.substring(index + replacement.length);
}

function getRandomLetter() {
  return String.fromCharCode(97 + randomIntFromInterval(0, 25)).toLocaleUpperCase()
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
