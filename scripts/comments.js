'use strict';

// data-comments-list
/* 
 <article>
    <img
        class="comment-avatar"
        src="https://i.pravatar.cc/50?u=p@p.com"
        alt="Avatar of p@p.com"
    />
    <header>
        <span class="comment-author">p@p.com</span> -
        <span class="comment-date">03 Aug. 2021</span>
    </header>
    <p class="comment-message">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Exercitationem voluptatibus nam, nemo unde eveniet ea? Facilis,
        inventore vel maxime quod aperiam iste saepe accusantium minus unde
        labore quo officiis voluptates!
    </p>
  </article>
*/
(function () {
  const commentForm = document.querySelector('[data-comments-form]');
  commentForm.addEventListener('submit', handleSubmit);

  const commentsList = document.querySelector('[data-comments-list]');

  function handleSubmit(e) {
    e.preventDefault();
    const emailVal = e.target.elements.email.value;
    const messageVal = commentForm.elements.message.value;

    const commentEl = document.createElement('article');
    const avatarEl = document.createElement('img');
    const commentHeaderEl = document.createElement('header');
    const messageEl = document.createElement('p');
    const authorEl = document.createElement('span');
    const dateEl = document.createElement('span');

    commentEl.append(avatarEl, commentHeaderEl, messageEl);
    commentHeaderEl.append(authorEl, dateEl);

    avatarEl.setAttribute('src', `https://i.pravatar.cc/50?u=${emailVal}`);
    avatarEl.alt = `Avatar of ${emailVal}`;
    avatarEl.className = 'comment-avatar';

    authorEl.innerText = emailVal;
    authorEl.classList.add('comment-author');
    dateEl.innerText = new Date();
    dateEl.classList.add('comment-date');

    messageEl.innerText = messageVal;
    messageEl.classList.add('comment-message');

    commentsList.append(commentEl);
  }
})();
