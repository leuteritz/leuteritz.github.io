let points = 0;
let kekwEmoteAmount = 0;
let kekwEmotePerSecond = 0;
let yepEmoteAmount = 0;
let yepEmotePerSecond = 0;
let poggersEmoteAmount = 0;
let poggersEmotePerSecond = 0;
let pointsPerSecond;
let emoteCostKekw;
let emoteCostYep;
let emoteCostPoggers;

let clickmultiplier = 1;

let shopUpgradeAmont1 = 0;
let shopUpgradeCost1 = Math.floor(Math.pow(30, shopUpgradeAmont1 + 1));
let kekwUpgradeAmount1 = 0;
let kekwUpgradeCost1;
let yepUpgradeAmount1 = 0;
let yepUpgradeCost1;
let poggersUpgradeAmount1 = 0;
let poggersUpgradeCost1;

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

function buyEmote(emoteCost, emoteSelected) {
  if (points >= emoteCost) {
    points -= emoteCost;
    document.getElementById("points-field").innerHTML = (
      Math.round(points * 100) / 100
    ).toFixed(2);

    switch (emoteSelected) {
      case 0: {
        kekwEmoteAmount++;
        break;
      }
      case 1: {
        yepEmoteAmount++;
        break;
      }
      case 2: {
        poggersEmoteAmount++;
        break;
      }
    }
  }
}

function buyClickUpgrade1() {
  if (points >= shopUpgradeCost1) {
    points -= shopUpgradeCost1;
    shopUpgradeAmont1++;
    clickmultiplier += Math.floor(Math.pow(2, shopUpgradeAmont1 + 1));
    document.getElementById("points-field").innerHTML = (
      Math.round(points * 100) / 100
    ).toFixed(2);
    shopUpgradeCost1 = Math.floor(Math.pow(30, shopUpgradeAmont1 + 1));
    document.getElementById("clickUpgradeCost-field").innerHTML =
      shopUpgradeCost1;
  }
}

function buyEmoteUpgrade(emoteUpgradeCost, emoteSelected) {
  if (points >= emoteUpgradeCost) {
    points -= emoteUpgradeCost;
    document.getElementById("points-field").innerHTML = (
      Math.round(points * 100) / 100
    ).toFixed(2);

    switch (emoteSelected) {
      case 0: {
        kekwUpgradeAmount1++;
        break;
      }
      case 1: {
        yepUpgradeAmount1++;
        break;
      }
      case 2: {
        poggersUpgradeAmount1++;
        break;
      }
    }
  }
}

// Updates KEKW Upgrade
function updateKekwGui() {
  document.getElementById("kekwEmote-field").innerHTML = kekwEmoteAmount;
  emoteCostKekw = Math.floor(15 * Math.pow(1.07, kekwEmoteAmount));
  document.getElementById("kekwEmoteCost-field").innerHTML = emoteCostKekw;
  document.getElementById("kekwEmotePerSecond-field").innerHTML =
    kekwEmotePerSecond;
  kekwUpgradeCost1 = Math.floor(Math.pow(100, kekwUpgradeAmount1 + 1));
  document.getElementById("kekwUpgradeCost1-field").innerHTML =
    kekwUpgradeCost1;
}

// Updates YEP Upgrade
function updateYepGui() {
  document.getElementById("yepEmote-field").innerHTML = yepEmoteAmount;
  emoteCostYep = Math.floor(80 * Math.pow(1.15, yepEmoteAmount));
  document.getElementById("yepEmoteCost-field").innerHTML = emoteCostYep;
  document.getElementById("yepEmotePerSecond-field").innerHTML =
    yepEmotePerSecond;
  yepUpgradeCost1 = Math.floor(Math.pow(1000, yepUpgradeAmount1 + 1));
  document.getElementById("yepUpgradeCost1-field").innerHTML = yepUpgradeCost1;
}

// Updates POGGERS Upgrade
function updatePoggersGui() {
  document.getElementById("poggersEmote-field").innerHTML = poggersEmoteAmount;
  emoteCostPoggers = Math.floor(720 * Math.pow(1.14, poggersEmoteAmount));
  document.getElementById("poggersEmoteCost-field").innerHTML =
    emoteCostPoggers;
  document.getElementById("poggersEmotePerSecond-field").innerHTML =
    poggersEmotePerSecond;
  poggersUpgradeCost1 = Math.floor(Math.pow(10000, poggersUpgradeAmount1 + 1));
  document.getElementById("poggersUpgradeCost1-field").innerHTML =
    poggersUpgradeCost1;
}

