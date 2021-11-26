import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router'
import { getCharacter} from '../../Services/getItems';
import ItemDetail from '../../Components/ItemDetail';

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [character, setCharacter] = useState({})

    useEffect( ()=> {
        
        ( async () => {
            const character = await getCharacter (id);
            console.log(character);
            setCharacter(character);
        })()


    }, [id])
    
    console.log(character);

    return (
        <>
        {
            character !== undefined ?
            <ItemDetail character={character}/>
            :
            null
        }
        </>
    )
}

export default ItemDetailContainer
