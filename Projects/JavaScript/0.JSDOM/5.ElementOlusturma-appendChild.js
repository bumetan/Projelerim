//Creating Elements

// create element

const li = document.createElement('li');


//add class
li.className="class1";  


//add attribute 
li.setAttribute('title','new item');

//text node

const text = document.createTextNode('Bu JS ile eklendi');
li.appendChild(text);


const a = document.createElement('a');
a.setAttribute('href','https://google.com');
a.className='class a';
a.innerHTML='<i class="selamke"> selam</i>';

// append a to li

li.appendChild(a);

//append li to ul
document.querySelector('#ul1').appendChild(li);