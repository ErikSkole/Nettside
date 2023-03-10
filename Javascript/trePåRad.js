let hvemSinTur = 1
let vinn = false
let boks = document.getElementById("vinn")
let hvemVant = 0
let runder = 0

let spill = {
    rad1: [0, 0, 0],
    rad2: [0, 0, 0],
    rad3: [0, 0, 0],
}

function resetSpill() {
    spill = {
        rad1: [0, 0, 0],
        rad2: [0, 0, 0],
        rad3: [0, 0, 0],
    }
    for (let i = 1; i < 10; i++) {
        document.getElementById(`bildeRute${i}-1`).classList = "hiddenImg"
        document.getElementById(`bildeRute${i}-2`).classList = "hiddenImg"
    }

    hvemSinTur = 1
    vinn = false
    hvemVant = 0
    runder = 0
}

function checkWin() {
    let forsteRad = 0
    let andreRad = 0
    let tredjeRad = 0
    let colonne1 = spill.rad1[0] + spill.rad2[0] + spill.rad3[0]
    let colonne2 = spill.rad1[1] + spill.rad2[1] + spill.rad3[1]
    let colonne3 = spill.rad1[2] + spill.rad2[2] + spill.rad3[2]
    let diagonal1 = spill.rad1[0] + spill.rad2[1] + spill.rad3[2]
    let diagonal2 = spill.rad1[2] + spill.rad2[1] + spill.rad3[0]

    for (let i = 0; i < 3; i++) {
        forsteRad += spill.rad1[i]
        andreRad += spill.rad2[i]
        tredjeRad += spill.rad3[i]
    }
    if (forsteRad == 3 || andreRad == 3 || tredjeRad == 3) {
        console.log("X vinner!")
        hvemVant = 1
        winCondition()
    }
    else if (forsteRad == 15 || andreRad == 15 || tredjeRad == 15) {
        console.log("O vinner!")
        hvemVant = 2
        winCondition()
    }
    else if (colonne1 == 15 || colonne2 == 15 || colonne3 == 15) {
        console.log("O vinner!")
        hvemVant = 2
        winCondition()
    }
    else if (colonne1 == 3 || colonne2 == 3 || colonne3 == 3) {
        console.log("X vinner!")
        hvemVant = 1
        winCondition()
    }
    else if (diagonal1 == 3 || diagonal2 == 3) {
        console.log("X vinner!")
        hvemVant = 1
        winCondition()
    }
    else if (diagonal1 == 15 || diagonal2 == 15) {
        console.log("O vinner!")
        hvemVant = 2
        winCondition()
    }
    if (runder == 9) {
        console.log("Ingen vinner!")
        hvemVant = 3
        winCondition()
    }
}

function winCondition() {
    vinn = true
    if (hvemVant == 1) {
        document.getElementById("vinn_tekst").innerHTML = `Yoo "X" vant`
    }    
    else if (hvemVant == 2) {
        document.getElementById("vinn_tekst").innerHTML = `Yoo "O" vant`
    }
    else if (hvemVant == 3) {
        document.getElementById("vinn_tekst").innerHTML = "Ingen vant"
    }
    boks.classList.toggle("hidden")
}

function fjernBoks() {
    boks.classList.toggle("hidden")
}

function rute1Click() {
    if (vinn == false) {
        if (hvemSinTur == 1 && spill.rad1[0] == 0) {
            spill.rad1 = [1, spill.rad1[1], spill.rad1[2]]
            document.getElementById("bildeRute1-1").classList.toggle("hiddenImg")
            hvemSinTur = 2
            runder++
        }
        else if (hvemSinTur == 2 && spill.rad1[0] == 0) {
            spill.rad1 = [5, spill.rad1[1], spill.rad1[2]]
            document.getElementById("bildeRute1-2").classList.toggle("hiddenImg")
            hvemSinTur = 1
            runder++
        }
        checkWin()
    }
    
}

function rute2Click() {
    if (vinn == false) {
        if (hvemSinTur == 1 && spill.rad1[1] == 0) {
            spill.rad1 = [spill.rad1[0], 1, spill.rad1[2]]
            document.getElementById("bildeRute2-1").classList.toggle("hiddenImg")
            hvemSinTur = 2
            runder++
        }
        else if (hvemSinTur == 2 && spill.rad1[1] == 0) {
            spill.rad1 = [spill.rad1[0], 5, spill.rad1[2]]
            document.getElementById("bildeRute2-2").classList.toggle("hiddenImg")
            hvemSinTur = 1
            runder++
        }
        checkWin()
    }
    
}

