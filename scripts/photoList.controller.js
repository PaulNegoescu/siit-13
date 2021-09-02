/* 
    Obtinem pozele de la server
    Cream cate un card de poza pentru fiecare (article + h2 + img)
    Le afisam in pagina
*/
class PhotoList {
    async constructor() {
        this.model = new Photos();
        const photos = await this.model.getAllPhotos();
        //trebuie sa le trimitem la view
        this.view = new PhotoListView(photos);
    }
}
