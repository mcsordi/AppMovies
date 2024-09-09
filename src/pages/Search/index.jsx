import Header from "../../Components/Header";
import Container from "../../Components/Container ";
import Footer from "../../Components/Footer";
import { Center, Flex } from "@chakra-ui/react";
import SearchBar from "../../Components/SearchBar";
import Card from "../../Components/Card";
import { useState } from "react";
import films from "../../json/films.json";
import Category from "../../Components/Category";
function Search({ length }) {
  const [value, setValue] = useState("");
  console.log(value);
  const matchTitle = films.filter((el) =>
    value === "" ? el.id : el.title.toLocaleLowerCase().includes(value)
  );
  const labelSearch =
    matchTitle.length > 1 || matchTitle.length == 0
      ? `Sua busca por '${value}' resultou em  ${matchTitle.length} Filmes`
      : `Sua busca por '${value}' resultou em  ${matchTitle.length} Filme`;

  return (
    <>
      <Header />
      <Container>
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
          <Flex w="80%" align="center" justify="center" wrap="wrap">
            {matchTitle.map((video) => {
              return <Card id={video.id} />;
            })}
          </Flex>
        </Center>
      </Container>

      <Footer />
    </>
  );
}

export default Search;
