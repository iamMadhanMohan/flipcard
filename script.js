let flag = 5;
let onClick = [1, 1, 1, 1, 1, 1];

const card1 = document.querySelector(".card1");
const back1 = document.querySelector("div.card1 .back h1");
const back2 = document.querySelector("div.card2 .back h1");
const back3 = document.querySelector("div.card3 .back h1");
const back4 = document.querySelector("div.card4 .back h1");
const back5 = document.querySelector("div.card5 .back h1");
const back6 = document.querySelector("div.card6 .back h1");

card1.addEventListener("click", function () {
  if (flag > 0 && onClick[0] == 1) {
    card1.style.transform = "rotateY(180deg)";
    back1.innerText = randomValue();
    flag--;
    onClick[0] = 0;
  }
});

const card2 = document.querySelector(".card2");
card2.addEventListener("click", function () {
  if (flag > 0 && onClick[1] == 1) {
    card2.style.transform = "rotateY(180deg)";
    back2.innerText = randomValue();
    flag--;
    result();
    onClick[1] = 0;
  }
});

const card3 = document.querySelector(".card3");
card3.addEventListener("click", function () {
  if (flag > 0 && onClick[2] == 1) {
    card3.style.transform = "rotateY(180deg)";
    back3.innerText = randomValue();
    flag--;
    result();
    onClick[2] = 0;
  }
});

const card4 = document.querySelector(".card4");
card4.addEventListener("click", function () {
  if (flag > 0 && onClick[3] == 1) {
    card4.style.transform = "rotateY(180deg)";
    back4.innerText = randomValue();
    flag--;
    result();
    onClick[3] = 0;
  }
});

const card5 = document.querySelector(".card5");
card5.addEventListener("click", function () {
  if (flag > 0 && onClick[4] == 1) {
    card5.style.transform = "rotateY(180deg)";
    back5.innerText = randomValue();
    flag--;
    result();
    onClick[4] = 0;
  }
});

const card6 = document.querySelector(".card6");
card6.addEventListener("click", function () {
  if (flag > 0 && onClick[5] == 1) {
    card6.style.transform = "rotateY(180deg)";
    back6.innerText = randomValue();
    flag--;
    result();
    onClick[5] = 0;
  }
});

// random value generator

const rupees = ["$10", "$100", "$1000", "$10,000", "$100,000", "$1,000,000"];
const randomValue = () => {
  let randomIndex = Math.floor(Math.random() * rupees.length);
  value = rupees[randomIndex];
  return rupees.splice(randomIndex, 1);
};

// result printer

const heading = document.querySelector(".result");
const result = () => {
  if (flag === 0) {
    heading.style.visibility = "visible";
    heading.innerText = `You Won : ${rupees.pop()}`;
    refresh.style.visibility = "visible";
  }
};

// refresh button

const refresh = document.querySelector(".retry");
refresh.addEventListener("click", function () {
  location.reload();
});
