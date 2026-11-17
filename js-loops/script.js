const output = document.getElementById("output");
const runBtn = document.getElementById("runBtn");
runBtn.addEventListener("click", function () {
    output.innerHTML = "";
    for (let number = 2; number <= 10; number+= 2) {
        output.innerHTML += '<p>Checkpoint ${number}</p>';
    }
});