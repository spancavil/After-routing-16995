import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getCharacters, getCharactersByCategory } from '../../Services/getItems';
import ItemList from '../../Components/ItemList';
import './styles.scss'

const ItemListContainer = () => {

    const {categoryId} = useParams()
    const [characters, setCharacters] = useState([]);

    useEffect( ()=> {
        
        console.log(categoryId);
        ( async () => {

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

    console.log(characters);

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
