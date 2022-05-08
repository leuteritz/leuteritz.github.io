let points = 0;
let kekwEmoteAmount = 0;
let kekwEmotePerSecond = 0;
let yepEmoteAmount = 0;
let yepEmotePerSecond = 0;
let poggersEmoteAmount = 0;
let poggersEmotePerSecond = 0;
let pointsPerSecond;
let emoteCostKekw = Math.floor(15 * Math.pow(1.07, kekwEmoteAmount));
let emoteCostYep = Math.floor(80 * Math.pow(1.15, yepEmoteAmount));
let emoteCostPoggers = Math.floor(720 * Math.pow(1.14, poggersEmoteAmount));

let clickmultiplier = 1;

let shopUpgradeAmont1 = 0;
let shopUpgradeCost1 = Math.floor(Math.pow(30, shopUpgradeAmont1 + 1));

function clickBox() {
  points += clickmultiplier;
  document.getElementById("points-field").innerHTML = (
    Math.round(points * 100) / 100
  ).toFixed(2);
}

function clickBoxAuto(number) {
  points += number;
  document.getElementById("points-field").innerHTML = (
    Math.round(points * 100) / 100
  ).toFixed(2);
}

function buykekwEmote() {
  if (points >= emoteCostKekw) {
    kekwEmoteAmount++;
    points -= emoteCostKekw;
    document.getElementById("points-field").innerHTML = (
      Math.round(points * 100) / 100
    ).toFixed(2);
    document.getElementById("kekwEmote-field").innerHTML = kekwEmoteAmount;

    emoteCostKekw = Math.floor(15 * Math.pow(1.07, kekwEmoteAmount));

    document.getElementById("kekwEmoteCost-field").innerHTML = emoteCostKekw;
  }
}

function changeColorKekw() {
  if (points >= emoteCostKekw) {
    document.getElementById("kekwEmoteCost-field").style.color =
      "rgb(74 222 128 / var(--tw-text-opacity))";
  } else {
    document.getElementById("kekwEmoteCost-field").style.color =
      "rgb(248 113 113 / var(--tw-text-opacity))";
  }
}

function buyYepEmote() {
  if (points >= emoteCostYep) {
    yepEmoteAmount++;
    points -= emoteCostYep;
    document.getElementById("points-field").innerHTML = (
      Math.round(points * 100) / 100
    ).toFixed(2);
    document.getElementById("yepEmote-field").innerHTML = yepEmoteAmount;

    emoteCostYep = Math.floor(80 * Math.pow(1.15, yepEmoteAmount));

    document.getElementById("yepEmoteCost-field").innerHTML = emoteCostYep;
  }
}

function changeColorYep() {
  if (points >= emoteCostYep) {
    document.getElementById("yepEmoteCost-field").style.color =
      "rgb(74 222 128 / var(--tw-text-opacity))";
  } else {
    document.getElementById("yepEmoteCost-field").style.color =
      "rgb(248 113 113 / var(--tw-text-opacity))";
  }
}

function buyPoggersEmote() {
  if (points >= emoteCostPoggers) {
    poggersEmoteAmount++;
    points -= emoteCostPoggers;
    document.getElementById("points-field").innerHTML = (
      Math.round(points * 100) / 100
    ).toFixed(2);
    document.getElementById("poggersEmote-field").innerHTML =
      poggersEmoteAmount;

    emoteCostPoggers = Math.floor(720 * Math.pow(1.14, poggersEmoteAmount));

    document.getElementById("poggersEmoteCost-field").innerHTML =
      emoteCostPoggers;
  }
}

function changeColorPoggers() {
  if (points >= emoteCostPoggers) {
    document.getElementById("poggersEmoteCost-field").style.color =
      "rgb(74 222 128 / var(--tw-text-opacity))";
  } else {
    document.getElementById("poggersEmoteCost-field").style.color =
      "rgb(248 113 113 / var(--tw-text-opacity))";
  }
}

window.setInterval(function autoClick() {
  clickBoxAuto(pointsPerSecond);
}, 1000);

function calcpointsPerSecond() {
  kekwEmotePerSecond = kekwEmoteAmount * 1.5;
  yepEmotePerSecond = yepEmoteAmount * 20;
  poggersEmotePerSecond = poggersEmoteAmount * 90;
  pointsPerSecond =
    kekwEmotePerSecond + yepEmotePerSecond + poggersEmotePerSecond;
}

function buyClickUpgrade1() {
  if (points >= shopUpgradeCost1) {
    points -= shopUpgradeCost1;
    shopUpgradeAmont1++;
    clickmultiplier++;
    document.getElementById("points-field").innerHTML = (
      Math.round(points * 100) / 100
    ).toFixed(2);
    shopUpgradeCost1 = Math.floor(Math.pow(30, shopUpgradeAmont1 + 1));
    document.getElementById("clickUpgradeCost-field").innerHTML =
      shopUpgradeCost1;
  }
}

function changeColorClickUpgrade1() {
  if (points >= shopUpgradeCost1) {
    document.getElementById("clickUpgradeCost-field").style.color =
      "rgb(74 222 128 / var(--tw-text-opacity))";
  } else {
    document.getElementById("clickUpgradeCost-field").style.color =
      "rgb(248 113 113 / var(--tw-text-opacity))";
  }
}

window.setInterval(function updateCost() {
  changeColorKekw();
  changeColorPoggers();
  changeColorYep();
  changeColorClickUpgrade1();
}, 1);

window.setInterval(function showpointsPerSecond() {
  calcpointsPerSecond();
  document.getElementById("update-field").textContent = pointsPerSecond;
  document.getElementById("kekwEmotePerSecond-field").textContent =
    kekwEmotePerSecond;
  document.getElementById("yepEmotePerSecond-field").textContent =
    yepEmotePerSecond;
  document.getElementById("poggersEmotePerSecond-field").textContent =
    poggersEmotePerSecond;
}, 10);
