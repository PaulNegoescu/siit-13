const apiUrl = 'http://localhost:3000/';

class Photos {
  endpoint = apiUrl + 'photos';

  getAllPhotos() {
    const url = this.endpoint + '?_limit=20';
    return fetch(url).then((res) => res.json());
  }

  getPhotoById(id) {
    return fetch(`${this.endpoint}/${id}`).then((res) => res.json());
  }
}
