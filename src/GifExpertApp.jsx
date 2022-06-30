import { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Naruto'])

  const onAddCategory = (category) => {

    if (categories.includes(category)) return

    setCategories([category, ...categories])
  }

  return (
    <>
      {/* TITULO */}
      <h1>GifExpertApp</h1>

      {/* INPUT */}
      <AddCategory newCategory={onAddCategory} />

      {/* CATEGORI LIST */}

      {categories.map(category => <GifGrid key={category} category={category} />)}


    </>
  )
}

export default GifExpertApp