import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getCharacter} from '../../Services/getItems';
import ItemDetail from '../../Components/ItemDetail';

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [character, setCharacter] = useState({})

    useEffect( ()=> {
        
        ( async () => {
            const character = await getCharacter (id);
            setCharacter(character);
        })()

    }, [id])
    
    console.log(character);

    return (
        <>
        {
            character !== undefined ?
            <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 30,
            }}>
                <ItemDetail character={character}/>
            </div>
            :
            null
        }
        </>
    )
}

export default ItemDetailContainer
