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
        
        
          dropdown.classList.toggle("show")
             dropdown.classList.toggle("border");
    }
})

}














function exercice2()
{
let truc = document.getElementById("box2")
let truc2 = document.getElementById("btn-move")
console.log(truc, truc2)

truc2.addEventListener("click", function(){
    
    
    truc.classList.add("move")
    
})
}
exercice2()
function exercice3()
{
    let ingredients = ["Salade", "Tomate", "Oignon"];
    let truc = document.getElementsByTagName("ul");
    let btn = document.getElementById("btn-add-ingredients");
    
    console.log(truc, btn);
    
    btn.addEventListener("click", function(){
        
        
        
            
            let machin = document.createElement("li");
            let machin2 = document.createElement("li");
            let machin3 = document.createElement("li");
            machin.innerHTML="Salade";
            machin2.innerHTML="Tomate";
            machin3.innerHTML="Oignon";
            
            truc[0].appendChild(machin);
             truc[0].appendChild(machin2);
              truc[0].appendChild(machin3);
      
        
        
    })
}
exercice3()
function exercice4()
{
    let heroes = [
        {
            name : "Clark Kent",
            secret : "Superman"
        },
        {
            name : "Diana Prince",
            secret : "Wonder Woman"
        },
        {
            name : "Tony Stark",
            secret: "Iron Man"
        }
    ];
    
      let btn = document.getElementById("btn-add-hero");
    let tab = document.querySelector("#ex4 tbody");
    let count = 0

    btn.addEventListener("click", function() {

            let tr = document.createElement("tr");
            let tdName = document.createElement("td");
            let tdSecret = document.createElement("td");

            let txtName = document.createTextNode(heroes[count].name);
            let txtSecret = document.createTextNode(heroes[count].secret);

            tdName.appendChild(txtName);
            tdSecret.appendChild(txtSecret);
            tr.appendChild(tdName);
            tr.appendChild(tdSecret);

            tab.appendChild(tr);
            count++;


    });
}
exercice4()


function exercice5()
{

let btn = document.getElementById("btn-turn")

let red = document.getElementById("red")
let blue = document.getElementById("blue")
let green = document.getElementById("green")
// let grid = document.getElementById("stage")






btn.addEventListener("click", function(){
    
    
       blue.setAttribute("id", "green")
      red.setAttribute("id", "blue")
      green.setAttribute("id", "red")
 
    
    
    
    
    
    
})

}


exercice5()
function exercice6()
{


let eleme = document.getElementById("ball")
let btn = document.getElementById("btn-roll")

console.log(eleme,btn)
btn.addEventListener("click",function(){
    
    
    eleme.style.animationName = "moveLeft"
    
})
}
exercice6()





window.addEventListener("DOMContentLoaded", function(){
   exercice1()
});