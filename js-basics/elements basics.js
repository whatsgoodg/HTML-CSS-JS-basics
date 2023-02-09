// Insert elements

let new_anchor_tag = document.createElement('a'); // 1. Create a new element
new_anchor_tag.href = ' https://google.com';
new_anchor_tag.textContent = 'This leads to Google !';

let first_p_tag = document.querySelector('p'); // 2. Get an element which will be a parent element 
first_p_tag.appendChild(new_anchor_tag);  // 3. Add it
//append, insert 사용 가능.

//Remove elements
let first_H1 = document.querySelector('h1');

first_H1.remove(); // Remove h1 element
first_H1.parentElement.removeChild(first_H1); //It works every browser

//Insert elements + text
first_p_tag.innerHTML = "I'm an <strong>idiot</strong>";
first_p_tag.textContent = "I'm an <strong>idiot</strong>";

//Replace elements with other elements