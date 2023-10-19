var models = [
  {
    name: "Bmv 418d",
    image: "img/bmw.jpg",
    link: "https://fitnesscim.com/1",
  },
  {
    name: "Honda",
    image: "img/honda.jpg",
    link: "https://fitnesscim.com/2",
  },
  {
    name: "Mazda",
    image: "img/mazda.jpg",
    link: "https://fitnesscim.com/3",
  },
  {
    name: "Skoda",
    image: "img/skoda.jpg",
    link: "https://fitnesscim.com/4",
  },
  {
    name: "Volvo",
    image: "img/volvo.jpg",
    link: "https://fitnesscim.com/5",
  },
];
const photo = document.querySelector("#car-photos");
const title = document.querySelector(".card-title");
const link = document.querySelector(".card-link");
const backArrow = document.querySelector(
  "body > div.container.mt-2 > div > div > div > div.card-footer > i.fas.fa-arrow-circle-left.fa-2x"
);
const forwadArrow = document.querySelector(
  "body > div.container.mt-2 > div > div > div > div.card-footer > i.fas.fa-arrow-circle-right.fa-2x"
);
let index = 0;
let slaytCount = models.length;
let settings = {
  duration: "2000",
  random: false,
};
let interval;
let arrows = document.querySelectorAll(".arrov");

eventListener();
otomatikgec(settings);

function eventListener() {
  backArrow.addEventListener("click", backArrowFn);
  forwadArrow.addEventListener("click", forwadArrowFn);
}

function showSlide(i) {
  index = i;
  if (index < 0) {
    index = slaytCount - 1;
  }
  if (i >= slaytCount) {
    index = 0;
  }
  photo.setAttribute("src", models[index].image);
  title.textContent = models[index].name;
  link.setAttribute("href", models[index].link);
  console.log(i);
}

function backArrowFn() {
  index--;
  showSlide(index);
}

function forwadArrowFn() {
  index++;
  showSlide(index);
}

function otomatikgec(i) {
  let prev;

  interval = setInterval(function () {
    if (i.random) {
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      {
        prev = index;
      }
      showSlide(index);
    } else {
      index++;
      showSlide(index);
    }
  }, i.duration);
}

arrows.forEach((element) => {
  element.addEventListener("mouseenter", clrInterval);
});

arrows.forEach((element) => {
  element.addEventListener("mouseleave", function () {
    otomatikgec(settings);
  });
});

function clrInterval() {
  clearInterval(interval);
}
