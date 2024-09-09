import { Heading } from "@chakra-ui/react";
import Container from "../../Components/Container ";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Favorite() {
  return (
    <>
      <Header />
      <Container>
        <Heading mt="8vh" color="white">
          Favorite
        </Heading>
      </Container>
      <Footer />
    </>
  );
}

export default Favorite;
