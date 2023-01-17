let x = document.querySelector("#X");
let y = document.querySelector("#Y");
function showSomme() {
        document.querySelector("h3").innerHTML = somme(Number(x.value),Number(y.value));
      }
function somme(x, y) {
        return "Somme = " + (x + y);
      }
function soustraction(){
    document.querySelector("h3").innerHTML = "Soustraction = " + (Number(x.value)-Number(y.value))
}
function multiplication(){
    document.querySelector("h3").innerHTML = "Multiplication = " + (Number(x.value)*Number(y.value))
}
function Devision(){
    document.querySelector("h3").innerHTML = "Devision = " + (Number(x.value)/Number(y.value))
}