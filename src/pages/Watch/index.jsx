import { useParams } from "react-router-dom"
import { useFetchData } from "../../App/utils/useFetchData"
import LoadingPage from "../LoadingPage"
import LoadError from "../LoadError"

function Watch() {
  const id = useParams().id
  const baseUrl = import.meta.env.VITE_BASE_URL
  const { loading, response, error } = useFetchData([`${baseUrl}/filmes/${id}`])

  const filmTitle = response[0]?.map(({ title }) => title)

  if (loading) {
    return <LoadingPage />
  }
  if (error) {
    return <LoadError />
  }
  return (<div className="absolute flex flex-col  items-center justify-center w-full h-full">
    <div className="pb-4">
      <h2 className="font-poppins pt-4 font-medium text-xl text-center text-white">{filmTitle}</h2>
    </div>
    {
      <iframe
        className="w-[320px] h-[300px] sm:w-[560px] sm:h-[315px] xl:w-[700px] xl:h-[500px] rounded-md"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write;
      encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    }
  </div >

  )
}
export default Watch
