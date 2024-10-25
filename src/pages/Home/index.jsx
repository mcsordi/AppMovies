import Banner from "../../Components/Banner";
import Carrousel from "../../Components/Carrousel";
import Spinn from "../../Components/Spinner";
import { useFetchVideos } from "../../Components/Videos";

function Home() {
const fetchVideos = useFetchVideos()
const listVideos = fetchVideos && fetchVideos.map((el)=>el);
  if (!listVideos) {
    return <Spinn />;
  }
  return (
    <>
      <Banner image="favoritos" />
      <Carrousel listVideos={listVideos} />
    </>
  );
}

export default Home;
