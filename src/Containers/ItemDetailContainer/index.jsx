import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getCharacter} from '../../Services/getItems';
import ItemDetail from '../../Components/ItemDetail';
import Loader from '../../Components/Loader';
import { useParams } from 'react-router';

const ItemDetailContainer = () => {

    const {id} = useParams()
    const [character, setCharacter] = useState({});

    useEffect( ()=> {
        
        getCharacter (id)
        .then( char => setCharacter(char));

    }, [id])
    
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
