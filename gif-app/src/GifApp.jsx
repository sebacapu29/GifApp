import { useState } from "react"
import { AddCategory, GifGrid } from './components'

export const GifApp = () =>{
    
    const [categories, setCategories] = useState(['Demon slayer'])
    
    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }
    return(
        <>
        <h1>GifApp</h1>
        <AddCategory 
            onNewCategory= {(value)=> onAddCategory(value)}
        />
            { categories.map((category) => (
                <GifGrid key={category} category={category}/>
            ))
            }
        </>
    )
}