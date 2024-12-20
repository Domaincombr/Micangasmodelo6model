const menucll = document.getElementById("menucll");
var pop = 1;

function menulateral(){
    if(pop % 2 == 1){
        menucll.classList.remove("menulater");
        menucll.classList.remove("menulateraromve");
        menucll.classList.add("menulateracive");
    }
    else{
        menucll.classList.remove("menulateracive");
        menucll.classList.add("menulateraromve");
    }
    pop++;
}



function esquedar() {
    const conteinerolagem = document.querySelector(".conteinerolagem");
 

    conteinerolagem.scrollBy({
        left: -100, 
        behavior: 'smooth'
    });
 }
 
function direita() {
    const conteinerolagem = document.querySelector(".conteinerolagem");
 

    conteinerolagem.scrollBy({
        left: 100, 
        behavior: 'smooth'
    });
 }
 