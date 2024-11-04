import { useEffect, useState } from "react"

export const useFetchData = (urls) => {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState([])
  const [error, setError] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await Promise.all(urls.map((url) => fetch(url)))
        const resJson = await Promise.all(res.map((res) => res.json()))
        setResponse(resJson)
      } catch (e) {
        setError(e)
        return
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])
  return { loading, response, error }
}
