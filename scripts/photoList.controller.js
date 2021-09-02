/* 
    Obtinem pozele de la server
    Cream cate un card de poza pentru fiecare (article + h2 + img)
    Le afisam in pagina
*/
class PhotoList {
  constructor() {
    this.model = new Photos();
    this.model
      .getAllPhotos()
      .then((photos) => (this.view = new PhotoListView(photos)));
    //trebuie sa le trimitem la view
  }
}

new PhotoList();
