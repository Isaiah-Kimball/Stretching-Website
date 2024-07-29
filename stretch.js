const create = document.querySelectorAll("#create");

for (const button of create){
    button.addEventListener("click", ()=>{alert("Account creation not finished yet, stay tuned!")})
}

function toggleVisibility(id){
    const section = document.getElementById(id);
    if(section.classList.contains("hidden")){
        section.classList.remove("hidden");
    }
    else{
        section.classList.add("hidden");
    }
}