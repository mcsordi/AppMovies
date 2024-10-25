import { useEffect, useState } from "react";
const url = import.meta.env.VITE_DATABASE_CATEGORIES;
export function useCategories() {
  const [categories,setCategories] = useState([])
  useEffect(()=>{
    const response =  async () =>{
    const api = await fetch(url);
    api.json().then(res=>{
      setCategories(res)
    })
    
    }
    return response
  },[])
  return categories
}


