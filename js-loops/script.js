const output = document.getElementById("output");
const runBtn = document.getElementById("runBtn");
runBtn.addEventListener("click", function () {
    output.innerHTML = "";
    for (let number = 1; number <= 8; number++) {
        if (number === 4) {
            break;
        }
        output.innerHTML += '<p>Check ${number}</p>';
    }
});