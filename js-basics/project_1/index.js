let input_ele = document.getElementById('product-name');

function typed(event){
    let len = event.target.value.length
    let remain = document.getElementById('remaining-chars');
    remain.textContent = len;
    if(len > 49) {
        input_ele.className = 'warning';
        remain.className = 'warning';
    }
    else {
        input_ele.className = '';
        remain.className = '';
    }
}
input_ele.addEventListener('input', typed);


console.log(input_ele.classList.value);