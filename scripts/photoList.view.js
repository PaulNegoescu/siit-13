class PhotoListView {
  constructor(photos) {
    const html = this.buildHtml(photos);
    this.render(html);
  }

  buildHtml(photos) {
    const html = document.createDocumentFragment();

    for (const photo of photos) {
      /* 
        <article>
            <a href="photoDetails.html?id={id}">
                <h2>{title}</h2>
                <img src="http://dsadasda" alt="Photo: {title}" />
            </a>
        </article>
        */
      const article = document.createElement('article');
      const link = document.createElement('a');
      const image = document.createElement('img');
      const heading = document.createElement('h2');

      heading.textContent = photo.title;
      link.href = `photoDetails.html?id=${photo.id}`;
      image.src = photo.thumbnailUrl;
      image.alt = `Photo: ${photo.title}`;

      article.append(link);
      link.append(heading, image);

      html.append(article);
    }

    return html;
  }

  render(html) {
    const sink = document.getElementById('root');
    sink.append(html);
  }
}
