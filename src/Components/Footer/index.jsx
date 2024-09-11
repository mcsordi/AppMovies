import { Heading, Flex } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      align={"center"}
      justify={"center"}
      as="footer"
      backgroundColor="black.0"
      color="white"
      height={["3rem", "5rem"]}
      borderTop={"2px solid #E53E3E"}
    >
      <Heading
        fontFamily={"Poppins"}
        fontSize={["0.8rem", "1rem", "1.5rem"]}
        fontWeight={300}
        as="h2"
      >
        MathewsFlix&copy; desenvolvido por Matheus Caris em 2024
      </Heading>
    </Flex>
  );
}

export default Footer;
