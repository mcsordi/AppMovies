import { useEffect, useState } from "react";

export function useFetchVideos() {
  const [video, setVideo] = useState([]);
  const url = "https://appmovies-api.onrender.com/filmes";

  useEffect(() => {
    const listVideos = async () => {
      const api = await fetch(url);
      const data = await api.json();
      setVideo(data);
    };
    listVideos();
  }, [url]);
  return video;
}
