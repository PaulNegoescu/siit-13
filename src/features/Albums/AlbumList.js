import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function AlbumList() {
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    async function getAlbums() {
      const albums = await fetch('http://localhost:3001/albums').then((res) =>
        res.json()
      );

      // Varianta simpla in care luam cover-urile pe rand
      for (const album of albums) {
        const cover = await fetch(
          `http://localhost:3001/photos?albumId=${album.id}&_limit=1`
        ).then((res) => res.json());
        album.cover = cover[0];
      }
      setAlbums(albums);

      /** Varianta in care luam toate cover-urile in paralel, este mai rapid pentru utilizatorul final
        const coverPromises = [];
        for (const album of albums) {
          coverPromises.push(
            fetch(
              `http://localhost:3001/photos?albumId=${album.id}&_limit=1`
            ).then((res) => res.json())
          );
        }
        const covers = await Promise.all(coverPromises);
        console.log(covers);
        for (let i = 0; i < covers.length; i++) {
          albums[i].cover = covers[i][0];
        }
        setAlbums(albums);
      */
    }

    getAlbums();
  }, []);

  return (
    <>
      <h1>Albums</h1>
      {!albums && <h2>Loading ...</h2>}
      {albums?.map((album) => (
        <p key={album.id}>
          <img src={album.cover.thumbnailUrl} alt={`${album.title} cover`} />
          <Link to={`/albums/${album.id}`}>{album.title}</Link>
        </p>
      ))}
    </>
  );
}
