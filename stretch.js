const create = document.querySelectorAll("#create");

for (const button of create){
    button.addEventListener("click", ()=>{alert("Account creation not finished yet, stay tuned!")})
}

let hideClasses = new Set();
hideClasses.add(".stretch")

function toggleVisibility(classDisable){
    if (hideClasses.has(classDisable)){
        console.log("Class has been removed from set");
        hideClasses.delete(classDisable);
    }
    else{
        console.log("Added new class");
        hideClasses.add(classDisable);
    }
    checkStretches();
}

function checkStretches(){
    stretches = document.querySelectorAll(".stretch");
    //console.log(stretches);
    for (const stretch of stretches){
        console.log(stretch);
        let stretchSet = new Set(stretch.classList);
        console.log(`stretchSet: ${[...stretchSet]}, hideClasses: ${[...hideClasses]}`);
        let hide = true;

        for (const clas of stretchSet){
            console.log(`Current class looking at: ."${clas}`);
            if (!hideClasses.has("." + clas)){
                hide = false;
                break;
            }
        }

        if (hide){
            console.log(`Stretch disabled: ${stretch}`);
            stretch.style.display = "none";
        }
        else{
            stretch.style.display = "block";
        }
    }
}

// Function will more than likely need to be changed
/*function toggleVisibility(classDisable){
    const section = document.querySelectorAll(classDisable);
    console.log(section);
    for (const stretch of section){
        if(stretch.classList.contains("hidden")){
            stretch.classList.remove("hidden");
        }
        else{
            stretch.classList.add("hidden");
        }
    }
    
}*/