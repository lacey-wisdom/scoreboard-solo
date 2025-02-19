let homeCounter = document.getElementById("home-counter")

let homePts = 0 

function addPointsHome(num) {
    homePts += num
    homeCounter.textContent = homePts
}

let guestCounter = document.getElementById("guest-counter")
let guestPts = 0 

function addPointsGuest(num) {
    guestPts += num
    guestCounter.textContent = guestPts
}
