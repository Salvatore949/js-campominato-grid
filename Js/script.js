// Attraverso un append genero la griglia 
// Attraverso un prompt chiedo all'utente quale livello di difficoltà vuole selezionare
//Creo delle condizioni in modo da regolare il numero di quadrati
//Utilizzo una function per far colorare le caselle

const squareCont = document.getElementbyId('containerSquare');


for (let i = 1; i <= 100; i++){

  let Element = document.createElement('div');
  Element.classList.add('square');
  Element.append(i);
  squareCont.appendChild(square);

}
console.log(squareCont)