function submit() {
    const firstInput = document.getElementById("first") as HTMLInputElement;
    const secondInput = document.getElementById("second") as HTMLInputElement;
    const operatorInput = document.getElementById("operator") as HTMLInputElement;
    const first: number = parseInt(firstInput.value);
    const second: number = parseInt(secondInput.value);
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
