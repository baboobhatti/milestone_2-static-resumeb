

const field_ = document.getElementById("fset") as HTMLFieldSetElement;
const hides = document.getElementById("hide") as HTMLElement

hides.addEventListener("click", function(){
    field_.style.display = field_.style.display === "none"? "block" : "none";  
})

