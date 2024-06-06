/*
1. Get elements by ID 
2. Add functionality to each button 

*/

let buttonAddOneHome = document.getElementById("+1-home");
let buttonAddTwoHome = document.getElementById("+2-home");
let buttonAddThreeHome = document.getElementById("+3-home");

let buttonAddOneGuest = document.getElementById("+1-guest");
let buttonAddTwoGuest = document.getElementById("+2-guest");
let buttonAddThreeGuest = document.getElementById("+3-guest");

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");





// math functions 
function add1Home() {
       let homeCounter = homeScoreEl.textContent;
       let homeCounterNum = Number(homeCounter)
       homeScoreEl.textContent = homeCounterNum + 1;
    }
    
function add2Home() {
    let homeCounter = homeScoreEl.textContent;
    let homeCounterNum = Number(homeCounter)
    homeScoreEl.textContent = homeCounterNum + 2;
    
}

function add3Home() {
    let homeCounter = homeScoreEl.textContent;
    let homeCounterNum = Number(homeCounter)
    homeScoreEl.textContent = homeCounterNum + 3;
    
}

function add1Guest() {
    let guestCounter = guestScoreEl.textContent;
    let guestCounterNum = Number(guestCounter);
    guestScoreEl.textContent = guestCounterNum + 1;
    }
    
function add2Guest() {
    let guestCounter = guestScoreEl.textContent;
    let guestCounterNum = Number(guestCounter);
    guestScoreEl.textContent = guestCounterNum + 2;
}

function add3Guest() {
    let guestCounter = guestScoreEl.textContent;
    let guestCounterNum = Number(guestCounter);
    guestScoreEl.textContent = guestCounterNum + 3;
    
}

// 