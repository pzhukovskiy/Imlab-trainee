let num
const first = 12.34

document.addEventListener("keydown", function (e) {
  if (e.key == "Tab") {
    num = document.getElementById("second_num").innerHTML =
    +generate().toFixed(2)
  }
})

document.removeEventListener("keydown", function (e) {
  if (e.key == "Tab") {
    num = document.getElementById("second_num").innerHTML =
    +generate().toFixed(2)
  }
});

function show_num() {

  document.getElementById("first_num").innerHTML = +first;


}

function generate() {
  return Math.random() * (100 - -100) + -100;
}

function calc2(choice) {
  let result2
  
  num = document.getElementById("second_num").innerHTML =
  +generate().toFixed(2)

  
  switch (choice) {
    case "+": {
        console.log(typeof(+result2))
        console.log(first)
        console.log(num)
        console.log(typeof(first))
        console.log(typeof(num))
        result2 = +first + +num
        console.log(`Результат суммы ${result2}`);
        document.getElementById("res").innerText = Number(result2.toFixed(2));
        document.getElementById("choice").innerHTML = String(choice);
        break;
    }
    case "-": {
        console.log(typeof(+result2))
        console.log(first)
        console.log(num)
        console.log(typeof(first))
        console.log(typeof(num))
        result2 = +first - +num
        console.log(`Результат разности ${result2}`);
        document.getElementById("res").innerText = Number(result2.toFixed(2));
        document.getElementById("choice").innerHTML = String(choice);
        break;
    }
    case "*": {
        console.log(typeof(+result2))
        console.log(first)
        console.log(num)
        console.log(typeof(first))
        console.log(typeof(num))
        result2 = +first * +num
        console.log(`Результат умножения ${result2}`);
        document.getElementById("res").innerText = Number(result2.toFixed(2));
        document.getElementById("choice").innerHTML = String(choice);
        break;
    }
    case "/": {
        console.log(typeof(+result2))
        console.log(first)
        console.log(num)
        console.log(typeof(first))
        console.log(typeof(num))
        result2 = +first / +num
        console.log(`Результат деления ${result2}`);
        document.getElementById("res").innerText = Number(result2.toFixed(2));
        document.getElementById("choice").innerHTML = String(choice);
        break;
    }
  }
}