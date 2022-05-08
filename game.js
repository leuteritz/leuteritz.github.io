let points = 0;
let kekwEmoteAmount = 0;
let kekwEmotePerSecond = 0;
let yepEmoteAmount = 0;
let yepEmotePerSecond = 0;
let poggersEmoteAmount = 0;
let poggersEmotePerSecond = 0;
let multiplier;
var EmoteCostkekw;
var nextEmoteCostkekw = Math.floor(15 * Math.pow(1.07, kekwEmoteAmount));
var EmoteCostyep;
var nextEmoteCostyep = Math.floor(80 * Math.pow(1.15, yepEmoteAmount));
var EmoteCostpoggers;
var nextEmoteCostpoggers = Math.floor(720 * Math.pow(1.14, poggersEmoteAmount));

function clickBox(number) {
  points += number;
  document.getElementById("points-field").innerHTML = (
    Math.round(points * 100) / 100
  ).toFixed(2);
}

function buykekwEmote() {
  EmoteCostkekw = Math.floor(15 * Math.pow(1.07, kekwEmoteAmount));
  if (points >= EmoteCostkekw) {
    kekwEmoteAmount++;
    points -= EmoteCostkekw;
    document.getElementById("points-field").innerHTML = (
      Math.round(points * 100) / 100
    ).toFixed(2);
    document.getElementById("kekwEmote-field").innerHTML = kekwEmoteAmount;

    nextEmoteCostkekw = Math.floor(15 * Math.pow(1.07, kekwEmoteAmount));
    document.getElementById("kekwEmoteCost-field").innerHTML =
      nextEmoteCostkekw;
  }
}

function buyYepEmote() {
  let EmoteCost = Math.floor(80 * Math.pow(1.15, yepEmoteAmount));
  if (points >= EmoteCost) {
    yepEmoteAmount++;
    points -= EmoteCost;
    document.getElementById("points-field").innerHTML = (
      Math.round(points * 100) / 100
    ).toFixed(2);
    document.getElementById("yepEmote-field").innerHTML = yepEmoteAmount;

    let nextEmoteCost = Math.floor(80 * Math.pow(1.15, yepEmoteAmount));
    document.getElementById("yepEmoteCost-field").innerHTML = nextEmoteCost;
  }
}

function buypoggersEmote() {
  let EmoteCost = Math.floor(720 * Math.pow(1.14, poggersEmoteAmount));
  if (points >= EmoteCost) {
    poggersEmoteAmount++;
    points -= EmoteCost;
    document.getElementById("points-field").innerHTML = (
      Math.round(points * 100) / 100
    ).toFixed(2);
    document.getElementById("poggersEmote-field").innerHTML =
      poggersEmoteAmount;

    let nextEmoteCost = Math.floor(720 * Math.pow(1.14, poggersEmoteAmount));
    document.getElementById("poggersEmoteCost-field").innerHTML = nextEmoteCost;
  }
}

function reset() {
  points = 0;
  kekwEmoteAmount = 0;
  yepEmoteAmount = 0;
  poggersEmoteAmount = 0;
  kekwEmotePerSecond = 0;
  yepEmotePerSecond = 0;
  poggersEmotePerSecond = 0;
  multiplier = 0;

  document.getElementById("points-field").innerHTML = (
    Math.round(points * 100) / 100
  ).toFixed(2);
  document.getElementById("kekwEmote-field").innerHTML = kekwEmoteAmount;
  document.getElementById("kekwEmoteCost-field").innerHTML = 15;
  document.getElementById("yepEmote-field").innerHTML = yepEmoteAmount;
  document.getElementById("yepEmoteCost-field").innerHTML = 80;
  document.getElementById("poggersEmote-field").innerHTML = poggersEmoteAmount;
  document.getElementById("poggersEmoteCost-field").innerHTML = 720;
}

window.setInterval(function autoClick() {
  clickBox(kekwEmoteAmount * 1.67);
  clickBox(yepEmoteAmount * 20);
  clickBox(poggersEmoteAmount * 90);
}, 1000);

function calcMultiplier() {
  kekwEmotePerSecond = kekwEmoteAmount * 1.5;
  yepEmotePerSecond = yepEmoteAmount * 20;
  poggersEmotePerSecond = poggersEmoteAmount * 90;
  multiplier = kekwEmotePerSecond + yepEmotePerSecond + poggersEmotePerSecond;
}

function changeColorkekw() {
  if (points >= nextEmoteCostkekw) {
    document.getElementById("kekwEmoteCost-field").style.color =
      "rgb(74 222 128 / var(--tw-text-opacity))";
  } else {
    document.getElementById("kekwEmoteCost-field").style.color =
      "rgb(248 113 113 / var(--tw-text-opacity))";
  }
}

function changeColorpoggers() {
  if (points >= nextEmoteCostpoggers) {
    document.getElementById("poggersEmoteCost-field").style.color =
      "rgb(74 222 128 / var(--tw-text-opacity))";
  } else {
    document.getElementById("poggersEmoteCost-field").style.color =
      "rgb(248 113 113 / var(--tw-text-opacity))";
  }
}

function changeColoryep() {
  if (points >= nextEmoteCostyep) {
    document.getElementById("yepEmoteCost-field").style.color =
      "rgb(74 222 128 / var(--tw-text-opacity))";
  } else {
    document.getElementById("yepEmoteCost-field").style.color =
      "rgb(248 113 113 / var(--tw-text-opacity))";
  }
}

window.setInterval(function showMultiplier() {
  calcMultiplier();
  document.getElementById("update-field").textContent = multiplier;
  document.getElementById("kekwEmotePerSecond-field").textContent =
    kekwEmotePerSecond;
  document.getElementById("yepEmotePerSecond-field").textContent =
    yepEmotePerSecond;
  document.getElementById("poggersEmotePerSecond-field").textContent =
    poggersEmotePerSecond;
  changeColorkekw();
  changeColorpoggers();
  changeColoryep();
}, 10);
