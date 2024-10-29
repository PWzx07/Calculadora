var calc = [1,2,3,4,5,6,7,8,9,0,];
var opera = ["/","*","-","+"];
const section = document.getElementById("minhaSecao");
  
const n1 = document.getElementById("n1");
n1.addEventListener("click",
function num1 () {
    section.innerHTML += calc[0];   
});

const n2 = document.getElementById("n2");
n2.addEventListener("click",
function num2 () {
    section.innerHTML += calc[1];
});

const n3 = document.getElementById("n3");
n3.addEventListener("click",
function num3 () {
    section.innerHTML += calc[2];  
});

const n4 = document.getElementById("n4");
n4.addEventListener("click",
function num4 () {
    section.innerHTML += calc[3];
});

const n5 = document.getElementById("n5");
n5.addEventListener("click",
function num5 () {
    section.innerHTML += calc[4];  
});

const n6 = document.getElementById("n6");
n6.addEventListener("click",
function num6 () {
    section.innerHTML += calc[5];  
});
           
const n7 = document.getElementById("n7");
n7.addEventListener("click",
function num7 () {
    section.innerHTML += calc[6];  
});
 
const n8 = document.getElementById("n8");
n8.addEventListener("click",
function num8 () {
    section.innerHTML += calc[7];  
});

const n9 = document.getElementById("n9");
n9.addEventListener("click",
function num9 () {
    section.innerHTML += calc[8];
});

const n0 = document.getElementById("n0");
n0.addEventListener("click",
function num0 () {
    section.innerHTML += calc[9]; 
});

const div = document.getElementById("div");
div.addEventListener("click",
function ope1 () {
    section.innerHTML += opera[0];
});

const multi = document.getElementById("multi");
multi.addEventListener("click",
function ope2 () {
    section.innerHTML += opera[1];  
});

const soma = document.getElementById("soma");
soma.addEventListener("click",
function ope3 () {
    section.innerHTML += opera[3];
  
});

const sub = document.getElementById("sub");
sub.addEventListener("click",
function ope4 () {
    section.innerHTML += opera[2];
});

function ponto(){
    section.innerHTML += "."; 
}

function del(){
    section.innerHTML = "";
}

function calculate(){
    try {
        section.innerHTML = eval(section.innerHTML);
    } catch (error){
        section.innerHTML  = "Erro"
    }
}