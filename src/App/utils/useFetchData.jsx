import { useEffect, useState } from "react"

export const useFetchData = (url) => {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState([])
  const [error, setError] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch(url)
        const resJson = await res.json()
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
