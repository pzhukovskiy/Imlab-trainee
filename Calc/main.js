function calc(choice) {
    let inp1 = +document.getElementById("inp1").value;
    let inp2 = +document.getElementById("inp2").value;
    let result;

    switch(choice) {
        case '+': result = inp1 + inp2;break;
        case '-': result = inp1 - inp2;break;
        case '*': result = inp2 * inp2;break;
        case '/': {
            if (inp1 != 0 && inp2 != 0) {
                result = inp1 / inp2;
                break;
            }
            alert("Вы ввели 0");
        }
    }
    document.getElementById("res").innerText = Number(result);
    document.getElementById("choice").innerHTML = String(choice);
}