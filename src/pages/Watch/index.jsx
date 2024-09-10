import { Center } from "@chakra-ui/react";
import Container from "../../Components/Container ";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import { useParams } from "react-router-dom";
import videos from "../../json/films.json";
import ErrorPage from "../ErrorPage";
import Category from "../../Components/Category";

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
        <Container>
          <Center
            w="100%"
            h="100vh"
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection="column"
            gap="1rem"
          >
            <Category category={isValidId[0].title} />
            <iframe
              width="854"
              height="480"
              src={`https://www.youtube.com/embed/${params}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Center>
        </Container>
        <Footer />
      </>
    );
  }
}
export default Watch;
