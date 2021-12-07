import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getCharacter} from '../../Services/getItems';
import ItemDetail from '../../Components/ItemDetail';
import Loader from '../../Components/Loader';

const ItemDetailContainer = () => {

    const [character, setCharacter] = useState({})

    useEffect( ()=> {
        
        getCharacter ("1")
        .then( char => setCharacter(char));

    }, [])
    
    console.log(character);

    return (
        <>

        {
            character !== undefined ?
            <ItemDetail character={character}/>
            :
            <Loader/>
        }
        </>
    )
}

export default ItemDetailContainer
