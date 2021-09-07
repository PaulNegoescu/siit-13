'use strict';

// IIFE, Immediately Invoked Function Expression
(function Authentication() {
  // Comutam intre Login si Register
  // - Cand dam click pe unul dintre link-uri:
  //      -    Daca suntem pe login, vrem sa ascundem toate chestiile cu data-login si sa le aratam pe cele cu data-register
  //      -    Daca suntem pe register, invers

  // Optional chaining operator (Elvis operator) ?.
  document
    .querySelector('[data-login=switch]')
    ?.addEventListener('click', toggleClasses);
  document
    .querySelector('[data-register=switch]')
    ?.addEventListener('click', toggleClasses);

  function toggleClasses(e) {
    e.preventDefault();
    // const loginElements = document.querySelectorAll('[data-login]');
    // const registerElements = document.querySelectorAll('[data-register]');

    // for (const elem of [...loginElements, ...registerElements]) {
    //   elem.classList.toggle('hidden');
    // }

    const elements = document.querySelectorAll('[data-login], [data-register]');

    for (const elem of elements) {
      elem.classList.toggle('hidden');
    }
  }

  // Login sau Register
  // - Trebuie sa luam valorile din form
  // - Validam valorile
  // - Trimitem datale la server si asteptam raspunsul
  // - Daca raspunsul contine token: Redirect la o pagina securizata sau whatever
  // - Daca nu contine token: eroare
  document
    .querySelector('[data-form]')
    ?.addEventListener('submit', handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    const inputs = e.target.elements;

    const username = inputs.username.value;
    const password = inputs.password.value;
    const repeat_password = inputs.repeat_password.value;

    // Destructuring
    // const {
    //   username: { value: username },
    //   password: { value: password },
    //   repeat_password: { value: repeat_password },
    // } = inputs;

    if (isRegister() && password !== repeat_password) {
      console.error('The passwords did not match!');
      return;
    }

    if (!username || !password) {
      console.error('All fields are mandatory!');
      return;
    }

    sendAuthRequest(username, password);
  }

  function isRegister() {
    return !document
      .querySelector('[data-register]')
      .classList.contains('hidden');
  }

  async function sendAuthRequest(username, password) {
    const data = await fetch(
      `https://movies-app-siit.herokuapp.com/auth/${
        isRegister() ? 'register' : 'login'
      }`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    ).then((res) => res.json());

    if (data.accessToken) {
      // Login successful
      localStorage.setItem('accessToken', data.accessToken);
      location.assign('movies.html');
    } else {
      console.warn(data.message);
    }
  }
})();

(async function Movies() {
  const accessToken = localStorage.getItem('accessToken');

  async function addMovie(movie) {
    const data = await fetch('https://movies-app-siit.herokuapp.com/movies', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-Auth-Token': accessToken,
      },
      body: JSON.stringify(movie),
    }).then((res) => res.json());

    console.log(data);
  }

  // await addMovie({"Title":"The Green Mile","Year":"1999","Rated":"R","Released":"10 Dec 1999","Runtime":"189 min","Genre":"Crime, Drama, Fantasy","Director":"Frank Darabont","Writer":"Stephen King, Frank Darabont","Actors":"Tom Hanks, Michael Clarke Duncan, David Morse","Plot":"The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.","Language":"English, French","Country":"United States","Awards":"Nominated for 4 Oscars. 15 wins & 37 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.6/10"},{"Source":"Metacritic","Value":"61/100"}],"Metascore":"61","imdbRating":"8.6","imdbVotes":"1,196,600","imdbID":"tt0120689","Type":"movie","DVD":"13 Jun 2000","BoxOffice":"$136,801,374","Production":"Castle Rock Entertainment, Darkwoods Productions, Warner Brothers","Website":"N/A","Response":"True"});

  const movies = await fetch(
    'https://movies-app-siit.herokuapp.com/movies?skip=80&take=20'
  ).then((res) => res.json());
  console.log(movies);
})();
