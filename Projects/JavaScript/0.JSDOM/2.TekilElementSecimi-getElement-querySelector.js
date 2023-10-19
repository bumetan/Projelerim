// Selecting Elements

// Single Elements

let val;

val = document.getElementById("header");
console.log(val);

val = document.getElementById("header").id;
console.log(val);

val = document.getElementById("header").className;
console.log(val);

val = document.getElementById("header");
/* val = val.id;
val = val.className;
console.log(val) */

val.style.fontSize = "60px";
val.style.color = "red";
val.style.fontWeight = "bold";
//val.style.display = "none";

val.innerText = "Dom Modeli"; // innerText ile sadece içerisine metin yazılır <strong> gibi etiketleride metin olarak alır.
// innetText yerine textContent de kullanılabilir.

val.innerHTML = "<strong>Dom Modeli </strong>"; // tırnak içerisine yazılan html kodlarını kod olarak görür.

// document.querySelector  // seçtiğimiz etiketin daima 1.elemanını seçer örneğin bir class bir çok etikette yer alıyorken bunların ilkini seçer.

val = document.querySelector("#header");
console.error(val);

val = document.querySelector(".class1");
console.warn(val);

val = document.querySelector("div");
val.style.backgroundColor = "red";
console.log(val);

val = document.querySelector("div:nth-child(2)");
console.log(val);

/* document.querySelector('div').className='Selam'; //div 1 in classlarını sildi yerine Selam classı ekledi

document.querySelector('div').classList.add('div1'); // div 1 in içerisine div1 classı ekledi.

document.querySelectorAll('div').className='div'; // div 1 in içerisine div1 classı ekledi.

console.log(document.body); */

// Multiple Elements

//class name
//document.getElementsByClassName('');

val = document.getElementsByClassName("div");
console.log(val);

console.log(val[1]);

val[0].style.color = "white";
val[0].style.fontSize = "30px";

for (let i = 0; i < val.length; i++) {
  console.log((val[i].style.color = "green"));
}

//document.getElementByTagName()

val = document.getElementsByTagName("div");
console.log(val);

// FATİHE SOR // soruldu çözüldü
x = document.querySelectorAll("body > ul > li>a");
console.log(x);

for (let i = 0; i < x.length; i++) {
  // console.log(x[i].getAttribute('href'));

  x[i].setAttribute("href", "https://bugramerttan.com");
}

//Buradan devam et
