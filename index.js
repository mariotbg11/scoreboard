let homeScore1 = document.getElementById("home-score-1")
let homeScore2 = document.getElementById("home-score-2")
let homeScore3 = document.getElementById("home-score-3")
let guestScore1 = document.getElementById("guest-score-1")
let guestScore2 = document.getElementById("guest-score-2")
let guestScore3 = document.getElementById("guest-score-3")
let homeScoreEl =document.getElementById("home-score")
let guestScoreEl =document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function addHomeScore1(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addHomeScore2(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addHomeScore3(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function addGuestScore1(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addGuestScore2(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addGuestScore3(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}