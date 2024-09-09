import { Box } from "@chakra-ui/react";
function Container({ children }) {
  return (
    <Box
      position="relative"
      overflow="hidden"
      as="section"
      w="100%"
      minH={"100vh"}
      h={"100%"}
      backgroundColor="black.1"
    >
      {children}
    </Box>
  );
}
export default Container;
