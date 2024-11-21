import { useState } from "react"
import { AddCategory } from './components/AddCategory'

export const GifApp = () =>{
    
    const [categories, setCategories] = useState(['Anime', 'Accion','Drama'])
    
    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }
    return(
        <>
        <h1>GifApp</h1>
        <AddCategory 
        // setCategories={ setCategories }
        onNewCategory= {(value)=> onAddCategory(value)}
        />
        <ol>
            { categories.map(category => {
                return <li key={ category }> { category }</li>
            })}
        </ol>
        </>
    )
}