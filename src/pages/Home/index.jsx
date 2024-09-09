import Container from "../../Components/Container ";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import { filterCategories } from "../../Components/Card";

function Home() {
  return (
    <>
      <Header />
      <Container>
        <Banner image="favoritos" />
        {filterCategories()}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
