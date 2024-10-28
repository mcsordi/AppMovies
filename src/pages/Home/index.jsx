import { useFetchData } from "../../App/utils/useFetchData";
import Carrousel from "../../App/components/Carrousel";
import LoadingPage from "../LoadingPage";
import ErrorPage from "../ErrorPage";

function Home() {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const { loading, error } = useFetchData(`${baseUrl}/filmes`)

  if (loading) {
    return <div><LoadingPage /></div>
  }
  if (error) {
    return <ErrorPage />
  }
  return <Carrousel />

}
export default Home;
