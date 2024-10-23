import P from "prop-types"
import { Spinner, Flex } from "@chakra-ui/react";

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

Spinn.propTypes={
  position:P.string
}
export default Spinn;
