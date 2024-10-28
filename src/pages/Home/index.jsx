import { useFetchData } from "../../App/utils/useFetchData";
import Carrousel from "../../App/components/Carrousel";
import Banner from "../../App/components/Banner";
import LoadingPage from "../LoadingPage";
import LoadError from "../LoadError";

function Home() {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const { loading, error } = useFetchData(`${baseUrl}/filmes`)

  if (loading) {
    return <div><LoadingPage /></div>
  }
  if (error) {
    return <LoadError />
  }
  return <>
    <Banner />
    <Carrousel />
  </>

}
export default Home;
