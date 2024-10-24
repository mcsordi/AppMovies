import P from "prop-types"
import { Box } from "@chakra-ui/react";
function Container({ children }) {
  return (
    <Box
      display="flex"
      position="relative"
      overflow="hidden"
      as="section"
      w="100%"
      minH="100vh"
      h="100%"
      backgroundColor="black.1"
      alignItems="center"
      justifyContent="start"
      flexDirection="column"
    >
      {children}
    </Box>
  );
}
Container.propTypes={
  children:P.object
}
export default Container;
