import { useEffect, useState } from "react";

function ListCategories() {
  const url = import.meta.env.VITE_DATABASE_CATEGORIES
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const FilmCategories = async () => {
      const api = await fetch(url);
      const data = await api.json();
      setCategories(data);
    };
    FilmCategories();
  }, [url]);
  return categories;
}

export default ListCategories;
