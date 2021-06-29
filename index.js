// document.getElementById("count-el").innerText = 5

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
  count += 1
  countEl.textContent = count
}

countEl.addEventListener("click", increment)

function save() {
  displayCount = count + " - "
  saveEl.textContent += displayCount // .textContent will account for spaces
  console.log(count)
  countEl.textContent = 0
  count = 0
}



// let bonusPoints = 50
// bonusPoints = bonusPoints + 50
// bonusPoints = bonusPoints - 75
// bonusPoints = bonusPoints + 45 
// console.log(bonusPoints)

//let firstBatch = 5
//let secondBatch = 7
// let count = firstBatch + secondBatch
// 
// //console is tool to view result of code
// //can be found in Chrome/Inspect/Console
// console.log(count)

// let myAge = 41 
// let humanDogRatio = 0.1429
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

