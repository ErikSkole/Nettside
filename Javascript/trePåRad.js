let hvemSinTur = 1
let vinn = false
let boks = document.getElementById("vinn")

let spill = {
    rad1: ["", "", ""],
    rad2: ["", "", ""],
    rad3: ["", "", ""],
}

function resetSpill() {
    spill = {
        rad1: ["", "", ""],
        rad2: ["", "", ""],
        rad3: ["", "", ""],
    }
    for (let i = 1; i < 10; i++) {
        document.getElementById(`bildeRute${i}-1`).classList = "hiddenImg"
        document.getElementById(`bildeRute${i}-2`).classList = "hiddenImg"
    }

    hvemSinTur = 1
    vinn = false
}

function checkWin() {
    if ((spill.rad1[0] == spill.rad1[1] && spill.rad1[0] == spill.rad1[2] && spill.rad1[0] + spill.rad1[1] + spill.rad1[2] != 0) 
    || (spill.rad2[0] == spill.rad2[1] && spill.rad2[0] == spill.rad2[2] && spill.rad2[0] + spill.rad2[1] + spill.rad2[2] != 0)
    || (spill.rad3[0] == spill.rad3[1] && spill.rad3[0] == spill.rad3[2] && spill.rad3[0] + spill.rad3[1] + spill.rad3[2] != 0)
    || (spill.rad1[0] == spill.rad2[0] && spill.rad1[0] == spill.rad3[0] && spill.rad1[0] + spill.rad2[0] + spill.rad3[0] != 0)
    || (spill.rad1[1] == spill.rad2[1] && spill.rad1[1] == spill.rad3[1] && spill.rad1[1] + spill.rad2[1] + spill.rad3[1] != 0)
    || (spill.rad1[2] == spill.rad2[2] && spill.rad1[2] == spill.rad3[2] && spill.rad1[2] + spill.rad2[2] + spill.rad3[2] != 0)
    || (spill.rad1[0] == spill.rad2[1] && spill.rad1[0] == spill.rad3[2] && spill.rad1[0] + spill.rad2[1] + spill.rad3[2] != 0)
    || (spill.rad1[2] == spill.rad2[1] && spill.rad1[2] == spill.rad3[0] && spill.rad1[2] + spill.rad2[1] + spill.rad3[0] != 0)
        ) {
        winCondition()
    }
}

function winCondition() {
    vinn = true
    document.getElementById("vinn_tekst").innerHTML = "Yoo du vant"
    boks.classList.toggle("hidden")
}

function fjernBoks() {
    boks.classList.toggle("hidden")
}

function rute1Click() {
    if (vinn == false) {
        if (hvemSinTur == 1 && spill.rad1[0] == "") {
            spill.rad1 = [1, spill.rad1[1], spill.rad1[2]]
            document.getElementById("bildeRute1-1").classList.toggle("hiddenImg")
            hvemSinTur = 2
        }
        else if (hvemSinTur == 2 && spill.rad1[0] == "") {
            spill.rad1 = [2, spill.rad1[1], spill.rad1[2]]
            document.getElementById("bildeRute1-2").classList.toggle("hiddenImg")
            hvemSinTur = 1
        }
        checkWin()
    }
    
}

function rute2Click() {
    if (vinn == false) {
        if (hvemSinTur == 1 && spill.rad1[1] == "") {
            spill.rad1 = [spill.rad1[0], 1, spill.rad1[2]]
            document.getElementById("bildeRute2-1").classList.toggle("hiddenImg")
            hvemSinTur = 2
        }
        else if (hvemSinTur == 2 && spill.rad1[1] == "") {
            spill.rad1 = [spill.rad1[0], 2, spill.rad1[2]]
            document.getElementById("bildeRute2-2").classList.toggle("hiddenImg")
            hvemSinTur = 1
        }
        checkWin()
    }
    
}

