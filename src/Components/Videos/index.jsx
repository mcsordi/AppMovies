import { useEffect, useState } from "react";

export function useFetchVideos() {
  const [video, setVideo] = useState([]);
  const url = import.meta.env.VITE_DATABASE_FILMS ;

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
