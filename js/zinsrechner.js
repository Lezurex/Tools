function onChange() {
    var type = document.getElementById("type");
    var k0 = document.getElementById("k0");
    var p = document.getElementById("p");
    var z = document.getElementById("output");

    switch (type.value) {
        case "1":
        case "2":
            k0.removeAttribute("readonly");
            p.removeAttribute("readonly");
            z.setAttribute("readonly", "true");
            z.value = null;
            break;
        case "3":
            k0.removeAttribute("readonly");
            z.removeAttribute("readonly");
            p.setAttribute("readonly", "true");
            p.value = null;
            break;
        case "4":
            p.removeAttribute("readonly");
            z.removeAttribute("readonly");
            k0.setAttribute("readonly", "true");
            k0.value = null;
            break;
    }
}

function onSend() {

    setTimeout(function() {
        var k0 = document.getElementById("k0");
        var p = document.getElementById("p");
        var z = document.getElementById("output");
        var type = document.getElementById("type");
    
        switch(type.value) {
            case "1":
                var temp = k0.value * (p.value / 100);
                if(temp > 199) {
                    z.value = (temp * 0.65).toFixed(2);
                }
                else {
                    z.value = temp.toFixed(2);
                }
                break;
            case "2":
                z.value = (k0.value * (p.value / 100)).toFixed(2);
                break;
            case "3":
                p.value = ((z.value * 100) / k0.value).toFixed(2);
                break;
            case "4":
                k0.value = ((z.value * 100) / p.value).toFixed(2);
        }
    }, 1);
}

document.onkeydown = function (e) {
    e = e || window.event;
    switch (e.which || e.keyCode) {
          case 13 : onSend();
              break;
    }
}
