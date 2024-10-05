import Banner from "../../Components/Banner";
import Carrousel from "../../Components/Carrousel";
import Spinn from "../../Components/Spinner";
import { useFetchVideos } from "../../Components/Videos";

function Home() {
  const listVideos = useFetchVideos().map((el) => el);
  if (listVideos.length == 0) {
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
