import { Flex, Center } from "@chakra-ui/react";
import Category from "../../Components/Category";
import Card from "../../Components/Card";
import { useFavCard } from "../../context/context";

function Favorite() {
  const { fav } = useFavCard();

   const favtext =
    fav.length == 1 ? `${fav.length} favorito` : `${fav.length} favoritos`;
  return (
    <>
      <Center flexDir="column" display="flex" alignItems={"center"} justifyContent={"center"} h="800px" w="100%" mt="10vh">
          <Category category={favtext} />
        <Flex w="80%" align={"center"} justify={"center"} wrap="wrap">
        {fav.map((video,id) => {
              return <Card key={id} id={video} />;
            })}
        </Flex>
      </Center>
    </>
  );
}

export default Favorite;
