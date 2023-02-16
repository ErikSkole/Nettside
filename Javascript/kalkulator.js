kalk.addEventListener("submit", (e) => {
    e.preventDefault()
    let svar
    let x = document.getElementById("x").value;
    let y = document.getElementById("y").value;
    let kalk = document.getElementById("kalk");
    
    if (document.getElementById("operator").value == "a") {
        svar = Number(x) + Number(y)
    }
    else if (document.getElementById("operator").value == "b") {
        svar = Number(x) - Number(y)
    }
    else if (document.getElementById("operator").value == "c") {
        svar = x *= y
    }
    else if (document.getElementById("operator").value == "d") {
        svar = x /= y
    }

    document.getElementById("output").innerHTML = svar
});