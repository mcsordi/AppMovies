import { Spinner, Flex } from "@chakra-ui/react";

function Spinn() {
  return (
    <Flex backgroundColor={"black.1"} align="center" justify="center" h="100vh">
      <Spinner color="red.2" size="xl" speed="0.65s" thickness="3px" />
    </Flex>
  );
}

export default Spinn;
