import Container from "../../Components/Container ";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import Carrousel from "../../Components/Carrousel";
import ScrollTop from "../../Components/ScrollTop";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <ScrollTop />
        <Banner image="favoritos" />
        <Carrousel />
      </Container>
      <Footer />
    </>
  );
}

export default Home;
