import { useEffect, useState } from "react"
import { useFetchData } from "../../App/utils/useFetchData"
import FormNewFilm from "../../App/components/FormNewFilm"
import MessagePost from "../../App/components/MessagePost"

const postFilm = async (title, category, newCategory, code, setStatusMessage) => {
  const baseURl = import.meta.env.VITE_BASE_URL
  const response = await fetch(`${baseURl}/filmes`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST",
    body: JSON.stringify({
      "title": title,
      "category": category == "Outro" ? newCategory : category,
      "code": code
    })
  })
  if ((await response).status == 200) {
    return setStatusMessage(true)
  } else {
    return setStatusMessage(false)
  }
}

function Posts() {
  const [title, setTitle] = useState()
  const [code, setCode] = useState()
  const [category, setCategory] = useState()
  const [newCategory, setNewCategory] = useState()
  const categoriesUrl = import.meta.env.VITE_CATEGORIES_DB
  const { response } = useFetchData(categoriesUrl)
  const [target, setTarget] = useState("flex")
  const [statusMessage, setStatusMessage] = useState()

  useEffect(() => {
    setTimeout(() => {
      setStatusMessage(undefined)
    }, 3000)
  }, [statusMessage])

  return <section className="flex flex-col w-full h-screen items-center justify-center">
    <FormNewFilm response={response} setNewCategory={(evt) => setNewCategory(evt)}
      setTarget={setTarget} target={target} setTitle={(evt) => setTitle(evt)}
      setCategory={(evt) => setCategory(evt)} setCode={(evt) => setCode(evt)}
      onClick={() => { return postFilm(title, category, newCategory, code, setStatusMessage) }}
    />
    <MessagePost statusMessage={statusMessage} />

  </section >
}
export default Posts
