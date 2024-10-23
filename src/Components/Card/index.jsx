import P from "prop-types"
import { Box, Center, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { useFavCard } from "../../context";
import style from "./Card.module.css";


function Card({ id }) {
  const { fav, addFavorite } = useFavCard();
  const favIcon = fav.includes(id) ? (
    <StarIcon w={6} h={6} color="yellow" />
  ) : (
    <StarIcon w={6} h={6} color="#fff" />
  );

  return (
    <Center
      flexDirection="column"
      alignItems={"start "}
      justifyContent={"end"}
      position="relative"
      mx={".3rem"}
      my={"1rem"}
    >
      <Link
        w={["143px", "286px"]}
        h={["80px", "161px"]}
        as={ReactRouterLink}
        to={`/watch/${id}`}
      >
        <Box
          _hover={{
            transform: "scale(1.15)",
            cursor: "pointer",
            zIndex: "99999",
          }}
          transition=".3s ease-in-out all"
          borderRadius="10px"
          w="100%"
          h="100%"
          alt="Trailer Img"
          backgroundImage={`url(https://img.youtube.com/vi/${id}/mqdefault.jpg)`}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          position={"relative"}
        ></Box>
      </Link>

      <Box
        as="figure"
        className={style.starIcon}
        w={["30px", "50px"]}
        h={["30px", "50px"]}
        onClick={() => addFavorite(id)}
      >
        {favIcon}
      </Box>
    </Center>
  );
}

Card.propTypes={
  id:P.string
}
export default Card;
