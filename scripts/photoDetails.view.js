class PhotoDetailsView {
  render(photo) {
    const title = document.querySelector('[data-photo-title]');
    const image = document.querySelector('[data-photo-image]');

    title.textContent = photo.title;
    image.src = photo.url;
    image.alt = photo.title;
  }
}
