import { Center, Flex } from "@chakra-ui/react";
import SearchBar from "../../Components/SearchBar";
import Card from "../../Components/Card";
import { useEffect, useState } from "react";
import films from "../../json/films.json";
import Category from "../../Components/Category";
import Spinner from "../../Components/Spinner";

function Search() {
  const [spinn, SetSpinn] = useState(true);
  const [value, setValue] = useState("");
  console.log(value);
  const matchTitle = films.filter((el) =>
    value === "" ? el.id : el.title.toLocaleLowerCase().includes(value)
  );
  const labelSearch =
    matchTitle.length > 1 || matchTitle.length == 0
      ? `Sua busca por '${value}' resultou em  ${matchTitle.length} Filmes`
      : `Sua busca por '${value}' resultou em  ${matchTitle.length} Filme`;

  useEffect(() => {
    setTimeout(() => SetSpinn(false), 1000);
  });

  if (spinn) {
    return (
      <>
        <Spinner />
      </>
    );
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
              return <Card key={video.id} id={video.id} />;
            })}
          </Flex>
        </Center>
      </>
    );
  }
}

export default Search;
