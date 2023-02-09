// Practice what you learned!

// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"

let first_button = document.body.children[2].children[4];
document.body.children[2].children[6].id = 'second-button';
let second_button = document.getElementById('second-button');


// 2) Add "click" event listener to both buttons (with two different functions).
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
//    - Output the second button WITHOUT using the variable in which it's stored

function shared_clicked(event) {
    console.dir(event.target);
}
first_button.addEventListener('click', shared_clicked);
second_button.addEventListener('click', shared_clicked);
// 3) Now select and store the paragraphs mentioned in the text you see on the page
//    (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the
//      mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
let first_p = document.body.children[2].children[5];
let second_p = document.body.children[2].children[1 ];

// 4) Change the functions from (2) such that:
//    - The first button removes the third paragraph (i.e. the <p> prior to it)
//    - The second button changes the background color of the first paragraph to blue

// 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
//    Note: You'll have to add those classes to the styles.css file first!

function first_b_cliked(event){
    first_p.parentElement.removeChild(first_p);
}
function second_b_clicked(event){
    let text = second_p.textContent;
    //second_p.innerHTML = '<p style=\"background-color: blue\">' + text + '</p>'
    second_p.style.backgroundColor = 'blue';
}

first_button.addEventListener('click', first_b_cliked);
second_button.addEventListener('click', second_b_clicked);