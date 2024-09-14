import { Flex, Center } from "@chakra-ui/react";
import Category from "../../Components/Category";
import { useFavCard } from "../../context";
import Card from "../../Components/Card";

function Favorite() {
  const { fav } = useFavCard();
  const favtext =
    fav.length == 1 ? `${fav.length} favorito` : `${fav.length} favoritos`;
  return (
    <>
      <Center flexDir="column" display="flex" w="100%" mt="10vh">
        <Category category={favtext} />
        <Flex w="80%" align={"center"} justify={"center"} wrap="wrap">
          {fav.map((el, idx) => (
            <Card key={idx} id={el} />
          ))}
        </Flex>
      </Center>
    </>
  );
}

export default Favorite;
