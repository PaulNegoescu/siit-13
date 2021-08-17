'use strict';

// La fiecare apasare de buton vrem sa adunam sau sa scadem 1
//      vrem sa aflam cand s-a apasat un buton
//           obtinem cumva referinta butonului din html (document.querySelector)
//           ascultam la evenimentul de click al butonului respectiv (.addEventListener)
//      adumnam sau scadem 1
//           1. Doua functii diferite pentru fiecare buton in parte
//           2. O functie pentru ambele care sa determine pe care dintre butoane s-a dat click
//                  Ne trebuie o variabila care sa reprezinte outputul -> output (let)
//                  ++ sau --
//                  Trebuie sa afisam variabila noastra in HTML
//                      Trebuie sa oibtinem elementul in care vrem sa afisam rezultatul (document.querySelector)
//                      Trebuie sa punem valoarea variabilei noastre in element (.innerText)

// function counter() {
//   let output = 0;

//   attachEventListeners();

//   function displayOutput() {
//     document.querySelector('[data-counter-output]').innerText = output;
//   }

//   function handleIncrementClick() {
//     output++;
//     displayOutput();
//   }

//   function handleDecrementClick() {
//     output--;
//     displayOutput();
//   }

//   function attachEventListeners() {
//     document
//       .querySelector('[data-counter-button=decrement]')
//       .addEventListener('click', handleDecrementClick);
//     document
//       .querySelector('[data-counter-button=increment]')
//       .addEventListener('click', handleIncrementClick);
//   }
// }

function counter() {
  let output = 0;
  const outputElement = document.querySelector('[data-counter-output]');

  const decButton = document.querySelector('[data-counter-button=decrement]');
  decButton.addEventListener('click', () => {
    output -= 1;
    outputElement.innerText = output;
  });

  const incButton = document.querySelector('[data-counter-button=increment]');
  incButton.addEventListener(
    'click',
    () => (outputElement.innerText = ++output)
  );
}

counter();
