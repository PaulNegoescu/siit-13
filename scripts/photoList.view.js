/* 
<article>
    <h2>{title}</h2>
    <img src="http://dsadasda" alt="Photo: {title}" />
</article>
*/

class PhotoListView {
  constructor(photos) {
    const html = this.buildHtml(photos);
    this.render(html);
  }

  buildHtml(photos) {}

  render(html) {
    const sink = document.getElementById('root');
    sink.append(html);
  }
}
