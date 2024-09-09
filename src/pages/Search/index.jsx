import Header from "../../Components/Header";
import Container from "../../Components/Container ";
import Footer from "../../Components/Footer";
import { Heading } from "@chakra-ui/react";
function Search() {
  return (
    <>
      <Header />
      <Container>
        <Heading color={"white"} mt="8vh">
          Search
        </Heading>
      </Container>
      <Footer />
    </>
  );
}

export default Search;
