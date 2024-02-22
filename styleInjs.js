// We will use query selector in html tag selection.Section variable will hold all the section 
const sections = document.querySelectorAll('section');
// Now below code will print all the section 
for (const section of sections) {
    // console.log(section);
    // You can style all the section in loop
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.paddingLeft = '7px';
    section.style.backgroundColor = 'lightgrey';
}
const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = 'yellow';
// We can add new class from js file
placesContainer.classList.add('text-center');
placesContainer.classList.add('large-text');