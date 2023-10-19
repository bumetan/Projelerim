 // Traversing the Dom
 
 
 let val;
 let list = document.querySelector('#ul1');

 val = list;
 
 console.log(val);

 val = list.childNodes;
 console.log(val);

 //html de bırakılan boşlularıda alır, örneğin 2 <p> arasında <p> yazı </p>"boşluk"<p> </p> şeklinde yazılırsa aradaki boşluk text olarak verilir.

val = list.children;
console.log(val);

// htmlde bırakılan boşlukları vs saymaz direk elementleri alır.

val = list.childNodes[0];
console.log(val);


val = list.childNodes[1].nodeName;
console.log(val);
//Etiketin ismini verir.


val = list.childNodes[0].nodeType;
console.log(val);

// nodeType bir değer döndürür bu değerin ne olduğuna w3schooldan bakabilirsin. 

val=list.children;  // HTML olarak verir. 
console.log(val);

val=list.children[2];
console.log(val);

val=list.children[2].children;
console.log(val,'children 2 nin childrens');

val=list.firstChild;  //ilk node gelir
console.log(val);

val=list.firstElementChild; //ilk etiket gelir. 
console.log(val);

val=list.lastChild; // son node seçer.
console.log(val);

val=list.lastElementChild; // son etiketi seçer.
console.log(val);

val=list.childElementCount; //kaç element olduğunu görür
console.log(val);

val = list.parentNode; //Parenti seçer. 
console.log(val);

val=list.parentElement; //Üst etikete gider.
console.log(val);

val=list.parentElement.parentElement; // Üstün üstüne gider :)
console.log(val);

val = list.children[0].nextSibling; //Bir sonraki elemana geçer.
console.log(val);

val = list.children[0].nextElementSibling; //Bir sonraki elemente geçer.
console.log(val);

val = list.children[0].previousSibling; //Bir önceki elemana geçer.
console.log(val);

val = list.children[0].previousElementSibling; //Bir önceki elemente geçer.
console.log(val);


for(let i=0;i<list.children.length;i++){

    console.log(list.children[i]);
}