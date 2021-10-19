import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../Auth/Auth.context';

export function AlbumDetails() {
  const { id } = useParams(); // { id: 14 }
  const [album, setAlbum] = useState(null);
  const [photos, setPhotos] = useState(null);

  const { auth } = useAuth();

  useEffect(() => {
    const albumPromise = fetch(`http://localhost:3001/albums/${id}`).then(
      (res) => res.json()
    );
    const photoPromise = fetch(
      `http://localhost:3001/photos?albumId=${id}`
    ).then((res) => res.json());

    Promise.all([albumPromise, photoPromise]).then(([album, photos]) => {
      setAlbum(album);
      setPhotos(photos);
    });
  }, [id]);

  if (!album) {
    return <h2>Loading ...</h2>;
  }

  return (
    <>
      <h1>Album Details for "{album?.title}"</h1>
      {auth && auth.user.id === album.userId && (
        <Link to={`/albums/edit/${id}`}>Edit this album</Link>
      )}
      {photos?.map((photo) => (
        <p key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </p>
      ))}
    </>
  );
}
