const container = document.querySelector(".container");
let count = document.querySelector("#count");
let amount = document.querySelector("#amount");
let select = document.querySelector("#movie");
const seats = document.querySelectorAll(".seat");
const deleteAll = document.querySelector("button");
let full = document.querySelectorAll(".reserved");

getFromLocalStorage();
calculateTotal();

container.addEventListener("click", function (e) {
  if (!e.target.classList.contains("selected")) {
    e.target.classList.add("selected");
  } else {
    e.target.classList.remove("selected");
  }
  calculateTotal();
});

function calculateTotal() {
  let selectedSeats = container.querySelectorAll(".selected:not(.reserved)");
  const selectedArray = [];
  const allArray = [];

  seats.forEach(function (element, index) {
    allArray.push(element);
  });

  selectedSeats.forEach(function (element, index) {
    selectedArray.push(element);
  });

  let selectedSeatIndexs = selectedArray.map(function (seat) {
    return allArray.indexOf(seat);
  });

  count.innerText = selectedSeats.length;
  amount.innerText = selectedSeats.length * select.value;
  seats[40].innerText = selectedSeats.length;
  seats[41].innerText = seats.length - selectedSeats.length - 7;
  seats[42].innerText = full.length - 1;

  saveToLS(selectedSeatIndexs);
}

select.addEventListener("change", function () {
  calculateTotal();
});

function getFromLocalStorage() {
  // selectedSeatsı
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  if (selectedSeats != null && selectedSeats.length > 0) {
    seats.forEach(function (seat, index) {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieIndex = JSON.parse(localStorage.getItem("selectedIndex"));

  if (selectedMovieIndex != null) {
    select.selectedIndex = selectedMovieIndex;
  }
}

function saveToLS(index) {
  localStorage.setItem("selectedSeats", JSON.stringify(index));
  localStorage.setItem("selectedIndex", select.selectedIndex);
}

deleteAll.addEventListener("click", function () {
  if (confirm("Eminmisiniz ? ")) {
    localStorage.setItem("selectedSeats", JSON.stringify(0));
    localStorage.setItem("selectedIndex", JSON.stringify(1));
  }
  location.reload();
});

seats.forEach(function (seat, index) {
  if (index <= seats.length - 4) {
    seat.innerText = index + 1;
  }
  seat.classList.add("center");
});
