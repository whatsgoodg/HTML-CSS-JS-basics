<h1 style="font-size: 20px">Basics</h1>

```js
//Get some element
let some_element;
some_element = document.body.children[0]; //Tree structure, array as well
some_element = document.body.firstElementChild;
some_element = document.body.querySelector('p'); //id, class, element name

//Create new element
let new element;
new_element = document.body.createElement('a');

//Apply some style
some_element.style.color = 'red'
some_element.className = 'some-name'; // by implementing some styles in stylesheet with '.some-name' selector

//Insert some element
new_element.href = ' https://google.com';
new_element.textContent = 'This leads to Google !';
some_element.appendChild(new_element); 
/* or */ 
some_element.innerHTML = '<a href="https://google.com">This leads to Google !</a>';

//Remove element
new_element.remove();
new_element.parentElement.removeChild(first_h1);
```


