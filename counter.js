/*const btn = document.getElementById('btn'),
score = document.getElementById('score'),
item = document.querySelector('#item'),
minBtn = document.querySelector('#minus'),
addBtn = document.querySelector('#add'),
buyBtn = document.querySelector('.buy'),
notif = document.querySelector('.background'),
cancel = document.querySelector('.cancel'),
total = document.querySelector('#total');

let itemCount = 1,
price = 300,
time = document.getElementById('timer'),
secLef = 10;

btn.addEventListener("click", () => {
  count++;
  score.innerHTML = count;
})

addBtn.addEventListener("click", () => {
  itemCount++;
  price = price + 300
  update()
})

minBtn.addEventListener("click", () => {
  if(itemCount > 1) {
    itemCount--;
    price = price - 300
    update()
  }
})

buyBtn.addEventListener("click", () => {
  notif.style.display = 'block';
})

cancel.addEventListener("click", () => {
  notif.style.display = 'none';
  itemCount = 1;
  price = 300;
  update()
})

function update() {
  item.innerHTML = itemCount;
  total.innerHTML = price;
}



Timer Function

const countDown = setInterval(
  () => {
    if (secLef <= 0) clearInterval(countDown)
    time.value = secLef
    time.textContent = secLef
    secLef -= 1
  },
1000 )*/

let dayBox = document.getElementById("day"),
hrBox = document.getElementById("hour"),
minBox = document.getElementById("minute"),
secBox = document.getElementById("second"),
lh2 = document.getElementById("label_h2"),
lspan = document.getElementById("label_span"),
note = document.getElementById("claim_note"),
dh2 = document.getElementById("discount_h2"),
directions = document.getElementById("directions")

let endDate = new Date(2023, 10, 19, 0, 0)
let endTime = endDate

function countdown() {
  let todayDate = new Date()
  let todayTime = todayDate.getTime()

  let remainingTime = endTime - todayTime

  let oneMin = 60 * 1000
  let oneHr = 60 * oneMin
  let oneDay = 24 * oneHr

  let addZeroes = (num) => (num < 10 ? `0${num}` : num)

  if (endTime < todayDate) {
    clearInterval(i)
    //document.querySelector(".count_down").innerHTML = `<h1>Discount has expired...</h1>`
    // lh2.textContent = `25% discount!
    //  claim NOW!`;
    // lspan.textContent = "yw"
    // note.textContent = "Discount will end in"
    // directions.style.display = "block"
  } else {
    let dys = Math.floor(remainingTime / oneDay)
    let hrs = Math.floor((remainingTime % oneDay) / oneHr)
    let mins = Math.floor((remainingTime % oneHr) / oneMin)
    let secs = Math.floor((remainingTime % oneMin) / 1000)

    dayBox.textContent = addZeroes(dys)
    hrBox.textContent = addZeroes(hrs)
    minBox.textContent = addZeroes(mins)
    secBox.textContent = addZeroes(secs)
  }
}

let i = setInterval(countdown, 1000)
countdown()
