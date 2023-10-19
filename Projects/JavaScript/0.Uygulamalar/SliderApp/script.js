var models = [
  {
    name: "Bmv 418d",
    image: "img/bmw.jpg",
    link: "https://fitnesscim.com",
  },
  {
    name: "Honda",
    image: "img/honda.jpg",
    link: "https://fitnesscim.com",
  },
  {
    name: "Mazda",
    image: "img/mazda.jpg",
    link: "https://fitnesscim.com",
  },
  {
    name: "Skoda",
    image: "img/skoda.jpg",
    link: "https://fitnesscim.com",
  },
  {
    name: "Volvo",
    image: "img/volvo.jpg",
    link: "https://fitnesscim.com",
  },
];
let settings = {
  duration: "2000",
  random: false,
};

let index = 0;
let slaytCount = models.length;
let backArrov = document.querySelector(
  "body > div.container.mt-2 > div > div > div > div.card-footer > i.fas.fa-arrow-circle-left.fa-2x"
);
let forvadArrov = document.querySelector(
  "body > div.container.mt-2 > div > div > div > div.card-footer > i.fas.fa-arrow-circle-right.fa-2x"
);
let arrows = document.querySelectorAll(".arrov");
let interval;

eventListener();
init(settings);

function eventListener() {
  backArrov.addEventListener("click", backArrovFn);
  forvadArrov.addEventListener("click", forvadArrovFn);

  arrows.forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      clearInterval(interval);
    });
  });

  arrows.forEach(function (item) {
    item.addEventListener("mouseleave", function () {
      init(settings);
    });
  });
}

function showSlide(i) {
  index = i;
  // Eğer gelen index değeri sıfırdan küçükse indexi models.lengt -1 yap
  if (i < 0) {
    index = slaytCount - 1;
  }
  // Eğer gelen index değeri model.lenght den büyükse indexi 1 yap fonksiyona devam et.
  if (i >= slaytCount) {
    index = 0;
  }

  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
  document.querySelector(
    "body > div.container.mt-2 > div > div > div > div.card-body > h5"
  ).textContent = models[index].name;
}

function init(i) {
  // setTimeout ---> fonksiyonu belirtilen zamanda başlatır ve 1 defa çalıştırır
  // set Interval ---> fomksiyonu başlatır clearInterval yapana kadar devam ettirir.

  let prev;

  interval = setInterval(function () {
    if (i.random) {
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      {
        prev = index;
      }
      // random index
    } else {
      if (slaytCount == index + 1) {
        index = 0;
      }
      showSlide(index);
      index++;
      //artan index
    }
    showSlide(index);
  }, i.duration);
}

function backArrovFn() {
  index--;
  showSlide(index);
}

function forvadArrovFn() {
  index++;
  showSlide(index);
}

function clearIntervalFn() {
  arrows.forEach(function clrint() {
    clearInterval(interval);
  });
}
