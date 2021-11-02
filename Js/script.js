// Attraverso un append genero la griglia 
// Attraverso un prompt chiedo all'utente quale livello di difficoltà vuole selezionare
//Creo delle condizioni in modo da regolare il numero di quadrati
//Utilizzo una function per far colorare le caselle

const squareCont = document.querySelector('#containerSquare');

const Livelli = parseInt(prompt(" '1'-'2'-'3' ")) 

let difficolta = 100;

if (Livelli == 1) {
    difficolta = 100;
}

if (Livelli == 2) {
    difficolta = 81;
}

if (Livelli == 3) {
    difficolta = 49;
}

for (let i = 1; i <= difficolta; i++){

  let Element = document.createElement('div');
  Element.classList.add('square');
  Element.append(i);
  squareCont.appendChild(Element);

  Element.addEventListener("click",
        function(){
            Element.classList.add("clicked_true")
            Element.innerHTML=`${Math.floor(Math.random() * 100) + 1}`;
        }
  );
}

console.log(squareCont)
