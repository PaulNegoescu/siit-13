class Photos {
  url = 'http://localhost:3000/photos?_limit=20';

  getAllPhotos() {
    return fetch(this.url).then((res) => res.json());
  }
}
