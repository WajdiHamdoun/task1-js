let button = document.querySelector("button");

let liste = document.querySelector("ul");

let input = document.querySelector("input");


function addTodo() {
    if(input.value==""){
        alert("please give an item")
        return
    }
    liste.innerHTML +=`<li>  <input type="checkbox"  /> <label >${input.value}</label>  <button >Delete</button> </li>`;
    input.value="";
    }
input.addEventListener("keyup",function(event){
        if(event.keyCode === 13){
            event.preventDefault();
            addTodo();
        }
    }); 
