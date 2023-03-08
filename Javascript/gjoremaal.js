let history = []
let tekst
let separator = "<br>"

function leggtil() {
    history = []
    tekst = document.getElementById("maal").value
    if (tekst != "") {
        localStorage.setItem(`${tekst}`,`${tekst}`)
        let i = 0
        while (i < localStorage.length) {
            history.push(`⏺ ${localStorage.key(i)}`)
            i++
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
    let i = 0
    while (i < localStorage.length) {
        history.push(`⏺ ${localStorage.key(i)}`)
        i++
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