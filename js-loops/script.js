const output = document.getElementById("output");
const runBtn = document.getElementById("runBtn");
runBtn.addEventListener("click", function () {
    output.innerHTML = "";
    for (let number = 1; number <= 15; number++) {
        if (number === 11) break;
        if (number ===11) continue;
        output.innerHTML += '<p>Processed ${number}</p>';
    }
});