import { useFetchData } from "../../App/utils/useFetchData";
import Carrousel from "../../App/components/Carrousel";
import LoadingPage from "../LoadingPage";

function Home() {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const { loading, error } = useFetchData(`${baseUrl}/filmes`)

  if (loading) {
    return <div><LoadingPage /></div>
  }
  if (error) {
    return <div>Parece que ocorreu um erro, Recarregue a página</div>
  }
  return <Carrousel />

}
export default Home;
