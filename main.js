let calc = document.querySelector(".calc");
let result = document.querySelector(".result");
let numbers = document.querySelectorAll(
  ".zero,.one,.two,.three,.four,.five,.six,.seven,.eight,.nine,.point"
);
let ac = document.querySelector(".ac");
let operators = document.querySelectorAll(".div,.mul,.sum,.sub");
let equal = document.querySelector(".equal");
let del = document.querySelector(".del");
console.log(operators);
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    result.innerHTML = `${result.innerHTML}${numbers[i].innerHTML}`;
  });
}
ac.onclick = function () {
  calc.innerHTML = "";
  result.innerHTML = "";
};
del.onclick = function () {
  result.innerHTML = result.innerHTML.slice(0, -1);
};
for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    console.log(calc.innerHTML.slice(-1))
    if (
      calc.innerHTML.slice(-1) != "+" ||
      calc.innerHTML.slice(-1) != "/" ||
      calc.innerHTML.slice(-1) != "*" ||
      calc.innerHTML.slice(-1) != "-"
    ) {
      calc.innerHTML = result.innerHTML;
      calc.innerHTML = `${result.innerHTML}${operators[i].innerHTML}`;
      result.innerHTML = "";
    }
    else{
        console.log("hello")
    }
  });
}

equal.onclick = function () {
  switch (calc.innerHTML.slice(-1)) {
    case "+":
      result.innerHTML = +calc.innerHTML.slice(0, -1) + +result.innerHTML;
      break;
    case "/":
      result.innerHTML = +calc.innerHTML.slice(0, -1) / +result.innerHTML;
      break;
    case "*":
      result.innerHTML = +calc.innerHTML.slice(0, -1) * +result.innerHTML;
      break;
    case "-":
      result.innerHTML = +calc.innerHTML.slice(0, -1) - +result.innerHTML;
      break;

    default:
      break;
  }
};
