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

let dayBox = document.getElementById("day");
let hrBox = document.getElementById("hour");
let minBox = document.getElementById("minute");
let secBox = document.getElementById("second");

let endDate = new Date(2023, 9, 10, 23, 59)
let endTime = endDate

function countdown() {
  let todayDate = new Date()
  let todayTime = todayDate.getTime()

  let remainingTime = endTime - todayTime

  let oneMin = 60 * 1000
  let oneHr = 60 * oneMin
  let oneDay = 24 * oneHr

  let addZeroes = (num) => (num < 10 ? `0${num}` : num)

  if (endTime < todayTime) {
    clearInterval(i)
    //document.querySelector(".count_down").innerHTML = `<h1>Discount has expired...</h1>`
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
