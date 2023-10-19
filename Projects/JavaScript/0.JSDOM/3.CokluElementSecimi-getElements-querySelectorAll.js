// MULTİPLE ELEMENTS

//class name
//documentgetElementsByClassName()

//li etiketi olanlara selam classı ekledim.
let x;
x = document.querySelectorAll('li');
console.log(x);
for (let i = 0; i < x.length; i++) {
    x[i].classList.add("selam");
}
let val;
val = document.getElementsByClassName('selam');

// val=document.getElementsByClassName('selam')[2];
// console.log(val);

//YADA

val=val[2];
console.log(val);

val.style.color="blue";
val.style.fontSize="24px";


//document.getElementsByTagname();


// Sayfadaki bütün a etiketlerini seçer

let va;
va=document.getElementsByTagName('a');
console.log(va);

// 2.ul deki a etiketlerini seçer

va=document.getElementById('ul2');
va=va.getElementsByTagName('a');
console.log(va);

//document.querySelector();

let o;
o=document.querySelector('li');
console.log(o);

//querySelector() parantez içerisinde belirtiken etiket class veya id nin ilkini seçer.
//getElements den ayrı olarak class aratılacaksa .class id aratılacaksa #id şeklinde aratılır.

//document.querySelectorAll();

//querySelectorAll() diğerinden farklı olarak seçilen değerin bir NodeListini verir.

//NodeList ile HTML Collection arasında ki fark ise NodeListte foreach kullanılabilir, HTML Collection da kullanılamaz.

//ForEach

function diziGoruntule(element,index,arr){
    
        console.log(index+1," ",element);
        console.warn(arr.length);

}
val = document.querySelectorAll('li');

val.forEach(diziGoruntule);

for(i=0;i<val.length;i++)
{
    console.log(val[i]);
}

val = document.querySelectorAll('ul');

val.forEach(diziGoruntule);
