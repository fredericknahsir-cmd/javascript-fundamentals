console.log("JavaScript connected!");
console.log("Module 1 started");
const output = document.querySelector("#output");
output.textContent = "JavaScript changed this paragraph!";
console.log("Module 1 finished");

const studentName = "Alex";
let completedLessons = 1;
const isLearning = true;
completedLessons = completedLessons + 1;
const profile = document.querySelector("#profile");
profile.textContent = studentName + " completed " + completedLessons + " lessons. ";
console.log(typeof studentName, typeof completedLessons, typeof isLearning);

let points = 0;
const pointsText = document.querySelector("#pointsText");
const pointsBtn = document.querySelector("#pointsBtn");
function earnPoints() {
    points += 5;
    pointsText.textContent = "Points: " + points;
}
pointsBtn.addEventListener("click", earnPoints);