function rute3Click() {
    if (vinn == false) {
        if (hvemSinTur == 1 && spill.rad1[2] == "") {
            spill.rad1 = [spill.rad1[0], spill.rad1[1], 1]
            document.getElementById("bildeRute3-1").classList.toggle("hiddenImg")
            hvemSinTur = 2
        }
        else if (hvemSinTur == 2 && spill.rad1[2] == "") {
            spill.rad1 = [spill.rad1[0], spill.rad1[1], 2]
            document.getElementById("bildeRute3-2").classList.toggle("hiddenImg")
            hvemSinTur = 1
        }
        checkWin()
    }
}

function rute4Click() {
    if (vinn == false) {
        if (hvemSinTur == 1 && spill.rad2[0] == "") {
            spill.rad2 = [1, spill.rad2[1], spill.rad2[2]]
            document.getElementById("bildeRute4-1").classList.toggle("hiddenImg")
            hvemSinTur = 2
        }
        else if (hvemSinTur == 2 && spill.rad2[0] == "") {
            spill.rad2 = [2, spill.rad2[1], spill.rad2[2]]
            document.getElementById("bildeRute4-2").classList.toggle("hiddenImg")
            hvemSinTur = 1
        }
        checkWin()
    }
}

function rute5Click() {
    if (vinn == false) {
        if (hvemSinTur == 1 && spill.rad2[1] == "") {
            spill.rad2 = [spill.rad2[0], 1, spill.rad2[2]]
            document.getElementById("bildeRute5-1").classList.toggle("hiddenImg")
            hvemSinTur = 2
        }
        else if (hvemSinTur == 2 && spill.rad2[1] == "") {
            spill.rad2 = [spill.rad2[0], 2, spill.rad2[2]]
            document.getElementById("bildeRute5-2").classList.toggle("hiddenImg")
            hvemSinTur = 1
        }
        checkWin()
    }
}

function rute6Click() {
    if (vinn == false) {
        if (hvemSinTur == 1 && spill.rad2[2] == "") {
            spill.rad2 = [spill.rad2[0], spill.rad2[1], 1]
            document.getElementById("bildeRute6-1").classList.toggle("hiddenImg")
            hvemSinTur = 2
        }
        else if (hvemSinTur == 2 && spill.rad2[2] == "") {
            spill.rad2 = [spill.rad2[0], spill.rad2[1], 2]
            document.getElementById("bildeRute6-2").classList.toggle("hiddenImg")
            hvemSinTur = 1
        }
        checkWin()
    }
}

function rute7Click() {
    if (vinn == false) {
        if (hvemSinTur == 1 && spill.rad3[0] == "") {
            spill.rad3 = [1, spill.rad3[1], spill.rad3[2]]
            document.getElementById("bildeRute7-1").classList.toggle("hiddenImg")
            hvemSinTur = 2
        }
        else if (hvemSinTur == 2 && spill.rad3[0] == "") {
            spill.rad3 = [2, spill.rad3[1], spill.rad3[2]]
            document.getElementById("bildeRute7-2").classList.toggle("hiddenImg")
            hvemSinTur = 1
        }
        checkWin()
    }
}

function rute8Click() {
    if (vinn == false) {
        if (hvemSinTur == 1 && spill.rad3[1] == "") {
            spill.rad3 = [spill.rad3[0], 1, spill.rad3[2]]
            document.getElementById("bildeRute8-1").classList.toggle("hiddenImg")
            hvemSinTur = 2
        }
        else if (hvemSinTur == 2 && spill.rad3[1] == "") {
            spill.rad3 = [spill.rad3[0], 2, spill.rad3[2]]
            document.getElementById("bildeRute8-2").classList.toggle("hiddenImg")
            hvemSinTur = 1
        }
        checkWin()
    }
}

function rute9Click() {
    if (vinn == false) {
        if (hvemSinTur == 1 && spill.rad3[2] == "") {
            spill.rad3 = [spill.rad3[0], spill.rad3[1], 1]
            document.getElementById("bildeRute9-1").classList.toggle("hiddenImg")
            hvemSinTur = 2
        }
        else if (hvemSinTur == 2 && spill.rad3[2] == "") {
            spill.rad3 = [spill.rad3[0], spill.rad3[1], 2]
            document.getElementById("bildeRute9-2").classList.toggle("hiddenImg")
            hvemSinTur = 1
        }
        checkWin()
    }
}
