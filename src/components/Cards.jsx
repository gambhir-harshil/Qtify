import { useEffect, useState } from "react";
import Card from "./Card";
import useAxios from "../hooks/useAxios";

export default function Cards({ request }) {
  const [albums, setAlbums] = useState([]);

  const { response, loading, error } = useAxios(request.endpoint);

  useEffect(() => {
    if (response) {
      setAlbums(response);
    }
  }, [response]);

  return (
    <div className="flex flex-col gap-2 px-8">
      <h1 className="text-white font-semibold text-lg">{request.name}</h1>
      <div className="flex flex-wrap gap-8">
        {albums.map((album) => (
          <Card key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
}
