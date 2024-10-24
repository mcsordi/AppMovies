
import { useEffect } from "react";
import Banner from "../../Components/Banner";
import Carrousel from "../../Components/Carrousel";
// import Spinn from "../../Components/Spinner";
import { useFetchVideos } from "../../Components/Videos";

function Home() {
const fetchVideos = useFetchVideos()

console.log(import.meta.env.VITE_DATABASE_CATEGORIES)
  
useEffect(()=>{
  fetchVideos
},[])
const listVideos = fetchVideos && fetchVideos.map((el)=>el);
  // if (!listVideos) {
  //   return <Spinn />;
  // }
  return (
    <>
      <Banner image="favoritos" />
      <Carrousel listVideos={listVideos} />
    </>
  );
}

export default Home;
