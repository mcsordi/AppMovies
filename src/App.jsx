import Banner from "./App/components/Banner";
import Header from "./App/components/Header";
import { useFetchData } from "./App/utils/useFetchData";

import Carrousel from "./App/components/Carrousel";
import LoadingPage from "./App/components/LoadingPage";
import Footer from "./App/components/Footer";

function App() {
  const baseUrl = import.meta.env.VITE_BASE_URL
  const { loading, error } = useFetchData(`${baseUrl}/filmes`)

  if (loading) {
    return <div><LoadingPage /></div>
  }
  if (error) {
    return <div>Parece que ocorreu um erro, Recarregue a página</div>
  }
  return (<>
    <section className="min-h-screen w-full bg-blacktone">
      <Header />
      <Banner />
      <Carrousel />
      <Footer />
    </section>
  </>)

}
export default App;
