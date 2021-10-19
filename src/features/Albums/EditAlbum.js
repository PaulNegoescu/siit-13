import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../Auth/Auth.context';

export function EditAlbum() {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const { auth } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:3001/albums/${id}`)
      .then((res) => res.json())
      .then((album) => setAlbum(album));
  }, [id]);

  function handleChange(e) {
    setAlbum({ ...album, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const updated = { ...album };
    delete updated.id;

    await fetch('http://localhost:3001/albums/' + id, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + auth.accessToken,
      },
      body: JSON.stringify(updated),
    });
  }

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  async function fileChange(e) {
    console.log(await toBase64(e.target.files[0]));
  }
  if (!album) {
    return <h2>Loading ...</h2>;
  }
  return (
    <>
      <h1>Edit Album "{album.title}"</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={album.title}
          onChange={handleChange}
        />
        <input type="file" onChange={fileChange} />
        <button>Save</button>
      </form>
    </>
  );
}
