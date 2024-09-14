import { Center, Img } from "@chakra-ui/react";

import erro from "./image/erro404.png";
import Category from "../../Components/Category";

// eslint-disable-next-line react/prop-types
function ErrorPage({ param }) {
  return (
    <>
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
    </>
  );
}

export default ErrorPage;
