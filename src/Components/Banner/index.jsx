import P from "prop-types"
import { Box } from "@chakra-ui/react";

function Banner({ image }) {
  return (
    <Box
      mt={"4.5rem"}
      w={["100vw", "100%"]}
      h={["200px", "347px"]}
      backgroundImage={`url(./Image/banner-${image}.png)`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Box
        w="100%"
        h="100%"
        shadow="0px -30px 100px 20px #ffffff50 inset "
      ></Box>
    </Box>
  );
}
Banner.propTypes={
  image:P.string
}
export default Banner;
