let val;

val = window.document;
console.log(val);

val = document.all;
console.log(val);

val = document.all.length;
console.log(val);

val = document.all[10];
console.log(val);

val = document.head;
console.log(val);

val = document.body;
console.log(val);

val = document.anchors;
console.log(val);

val = document.URL;
console.log(val);

val = document.domain;
console.log(val);

val = document.images;
console.log(val);

val = document.title;
console.log(val);

val = document.forms;
console.log(val);

/* val = document.forms[0];
console.log(val);

val = document.forms[0].id;
console.log(val);

val = document.forms[0].method;
console.log(val);

val= document.forms[0].action;
console.log(val); */

val=document.scripts;
console.log(val);

val=document.scripts[0];
console.log(val);

val=document.scripts[0].getAttribute('src');
console.log(val);

/* val=document.scripts[0].setAttribute('src',"değer gir");
console.log(val); */

val = document.getElementById('form1');
console.log(val);