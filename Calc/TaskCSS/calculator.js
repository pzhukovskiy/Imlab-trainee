let first_num = '';
let second_num = '';

const state = {
    choice: null,
}

function inputFirst(choice) {
    state.choice = choice
}

document.addEventListener("keydown", function(e) {
    if(state.choice === null) return;
    if (state.choice) {
        switch(e.code) {
            case "Numpad0": {
                document.getElementById("num1").innerText += e.key;
                first_num += +e.key;
                break;
            }
            case "Numpad1": {
                document.getElementById("num1").innerText += e.key;
                first_num += +e.key;
                break;
            }
            case "Numpad2": {
                document.getElementById("num1").innerText += e.key;
                first_num += +e.key;
                break;
            }
            case "Numpad3": {
                document.getElementById("num1").innerText += e.key;
                first_num += +e.key;
                break;
            }
            case "Numpad4": {
                document.getElementById("num1").innerText += e.key;
                first_num += +e.key;
                break;
            }
            case "Numpad5": {
                document.getElementById("num1").innerText += e.key;
                first_num += +e.key;
                break;
            }
            case "Numpad6": {
                document.getElementById("num1").innerText += e.key;
                first_num += +e.key;
                break;
            }
            case "Numpad7": {
                document.getElementById("num1").innerText += e.key;
                first_num += +e.key;
                break;
            }
            case "Numpad8": {
                document.getElementById("num1").innerText += e.key;
                first_num += +e.key;
                break;
            }
            case "Numpad9": {
                document.getElementById("num1").innerText += e.key;
                first_num += +e.key;
                break;
            }
            case "Backspace": {
                first_num = first_num.substring(0, first_num.length - 1);
                document.getElementById("num1").innerText = first_num;
                break;
            }
            case "NumpadDecimal": {
                if (first_num.indexOf('.') === -1) {
                    first_num = first_num += e.key;
                    document.getElementById("num1").innerText = first_num;
                }
                else {

                }
            }
        }
    } else {
        switch(e.code) {
            case "Numpad0": {
                document.getElementById("num2").innerText += e.key;
                second_num += +e.key;
                // console.log(second_num, e.key);
                break;
            }
            case "Numpad1": {
                document.getElementById("num2").innerText += e.key;
                second_num += +e.key;
                break;
            }
            case "Numpad2": {
                document.getElementById("num2").innerText += e.key;
                second_num += +e.key;
                break;
            }
            case "Numpad3": {
                document.getElementById("num2").innerText += e.key;
                second_num += +e.key;
                break;
            }
            case "Numpad4": {
                document.getElementById("num2").innerText += e.key;
                second_num += +e.key;
                break;
            }
            case "Numpad5": {
                document.getElementById("num2").innerText += e.key;
                second_num += +e.key;
                break;
            }
            case "Numpad6": {
                document.getElementById("num2").innerText += e.key;
                second_num += +e.key;
                break;
            }
            case "Numpad7": {
                document.getElementById("num2").innerText += e.key;
                second_num += +e.key;
                break;
            }
            case "Numpad8": {
                document.getElementById("num2").innerText += e.key;
                second_num += +e.key;
                break;
            }
            case "Numpad9": {
                document.getElementById("num2").innerText += e.key;
                second_num += +e.key;
                break;
            }
            case "Backspace": {
                second_num = second_num.substring(0, second_num.length - 1);
                document.getElementById("num2").innerText = second_num;
                break;
            }
            case "NumpadDecimal": {
                if (second_num.indexOf('.') === -1) {
                    second_num = second_num += e.key;
                    document.getElementById("num2").innerText = second_num;
                }
                else {

                }
            }
        } 
    }
});

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener('click', () => inputFirst(true));
button2.addEventListener('click', () => inputFirst(false));


function calc(action) {
    let result;

    switch(action) {
        case '+': {
            result = +first_num + +second_num;
            createDiv(result, '+');
            break;
        }
        case '-': {
            result = +first_num - +second_num;
            createDiv(result, '-');
            break;
        }
        case '*': {
            result = +first_num * +second_num;
            createDiv(result, '*');
            break;
        }
        case '/': {
            if (+second_num != 0) {
                result = +first_num / +second_num;
                createDiv(result, '/');
                break;
            }
            alert("???? ?????????? 0");
            return 0;
        }
    }
    document.getElementById("result").innerText = Number(result.toFixed(2));
    document.getElementById("action").innerHTML = String(action);
}

const HISTORY = []
let id = 0;

function delElem() {
    HISTORY.splice(HISTORY.indexOf(HISTORY.find(item => item.id === id), 1));
    document.getElementById('historyres').innerHTML = HISTORY.map((name) => {
        return `<div style="display: flex;">
            <span>
                <span>${name.first_num}</span>
                <span>${name.action}</span>
                <span>${name.second_num}</span>
                <span> = </span>
                <span>${name.history}</span>
                <button id=${name.id} onclick="delElem()">??????????????</button>
            </span>
        </div>`
    }).join('');
}

function clearHistory() {
    HISTORY.splice(0, HISTORY.length + 1);
    document.getElementById('historyres').innerHTML = HISTORY.map((name) => {
        return `<div style="display: flex;">
            <span>
                <span>${name.first_num}</span>
                <span>${name.action}</span>
                <span>${name.second_num}</span>
                <span> = </span>
                <span>${name.history}</span>
                <button id=${name.id} onclick="delElem()">??????????????</button>
            </span>
        </div>`
    }).join('');
}

function createDiv(value, action) {
    let history = '';
    history = value.toFixed(2);

    function historyShow(){
        HISTORY.unshift({first_num, action, second_num, history, id});
        document.getElementById('historyres').innerHTML = HISTORY.map((name) => {
            localStorage.setItem('localHistory', name.first_num + ' ' + name.action + ' ' + name.second_num + ' ' + ' = ' + name.history);
            name.id++;
            return `<div style="display: flex;">
                <span>
                    <span>${name.first_num}</span>
                    <span>${name.action}</span>
                    <span>${name.second_num}</span>
                    <span> = </span>
                    <span>${name.history}</span>
                    <button id=${name.id} onclick="delElem()" style="margin-left: 20px">??????????????</button>
                </span>
            </div>`
        }).join(''); 
    }

    const btnShow = document.getElementById('btnShow');
    btnShow.addEventListener('click', () => historyShow());

    const btnClear = document.getElementById('clearShow');
    btnClear.addEventListener('click', () => clearHistory());
}

/* 
case "NumpadDecimal": {
    if(action){
        if (num1.indexOf('.') === -1) {
                setNum1(num1 + e.key);
        }
    }else {
    if (num2.indexOf('.') === -1) {
        setNum2(num2 + e.key);
        }
    }
}
*/

//local storage
//???????????????? ?????????????? ??????????????

// document.getElementById("historyresLocal").innerHTML = localStorage.getItem("localHistory");
