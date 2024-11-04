import { useFetchData } from "../../App/utils/useFetchData";
import Carrousel from "../../App/components/Carrousel";
import Banner from "../../App/components/Banner";
import LoadingPage from "../LoadingPage";
import LoadError from "../LoadError";

function Home() {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const { loading, response, error } = useFetchData([`${baseUrl}/filmes`, `${baseUrl}/categories`])

  if (loading) {
    return <div><LoadingPage /></div>
  }
  if (error) {
    return <LoadError />
  }
  const category = response[1]
  const films = response[0]
  return <>
    <Banner />
    <Carrousel films={films} response={category} />
  </>

}
export default Home;
