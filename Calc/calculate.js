let x = 0;
let y = 0;
function addFirstInput() {
    if (x < 1) {
        var str = '<textarea placeholder = "Введите 1 число"></textarea> <div id="input' + (x + 1) + '"></div>';
        document.getElementById('input' + x).innerHTML = str;
        x++;
    }
}

function addSecondInput() {
    if (y < 1) {
        var str = '<textarea placeholder = "Введите 2 число"></textarea> <div id="inputt' + (y + 1) + '"></div>';
        document.getElementById('inputt' + y).innerHTML = str;
        y++;
    }
}