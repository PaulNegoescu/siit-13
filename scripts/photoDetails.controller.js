class PhotoDetails {
  constructor() {
    this.model = new Photos();
    this.view = new PhotoDetailsView();
  }

  async init() {
    const id = this.getIdFromUrl();
    const photo = await this.model.getPhotoById(id);
    this.view.render(photo);
  }

  getIdFromUrl() {
    const params = new URLSearchParams(location.search);
    return params.get('id');
  }
}

const page = new PhotoDetails();
page.init();
