const output = document.getElementById("output");
const runBtn = document.getElementById("runBtn");
runBtn.addEventListener("click", function () {
    output.innerHTML = "";
    for (let number = 1; number <= 5; number++) {
        output.innerHTML += '<p>Checkpoint ${number}</p>';
    }
});