function exercice1()
{

let boutton = document.getElementById("boutton");
let dropdown = document.getElementById("dropdown-menu");
let li = document.getElementsByClassName("dropdown-item");

console.log(boutton );

boutton.addEventListener("click", function(event){
    
    
    dropdown.classList.toggle("show");
     dropdown.classList.toggle("border");
     console.log(event.target);
     
})


window.addEventListener("click",function(event){
    
    
  
    if(event.target != boutton ){
        
        
          dropdown.classList.remove("show")
             dropdown.classList.remove("border");
    }
})

}



exercice1()