// Updates Clicks
function updateClicks() {
  document.getElementById("emote-image-text").innerHTML =
    "+ " + clickmultiplier;
}

// Updates all Emotes
function updateGui() {
  updateKekwGui();
  updateYepGui();
  updatePoggersGui();
  updateClicks();
}

// Calculates Points Per Second
function calcpointsPerSecond() {
  kekwEmotePerSecond = kekwEmoteAmount * 1.5 * (kekwUpgradeAmount1 + 1);
  yepEmotePerSecond = yepEmoteAmount * 20 * (yepUpgradeAmount1 + 1);
  poggersEmotePerSecond = poggersEmoteAmount * 90 * (poggersUpgradeAmount1 + 1);
  pointsPerSecond =
    kekwEmotePerSecond + yepEmotePerSecond + poggersEmotePerSecond;
}

// Updates Points Per Second
function updatePointsPerSecond() {
  calcpointsPerSecond();
  document.getElementById("update-field").textContent = pointsPerSecond;
}

// Changes KEKW Point Color
function changeColorKekw() {
  if (points >= emoteCostKekw) {
    document.getElementById("kekwEmoteCost-field").style.color =
      "rgb(74 222 128 / var(--tw-text-opacity))";
  } else {
    document.getElementById("kekwEmoteCost-field").style.color =
      "rgb(248 113 113 / var(--tw-text-opacity))";
  }
  if (points >= kekwUpgradeCost1) {
    document.getElementById("kekwUpgradeCost1-field").style.color =
      "rgb(74 222 128 / var(--tw-text-opacity))";
  } else {
    document.getElementById("kekwUpgradeCost1-field").style.color =
      "rgb(248 113 113 / var(--tw-text-opacity))";
  }
}

// Changes YEP Point Color
function changeColorYep() {
  if (points >= emoteCostYep) {
    document.getElementById("yepEmoteCost-field").style.color =
      "rgb(74 222 128 / var(--tw-text-opacity))";
  } else {
    document.getElementById("yepEmoteCost-field").style.color =
      "rgb(248 113 113 / var(--tw-text-opacity))";
  }
  if (points >= yepUpgradeCost1) {
    document.getElementById("yepUpgradeCost1-field").style.color =
      "rgb(74 222 128 / var(--tw-text-opacity))";
  } else {
    document.getElementById("yepUpgradeCost1-field").style.color =
      "rgb(248 113 113 / var(--tw-text-opacity))";
  }
}

// Changes POGGERS Point Color
function changeColorPoggers() {
  if (points >= emoteCostPoggers) {
    document.getElementById("poggersEmoteCost-field").style.color =
      "rgb(74 222 128 / var(--tw-text-opacity))";
  } else {
    document.getElementById("poggersEmoteCost-field").style.color =
      "rgb(248 113 113 / var(--tw-text-opacity))";
  }
  if (points >= poggersUpgradeCost1) {
    document.getElementById("poggersUpgradeCost1-field").style.color =
      "rgb(74 222 128 / var(--tw-text-opacity))";
  } else {
    document.getElementById("poggersUpgradeCost1-field").style.color =
      "rgb(248 113 113 / var(--tw-text-opacity))";
  }
}

// Change Click Upgrade 1 Color
function changeColorClickUpgrade1() {
  if (points >= shopUpgradeCost1) {
    document.getElementById("clickUpgradeCost-field").style.color =
      "rgb(74 222 128 / var(--tw-text-opacity))";
  } else {
    document.getElementById("clickUpgradeCost-field").style.color =
      "rgb(248 113 113 / var(--tw-text-opacity))";
  }
}

// Changes all Point Colors
function changeColor() {
  changeColorKekw();
  changeColorYep();
  changeColorPoggers();
  changeColorClickUpgrade1();
}

// Global Update Function
window.setInterval(function updateInterface() {
  updateGui();
  updatePointsPerSecond();
  changeColor();
}, 50);

// Global Autoclick Function
window.setInterval(function autoClick() {
  clickBoxAuto(pointsPerSecond);
}, 1000);
