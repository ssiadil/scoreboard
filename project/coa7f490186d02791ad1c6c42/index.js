let count = 0
let countA = 0

let scoreHome = document.getElementById("s-home")
let scoreAway = document.getElementById("s-away")

function add1point (){
    count++
    scoreHome.textContent = count
}

function add2points (){
    count += 2
    scoreHome.textContent = count
}

function add3Points (){
    count += 3
    scoreHome.textContent = count
}

function add1pointA (){
    countA++
    scoreAway.textContent = countA
}

function add2pointsA(){
    countA += 2
    scoreAway.textContent = countA
}

function add3PointsA (){
    countA += 3
    scoreAway.textContent = countA
}