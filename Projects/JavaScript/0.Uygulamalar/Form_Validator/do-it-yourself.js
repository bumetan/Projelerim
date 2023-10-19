const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const phone = document.getElementById("phone");
const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const exp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

function error(input, message) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}
function success(input) {
  input.className = "form-control is-valid";
}
function checkForm(inputs) {
  inputs.forEach((input) => {
    if (input.value === "") {
      error(input, `${input.id} değeri boş olamaz`);
    } else {
      success(input);
    }
  });
}
function sayiDogrula(input, min, max) {
  if (input.value.length < min) {
    error(input, `${input.id} değeri ${min} den az olamaz`);
  } else if (input.value.length > max) {
    error(input, `${input.id} değeri ${max} den fazla olamaz`);
  }
}
function sifreDogrula(input1, input2) {
  if (input1.value !== input2.value) {
    error(input2, "Şifreler aynı olmalıdır.");
  }
}
function checkMail(input) {
  if (!re.test(input.value)) {
    error(input, "Bir mail adresi girin.");
  }
}
function checkPhone(input) {
  if (!exp.test(input.value)) {
    error(input, "Doğru bir telefon numarası giriniz.");
  }
}

form.addEventListener("submit", function events(e) {
  checkForm([username, email, password, repassword, phone]);
  sayiDogrula(username, 8, 12);
  sayiDogrula(password, 8, 15);
  sifreDogrula(password, repassword);
  checkMail(email);
  checkPhone(phone);
  e.preventDefault();
});
