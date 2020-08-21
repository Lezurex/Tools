function onSend() {
    setTimeout(function(){
        var op = document.getElementById("type").value;
        var i = document.getElementById("input").value;
        
        switch(op) {
            case "CF":
                document.getElementById("result").value = (i * (9/5)) + 32;
                break;
            case "FC":
                document.getElementById("result").value = (i - 32) * (5/9);
                break;
            case "CK":
                document.getElementById("result").value = i + 273.15;
                break;
            case "CK":
                document.getElementById("result").value = i - 273.15;
                break;
            default:
                document.getElementById("result").value = op * i;
                break;
        }
    }, 1);
}

document.onkeydown = function (e) {
    e = e || window.event;
    switch (e.which || e.keyCode) {         //Binds enter key to button function
        case 13 :
        case 8:
        case 46:
            onSend();
            break;
    }
}
