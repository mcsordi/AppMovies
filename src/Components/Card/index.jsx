import { Box, Center, Link } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faS, faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { useFavCard } from "../../context";
import style from "./Card.module.css";

function Card({ id }) {
  const { fav, addFavorite } = useFavCard();
  const favIcon = fav.includes(id) ? solidStar : faStar;

  return (
    <Center
      flexDirection="column"
      alignItems={"end"}
      justifyContent={"end"}
      position="relative"
      mx={".3rem"}
      my={"1rem"}
    >
      <Link w="270px" h="150px" as={ReactRouterLink} to={`/watch/${id}`}>
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
          backgroundSize="cover"
          position={"relative"}
        ></Box>
      </Link>

      <figure
        className={style.starIcon}
        onClick={(evt) => addFavorite({ id }.id)}
      >
        <FontAwesomeIcon
          color="yellow"
          icon={favIcon}
          size="2x"
          cursor="pointer"
          onClick={(evt) => addFavorite({ id }.id)}
        />
      </figure>
    </Center>
  );
}

export default Card;