function rute3Click() {
    if (vinn == false) {
        if (hvemSinTur == 1 && spill.rad1[2] == 0) {
            spill.rad1 = [spill.rad1[0], spill.rad1[1], 1]
            document.getElementById("bildeRute3-1").classList.toggle("hiddenImg")
            hvemSinTur = 2
            runder++
        }
        else if (hvemSinTur == 2 && spill.rad1[2] == 0) {
            spill.rad1 = [spill.rad1[0], spill.rad1[1], 5]
            document.getElementById("bildeRute3-2").classList.toggle("hiddenImg")
            hvemSinTur = 1
            runder++
        }
        checkWin()
    }
}

function rute4Click() {
    if (vinn == false) {
        if (hvemSinTur == 1 && spill.rad2[0] == 0) {
            spill.rad2 = [1, spill.rad2[1], spill.rad2[2]]
            document.getElementById("bildeRute4-1").classList.toggle("hiddenImg")
            hvemSinTur = 2
            runder++
        }
        else if (hvemSinTur == 2 && spill.rad2[0] == 0) {
            spill.rad2 = [5, spill.rad2[1], spill.rad2[2]]
            document.getElementById("bildeRute4-2").classList.toggle("hiddenImg")
            hvemSinTur = 1
            runder++
        }
        checkWin()
    }
}

function rute5Click() {
    if (vinn == false) {
        if (hvemSinTur == 1 && spill.rad2[1] == 0) {
            spill.rad2 = [spill.rad2[0], 1, spill.rad2[2]]
            document.getElementById("bildeRute5-1").classList.toggle("hiddenImg")
            hvemSinTur = 2
            runder++
        }
        else if (hvemSinTur == 2 && spill.rad2[1] == 0) {
            spill.rad2 = [spill.rad2[0], 5, spill.rad2[2]]
            document.getElementById("bildeRute5-2").classList.toggle("hiddenImg")
            hvemSinTur = 1
            runder++
        }
        checkWin()
    }
}

function rute6Click() {
    if (vinn == false) {
        if (hvemSinTur == 1 && spill.rad2[2] == 0) {
            spill.rad2 = [spill.rad2[0], spill.rad2[1], 1]
            document.getElementById("bildeRute6-1").classList.toggle("hiddenImg")
            hvemSinTur = 2
            runder++
        }
        else if (hvemSinTur == 2 && spill.rad2[2] == 0) {
            spill.rad2 = [spill.rad2[0], spill.rad2[1], 5]
            document.getElementById("bildeRute6-2").classList.toggle("hiddenImg")
            hvemSinTur = 1
            runder++
        }
        checkWin()
    }
}

function rute7Click() {
    if (vinn == false) {
        if (hvemSinTur == 1 && spill.rad3[0] == 0) {
            spill.rad3 = [1, spill.rad3[1], spill.rad3[2]]
            document.getElementById("bildeRute7-1").classList.toggle("hiddenImg")
            hvemSinTur = 2
            runder++
        }
        else if (hvemSinTur == 2 && spill.rad3[0] == 0) {
            spill.rad3 = [5, spill.rad3[1], spill.rad3[2]]
            document.getElementById("bildeRute7-2").classList.toggle("hiddenImg")
            hvemSinTur = 1
            runder++
        }
        checkWin()
    }
}

function rute8Click() {
    if (vinn == false) {
        if (hvemSinTur == 1 && spill.rad3[1] == 0) {
            spill.rad3 = [spill.rad3[0], 1, spill.rad3[2]]
            document.getElementById("bildeRute8-1").classList.toggle("hiddenImg")
            hvemSinTur = 2
            runder++
        }
        else if (hvemSinTur == 2 && spill.rad3[1] == 0) {
            spill.rad3 = [spill.rad3[0], 5, spill.rad3[2]]
            document.getElementById("bildeRute8-2").classList.toggle("hiddenImg")
            hvemSinTur = 1
            runder++
        }
        checkWin()
    }
}

function rute9Click() {
    if (vinn == false) {
        if (hvemSinTur == 1 && spill.rad3[2] == 0) {
            spill.rad3 = [spill.rad3[0], spill.rad3[1], 1]
            document.getElementById("bildeRute9-1").classList.toggle("hiddenImg")
            hvemSinTur = 2
            runder++
        }
        else if (hvemSinTur == 2 && spill.rad3[2] == 0) {
            spill.rad3 = [spill.rad3[0], spill.rad3[1], 5]
            document.getElementById("bildeRute9-2").classList.toggle("hiddenImg")
            hvemSinTur = 1
            runder++
        }
        checkWin()
    }
}