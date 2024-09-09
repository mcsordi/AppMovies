import { Box } from "@chakra-ui/react";

function Banner({ image }) {
  return (
    <Box
      mt={"8vh"}
      w="100%"
      h="347px"
      backgroundImage={`url(./Image/banner-${image}.png)`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    ></Box>
  );
}
export default Banner;
