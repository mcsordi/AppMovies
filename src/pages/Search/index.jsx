import Card from "../../App/components/Card"
import { useFetchData } from "../../App/utils/useFetchData"
import LoadingPage from "../LoadingPage"
import ErrorPage from "../ErrorPage"
import InputFilm from "../../App/components/InputFilm"
import { useState } from "react"
import ShowText from "../../App/components/ShowText"

function Search() {
  const [text, setText] = useState()
  const baseUrl = `${import.meta.env.VITE_BASE_URL}/filmes`
  const { loading, response, error } = useFetchData(baseUrl)
  const searchFilm = response.filter((title) => title.title.toLowerCase().includes(text) && title)
  const isSometingWrote = text ? searchFilm : response
  const numberOfResults = isSometingWrote.length
  const textResult = numberOfResults == 1 ? `${numberOfResults} resultado` : `${numberOfResults} resultados`
  const noneResults = numberOfResults < 1 && `Não foi possivel encontrar '${text}'`

  if (loading) {
    return <LoadingPage />
  }
  if (error) {
    return <ErrorPage />
  }
  return (
    <section className="flex flex-col items-center justify-center">
      <InputFilm text={(evt) => setText(evt)} />
      <ShowText text={numberOfResults < 1 ? noneResults : textResult} />
      <div className="gap-3 mt-6 grid sm:mt-3 sm:gap-0 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {isSometingWrote.map((film) => <Card className="text-white" key={film.id}
          src={`https://img.youtube.com/vi/${film.code}/mqdefault.jpg`} />)}
      </div>
    </section>
  )
}
export default Search
