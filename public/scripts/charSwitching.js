let nameElem = document.getElementById("name");
let myName = "tobias meyhoefer";
let myChangingName = "tobias meyhoefer";

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let hittedCharsArray = []

async function mainLoop() {
  await delay(1000);
  for (let i = 0; i < 26; i++) {
    await delay(150);
    for (let j = 0; j < myName.length; j++) {
      if(j == 6) {
        continue
      }
      if(hittedCharsArray.includes(j)) {
        continue;
      } 
      if (String.fromCharCode(97 + i) == myName[j]) {
        myChangingName = replaceAt(myChangingName, j, String.fromCharCode(97 + i))
        nameElem.innerHTML = myChangingName;
        hittedCharsArray.push(j)
        continue;
      }
      myChangingName = replaceAt(myChangingName, j, String.fromCharCode(97 + i))
      nameElem.innerHTML = myChangingName;
    }
  }
}

mainLoop();

function replaceAt(word, index, replacement) {
  return word.substring(0, index) + replacement + word.substring(index + replacement.length);
}

