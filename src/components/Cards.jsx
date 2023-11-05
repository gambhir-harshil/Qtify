import { useEffect, useState } from "react";
import Card from "./Card";
import useAxios from "../hooks/useAxios";

export default function Cards({ url }) {
  const [albums, setAlbums] = useState([]);

  const { response } = useAxios(url);

  useEffect(() => {
    if (response) {
      setAlbums(response);
    }
  }, [response]);

  return (
    <div className="flex flex-wrap gap-8">
      {albums.map((album) => (
        <Card key={album.id} album={album} />
      ))}
    </div>
  );
}
