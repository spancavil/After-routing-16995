import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCharacters, getCharactersByCategory } from '../../Services/getItems';
import ItemList from '../../Components/ItemList';
import './styles.scss'

const ItemListContainer = () => {

    const {categoryId} = useParams();
    const [characters, setCharacters] = useState([]);

    useEffect( ()=> {
        
        console.log("Entro al use effect");
        
        (async () => {
            
            if (categoryId !== undefined){
                
                const personajes = await getCharactersByCategory(categoryId);
                console.log(personajes);
                setCharacters(personajes)

            } else {
                
                const personajes = await getCharacters()
                console.log(personajes)
                setCharacters(personajes)

            }
        })()

    }, [categoryId])

    console.log(categoryId);

    return (
        <>
        {characters.length !== 0 ?
        <ItemList characters={characters}/>
        :
        null
        }
        </>
    )
}

export default ItemListContainer;
