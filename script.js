let modeBtn = document.querySelector("#switch");
let currentMode = "light";
let body = document.querySelector("body");
modeBtn.addEventListener("click", () =>{
    if (currentMode === "light") {
        currentMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    }
    else{
        currentMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currentMode);

});

