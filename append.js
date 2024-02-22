// console.log('append.js');
// 1. where to add?
const placeList = document.getElementById('places-list');
// console.log(placeList);
// What to be added?
const li2 = document.createElement('li');
li2.innerText = 'pahartoli bon';

// 3.add the child
placeList.appendChild(li2);
// 1. where to add?
const mainContainer = document.getElementById('main-container');
// console.log(mainContainer);
// What to be added?
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);
const ul = document.createElement('ul');
const li3 = document.createElement('li');
li3.innerText = 'biriyani';
const li4 = document.createElement('li');
li4.innerText = 'borhani';
const li5 = document.createElement('li');
li5.innerText = 'salad';
ul.appendChild(li3);
ul.appendChild(li4);
ul.appendChild(li5);
section.appendChild(ul);

mainContainer.appendChild(section);
// Another way to do above things
// Set innerHtml Directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
 <li>Punjabi</li>
 <li>Pajama</li>
 <li>Lehanga</li>
 <li>Saree</li>
</ul>

`
mainContainer.appendChild(sectionDress);











