import { Center, Img } from "@chakra-ui/react";
import Container from "../../Components/Container ";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import erro from "./image/erro404.png";
import Category from "../../Components/Category";
import { useParams } from "react-router-dom";

function ErrorPage({ param }) {
  return (
    <>
      <Header />
      <Container>
        <Center
          flexDir={"column"}
          w="100%"
          h="100vh"
          align="center"
          justify="center"
          gap="1rem"
        >
          <Category category={param} />
          <Img src={erro} />
        </Center>
      </Container>
      <Footer />
    </>
  );
}

export default ErrorPage;
