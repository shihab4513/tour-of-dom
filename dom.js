console.log("Hello from CSS");
// console.log(document);
// console.log(document.body);
// We can change element color in js 
document.getElementById('fruits-title').style.color = 'red'
document.getElementById('fruits-title').style.backgroundColor = 'aqua'
document.getElementById('fruits-title').style.textAlign = 'center'

// title variable will hold all the attribute of fruits-title 
const title = document.getElementById('fruits-title')
// it will print all the id that title hold
// console.log(title.getAttribute('id'));
// it will print all the class that title hold
// console.log(title.getAttribute('class'));
// another way to print all the class
// console.log(title.classList);
// We also can add class in js
title.classList.add('surma')
// console.log(title.classList)
// We can also remove class in js
title.classList.remove('surma')
// console.log(title.classList);
// It will do the following : When we hover mouse on fruits-title it will show "tooltip set by JavaScript" 
title.setAttribute('title', 'tooltip set by JavaScript')
// It will hold the elements that has fruits container class ..+-?
const title0 = console.log(document.getElementsByClassName('fruits-container')[0]);
// It will print inner html of the elements that has fruits-container class
// console.log(document.getElementsByClassName('fruits-container')[0].innerHTML);
// By the way we can also change inner html in js below shown how to do it 
document.getElementsByClassName('fruits-container')[0].innerHTML = '<h2>ABC Wow dom is changing</h2>'
// console.log(document.getElementsByClassName('fruits-container')[0].innerHTML);

// We can just print inner text
// console.log(document.getElementsByClassName('fruits-container')[0].innerText);



// ---------------------------------------------------------------24.7
// console.log(placesContainer.childNodes);
// console.log(placesContainer.childNodes[1].childNodes.nextSibling);
const placeUL = document.querySelector('#places-container ul');
// console.log(placeUL);
const li = document.createElement('li');
li.innerText = 'Brand New Place to go';
// Here append mean add .it will add li variable in placeUL list
placeUL.append(li);
const li1 = document.createElement('li');
li1.innerText = 'Another dynamic li';
placeUL.append(li1);
// We can find an element parent node ,child node and sibling

// console.log(placeUL.parentNode.parentNode.parentNode);

