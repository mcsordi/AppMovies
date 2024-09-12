import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@chakra-ui/react";
function ScrollTop() {
  return (
    <Box
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
      w="40px"
      h="40px"
      borderRadius="50%"
      position="fixed"
      bottom="0px"
      right={"0"}
      mx="10px"
      my="10px"
      backgroundColor="#fff"
      cursor={"pointer"}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      transition=".3s ease-in-out all"
      zIndex="999999999999"
      _hover={{ backgroundColor: "#000", boxShadow: "0px 0px 5px 2px #f00" }}
    >
      <Box mt=".5rem">
        <FontAwesomeIcon color="#f00" size="lg" icon={faSortUp} />
      </Box>
    </Box>
  );
}
export default ScrollTop;
