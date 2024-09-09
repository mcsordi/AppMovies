import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

function SearchBar({ value, setValue, size }) {
  const focus = useRef(null);
  useEffect(() => {
    focus.current.focus();
  });
  return (
    <InputGroup
      borderRadius="5px"
      w="300px"
      h="40px"
      mt="8rem"
      backgroundColor="#fff"
      mb="1.5rem"
    >
      <Input
        ref={focus}
        fontFamily={"Poppins"}
        p="8px"
        variant="unstyled"
        color="#000"
        placeholder="Annabele"
        value={value}
        onChange={(evt) => {
          setValue(evt.target.value.toLocaleLowerCase());
        }}
      />
      <InputRightElement>
        <SearchIcon
          _hover={{ cursor: "pointer" }}
          onClick={() => {
            setValue("");
          }}
          color="blue.600"
          fontSize={"1.5rem"}
        />
      </InputRightElement>
    </InputGroup>
  );
}
export default SearchBar;
