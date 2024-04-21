let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let historydiv = document.querySelector('.history-box');

let history = [];

let str = "";

function updateHistory(calculation){
    // historydiv.innerText += calculation + '\n';
    history.push(calculation);
    if(history.length > 10){
        history.shift();
        toggleHistory();
    }
    historydiv.innerHTML = history.join('<br>');
}
function toggleHistory(){
    // var histBox = document.querySelector(".history");
    // if(window.getComputedStyle(historydiv).display === "none"){
    //     historydiv.style.display = "block";
    // }
    // else{
    //     historydiv.style.display = "none";
    // }

    historydiv.classList.toggle('show');
}

// function addToInput(value){
//     str += value;
//     input.value = str;
// }
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            let result = eval(str);
            result = parseFloat(result.toFixed(5));
            input.value = result;
            updateHistory(str + ' = ' + result);
            str = '';
        }
        else if(e.target.innerHTML == 'AC'){
            str = "";
            input.value = str;
        }
        else if(e.target.innerHTML == 'DEL'){
            str = str.substring(0, str.length-1);
            input.value = str;
        }
        else if(e.target.innerHTML == '%'){
            str += '/100';
            input.value = str;
        }
        else if(e.target.innerHTML == 'mod'){
            str += '%';
            input.value = str;
        }
        else if(e.target.innerHTML == '+/-'){
            if(str.startsWith('-')){
                str = str.substring(1);
            } else{
                str = '-' + str;
            }
        }
        else if(e.target.innerHTML == 'x<sup>2</sup>'){
            str = Math.pow(eval(str), 2);
            input.value = str;
        }
        else if(e.target.innerHTML == '√x'){
            str = Math.sqrt(eval(str));
            input.value = str;
        }
        else{
            str += e.target.innerHTML;
            input.value = str;
        }
    })
})

input.addEventListener('click', toggleHistory);