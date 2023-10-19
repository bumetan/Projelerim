const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const phone = document.getElementById("phone");

function error(input, message) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}
function success(input) {
  input.className = "form-control is-valid";
}
function checkMail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value)) {
    success(input);
  } else {
    error(input, "hatalı bir mail adresi");
  }
}
function checkPhone(input) {
  var exp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  if (!exp.test(input.value)) {
    error(input, "Telefon 10 karakterli olmalıdır.");
  }
}
function checkRequired(inputs) {
  inputs.forEach((input) => {
    if (input.value === "") {
      error(
        input,
        `${input.previousElementSibling.innerText} alanı boş olamaz`
      );
    } else {
      success(input);
    }
  });
}
function checkLenght(input, min, max) {
  if (input.value.length < min) {
    error(input, `${input.id} en az ${min} karakter olmalıdır`);
    console.log(input.value.length);
  } else if (input.value.length > max) {
    error(input, `${input.id} en fazla ${max} karakter olmalıdır`);
  } else {
    success(input);
    console.log(input.value.length);
  }
}
function checkPasswords(input1, input2) {
  if (input1.value !== input2.value) {
    error(input1, "Girilen parolalar aynı olmalıdır");
    error(input2, "Girilen parolalar aynı olmalıdır");
  }
}

form.addEventListener("submit", function (e) {
  checkRequired([username, email, password, repassword, phone]);
  checkMail(email);
  checkLenght(username, 3, 5);
  checkPasswords(password, repassword);
  checkPhone(phone);

  e.preventDefault();
});
