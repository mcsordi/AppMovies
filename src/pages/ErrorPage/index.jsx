import P from "prop-types"
import { Center, Img } from "@chakra-ui/react";
import erro from "./image/erro404.png";
import Category from "../../Components/Category";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Container from "../../Components/Container ";

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
          gap="2.5rem"
        >
          <Category category={param} />
          <Img src={erro} />
        </Center>
      </Container>
      <Footer />
    </>
  );
}
ErrorPage.propTypes={
  param:P.string
}

export default ErrorPage;
