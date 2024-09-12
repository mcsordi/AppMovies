import { Box, Center, Flex } from "@chakra-ui/react";
import Container from "../../Components/Container ";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { useParams } from "react-router-dom";
import videos from "../../json/films.json";
import ErrorPage from "../ErrorPage";
import Category from "../../Components/Category";
import ScrollTop from "../../Components/ScrollTop";

function Watch() {
  const params = useParams().id;
  const isValidId = videos.filter((el) =>
    el.id === params ? el.title : false
  );

  if (isValidId.length == 0) {
    return <ErrorPage param={`Video com o ID "${params}" não encontrado`} />;
  } else {
    return (
      <>
        <Header />
        <Center
          w={["100%"]}
          h="100vh"
          align={"center"}
          justify={"center"}
          flexDirection="column"
          gap="1rem"
        >
          <Container>
            <ScrollTop />
            <Flex
              p="1rem"
              w={["100%"]}
              align="center"
              justify="center"
              mt="10%"
              direction="column"
            >
              <Category category={isValidId[0].title} />
              <Box
                as="iframe"
                width={["100%", "860px"]}
                height={["50vh", "480px"]}
                src={`https://www.youtube.com/embed/${params}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                mt="1.5rem"
              ></Box>
            </Flex>
          </Container>
        </Center>
        <Footer />
      </>
    );
  }
}
export default Watch;
