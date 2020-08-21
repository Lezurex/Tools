let shouldHandleKeyDown = true;
let n = 0;

document.addEventListener("keydown", function (event) {
    if (!shouldHandleKeyDown) return;
    shouldHandleKeyDown = false;
    if (event.keyCode == 13) {
        onClick(false);
    }
});

document.addEventListener("keyup", function(event) {
    shouldHandleKeyDown = true;
});

function handleClick(cb) {
    var i = 0;
    if(document.getElementById("add").checked == true) {
        i++;
    }
    if(document.getElementById("subtract").checked == true) {
        i++;
    }
    if(document.getElementById("multiply").checked == true) {
        i++;
    }
    if(document.getElementById("divide").checked == true) {
        i++;
    }

    if(i == 1) {
        if(document.getElementById("add").checked) {
            document.getElementById("add").setAttribute("disabled", "disabled");
        }
        if(document.getElementById("subtract").checked) {
            document.getElementById("subtract").setAttribute("disabled", "disabled");
        }
        if(document.getElementById("multiply").checked) {
            document.getElementById("multiply").setAttribute("disabled", "disabled");
        }
        if(document.getElementById("divide").checked) {
            document.getElementById("divide").setAttribute("disabled", "disabled");
        }
    }

    if(i > 1) {
        document.getElementById("add").removeAttribute("disabled");
        document.getElementById("subtract").removeAttribute("disabled");
        document.getElementById("multiply").removeAttribute("disabled");
        document.getElementById("divide").removeAttribute("disabled");
    }
}


var min;
var max;

var operation = null;
var random1 = null;
var random2 = null;
var solution = null;

var loop;

function onClick(noValidate = true) {
    min = document.getElementById("min").value;
    max = document.getElementById("max").value;

    if (!noValidate) {
        if (document.getElementById("user-input").value == solution) {
            document.getElementById("feedback").innerHTML = "Richtig!";
            document.getElementById("feedback").style.color = "greenyellow";
        } else {
            document.getElementById("feedback").innerHTML = "Leider falsch! Die richtige Lösung wäre: " + solution;
            document.getElementById("feedback").style.color = "red";
        }
        document.getElementById("user-input").value = null;
    }
    if(noValidate) {
        document.getElementById("feedback").innerHTML = "<br>";
    }

    loop = true;

    while(loop) {
        operation = getRandomOperation();
        random1 = getRandomArbitrary(min, max);
        random2 = getRandomArbitrary(min, max);
        solution = getSolution(random1, operation, random2);

        if(Number.isInteger(solution)) {
            loop = false;
        }
    }

    document.getElementById("equation").innerHTML = random1 + getOperationSign(operation) + random2 + " = ";
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (+max - +min) + +min);
}

function getRandomOperation() {
    var randomState = true;
    var operationRandom = null;

    while(randomState = true) {
        operationRandom = getRandomArbitrary(1, 5);

        switch (operationRandom) {
            case 1:
                if(document.getElementById("add").checked == true) {
                    randomState = false;
                    return operationRandom;
                }
                break;
            case 2:
                if(document.getElementById("subtract").checked == true) {
                    randomState = false;
                    return operationRandom;
                }
                break;
            case 3:
                if(document.getElementById("multiply").checked == true) {
                    randomState = false;
                    return operationRandom;
                }
                break;
            case 4:
                if(document.getElementById("divide").checked == true) {
                    randomState = false;
                    return operationRandom;
                }
                break;
            default:
                randomState = false;
                return 1;
        }
    }
}

function getSolution(random1, operation, random2) {
    switch(operation) {
        case 1:
            return random1 + random2;
            break;
        case 2:
            return random1 - random2;
            break;
        case 3:
            return random1 * random2;
            break;
        case 4:
            return random1 / random2;
            break;
    }
}

function getOperationSign(operation) {
    switch (operation) {
        case 1:
            return " + ";
        case 2:
            return " - ";
        case 3:
            return " * ";
        case 4:
            return " / ";
    }
}

function wait(ms)
{
    var d = new Date();
    var d2 = null;
    do { d2 = new Date(); }
    while(d2-d < ms);
}