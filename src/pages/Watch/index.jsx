import { Box, Center, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useFetchVideos } from "../../Components/Videos";
import Category from "../../Components/Category";
import ScrollTop from "../../Components/ScrollTop";
import Spinn from "../../Components/Spinner";

function Watch() {
  const params = useParams().id;
  const responseVideos = useFetchVideos()
   const isValidId = responseVideos && responseVideos.filter((el) =>
       el.code === params ? el.title : false
  );
   if (responseVideos && isValidId.length < 1) {
    return <Spinn />;
  } else {
    return (
      <>
        <Center
          w={["100%"]}
          h="100vh"
          align={"center"}
          justify={"center"}
          flexDirection="column"
          gap="1rem"
        >
          <ScrollTop />
          <Flex
            p="1rem"
            w={["100%"]}
            align="center"
            justify="center"
            mt="10%"
            direction="column"
          >
            <Category category={responseVideos && isValidId[0].title} />
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
        </Center>
      </>
    );
  }
}
export default Watch;
