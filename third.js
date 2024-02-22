const main = document.getElementById('main-container');

const section = document.createElement('section');

section.innerHTML = `
<h1 class="section-title">Section title-4</h1>
<ul>
    <li>List item-1</li>
    <li>List item-2</li>
    <li>List item-3</li>
    <li>List item-4</li>
</ul>
`
main.appendChild(section);