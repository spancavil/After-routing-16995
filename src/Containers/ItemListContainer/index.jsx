import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getCharacters, getCharactersByCategory } from '../../Services/getItems';
import ItemList from '../../Components/ItemList';
import './styles.scss'
import Loader from '../../Components/Loader';

const ItemListContainer = () => {

    const {categoryId} = useParams()
    const [characters, setCharacters] = useState([]);

    useEffect( ()=> {
        
        //Vemos que se obtiene el categoryId desde los params
        console.log(categoryId);

        //Funcion IIFE (autoejecutada) de manera asincrónica utilizando async await.
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
        <Loader/>
        }
        </>
    )
}

export default ItemListContainer;
