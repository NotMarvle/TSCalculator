function submit() {
    const firstInput = document.getElementById("first");
    const secondInput = document.getElementById("second");
    const operatorInput = document.getElementById("operator");
    const first = parseInt(firstInput.value);
    const second = parseInt(secondInput.value);
    const operator = (operatorInput.value);
    if (operator === "+") {
        document.getElementById("output").innerHTML = (first + second).toString();
    }
    if (operator === "-") {
        document.getElementById("output").innerHTML = (first - second).toString();
    }
    if (operator === "*") {
        document.getElementById("output").innerHTML = (first * second).toString();
    }
    if (operator === "/") {
        document.getElementById("output").innerHTML = (first / second).toString();
    }
}
