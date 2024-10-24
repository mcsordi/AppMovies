import { Center, Flex } from "@chakra-ui/react";
import SearchBar from "../../Components/SearchBar";
import Card from "../../Components/Card";
import { useState } from "react";
import { useFetchVideos } from "../../Components/Videos";
import Category from "../../Components/Category";
import Spinner from "../../Components/Spinner";

function Search() {
  const [value, setValue] = useState("");
  const responseVideos = useFetchVideos()
 
  const listVideos = responseVideos && responseVideos.filter((el) => el);
  const matchTitle = responseVideos && responseVideos.filter((el) =>
        value === "" ? el.code : el.title.toLocaleLowerCase().includes(value)
  );

  const labelSearch =
  responseVideos && matchTitle.length > 1 || responseVideos && matchTitle.length == 0
      ? `Sua busca por '${value}' resultou em  ${responseVideos && matchTitle.length} Filmes`
      : `Sua busca por '${value}' resultou em  ${responseVideos && matchTitle.length} Filme`;
  if (!listVideos) {
    return <Spinner />;
  } else {
    return (
      <>
        <Center>
          <SearchBar value={value} setValue={setValue} />
        </Center>
        <Category
          category={
            value == ""
              ? ` ${matchTitle.length} Filmes Encontrados`
              : labelSearch
          }
        />
        <Center w="100%">
          <Flex w="85%" align="center" justify="center" wrap="wrap">
            {matchTitle.map((video) => {
              return <Card key={video.id} id={video.code} />;
            })}
          </Flex>
        </Center>
      </>
    );
  }
}

export default Search;
