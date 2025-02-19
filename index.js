let homeCounter = document.getElementById("home-counter")

let homePts = 0 

function add1PtHome() {
    homePts += 1
    homeCounter.textContent = homePts
}

function add2PtsHome() {
    homePts += 2
    homeCounter.textContent = homePts
}

function add3PtsHome() {
    homePts += 3
    homeCounter.textContent = homePts
}

let guestCounter = document.getElementById("guest-counter")
let guestPts = 0 

function add1PtGuest() {
    guestPts += 1
    guestCounter.textContent = guestPts
}

function add2PtsGuest() {
    guestPts += 2
    guestCounter.textContent = guestPts
}

function add3PtsGuest() {
    guestPts += 3
    guestCounter.textContent = guestPts
}




