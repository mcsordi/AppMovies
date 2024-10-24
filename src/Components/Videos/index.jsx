import { useEffect, useState } from "react";

const url = import.meta.env.VITE_DATABASE_FILMS ;
export function useFetchVideos() {
  const [videos,setVideos] = useState()
  useEffect(()=>{
    const response = async () =>{
    const api = await fetch(url);
    const dataJson = await api.json();
    return setVideos(dataJson)
    }
    return response
  },[])
  return videos
}
