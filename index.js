

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    
    let saveFgr = count + " - "
    saveEl.textContent += saveFgr
    count = 0;
    countEL.textContent = count;
    
}
    


