console.log('first file');

const allLi = document.getElementsByTagName('li');
console.log(allLi);

// class diye ek ba ekadhik kichu select korte chaile
const allTitles = document.getElementsByClassName('section-title');
console.log(allTitles);

const secondSection = document.getElementById('second-section');
console.log(secondSection);
secondSection.style.color = 'white';
secondSection.style.backgroundColor = 'tomato';

// document.querySelectorAll
// document.querySelector