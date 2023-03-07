let history = []
let idk = true
let gjoremaal
let tekst
let separator = "<br>"

function leggtil() {
    history = []
    tekst = document.getElementById("maal").value
    if (tekst != "") {
        localStorage.setItem(`${tekst}`,`${tekst}`)
        gjoremaal = localStorage.getItem(`${tekst}`)
        for (let i = 0; i < localStorage.length; i++) {
            history.push(localStorage.key(i))
        }
        function separate(history, separator) {
            let text = history.join(separator)
            document.getElementById("gjoreList").innerHTML = text
        }
        separate(history, separator)
        console.log(localStorage)
        console.log(history)
        
    }
    document.getElementById("maal").value = ""
}

function lastInn() {
    for (let i = 0; i < localStorage.length; i++) {
        history.push(localStorage.key(i))
    }
    function separate(history, separator) {
        let text = history.join(separator)
        document.getElementById("gjoreList").innerHTML = text
    }
    separate(history, separator)
}


function clearAll() {
    localStorage.clear()
    history = []
    document.getElementById("gjoreList").innerHTML = history
}