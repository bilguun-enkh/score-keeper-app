
let team1Score = document.getElementById("team1Score")


function addPointTeam1() {
    let team1Score = document.getElementById("team1Score")
    temp = Number(team1Score.textContent)
    team1Score.value = temp + 1
    team1Score.innerHTML = team1Score.value
}

function add2PointTeam1() {
    temp = Number(team1Score.textContent)
    team1Score.value = temp + 2
    team1Score.innerHTML = team1Score.value

}

function resetPointsTeam1() {
    team1Score.innerHTML = 0
}

let team2Score = document.getElementById("team2Score")

function addPointTeam2() {
    temp = Number(team2Score.textContent)
    team2Score.value = temp + 1
    team2Score.innerHTML = team2Score.value
}

function add2PointTeam2() {
    temp = Number(team2Score.textContent)
    team2Score.value = temp + 2
    team2Score.innerHTML = team2Score.value
}

function resetPointsTeam2() {
    team2Score.innerHTML = 0
}
