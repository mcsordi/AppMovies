import { Spinner, Flex } from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
function Spinn({ position }) {
  return (
    <Flex
      backgroundColor={"black.1"}
      align="center"
      justify="center"
      pos={position}
      h="100vh"
    >
      <Spinner color="red.2" size="xl" speed="0.65s" thickness="3px" />
    </Flex>
  );
}

export default Spinn;
