import { useState } from "react"


const AddCategory = ({newCategory}) => {
  
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = e => {
        e.preventDefault()

        if(inputValue.length <= 1) return 
        newCategory(inputValue.trim())

        setInputValue('')

    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder="Ingrese un término de busqueda"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)} 
        />
    </form>
  )
}

export default AddCategory