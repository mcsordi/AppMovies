import { useParams } from "react-router-dom"
import ShowText from "../../App/components/ShowText"
import { useFetchData } from "../../App/utils/useFetchData"
import ErrorPage from "../ErrorPage"
import LoadingPage from "../LoadingPage"

function Watch() {
  const id = useParams().id
  const baseUrl = import.meta.env.VITE_BASE_URL
  const { loading, response, error } = useFetchData(`${baseUrl}/filmes/${id}`)

  if (loading) {
    return <LoadingPage />
  }

  if (error) {
    return <ErrorPage />
  }
  return (<div className="absolute flex flex-col  items-center justify-center w-full h-full">
    <div className="pb-4">
      <ShowText text={response.map(({ title }) => title)} />
    </div>
    {<iframe
      className="w-[320px] h-[300px] sm:w-[560px] sm:h-[315px] xl:w-[700px] xl:h-[500px] rounded-md"
      src={`https://www.youtube.com/embed/${id}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write;
      encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
  </div>

  )
}
export default Watch
