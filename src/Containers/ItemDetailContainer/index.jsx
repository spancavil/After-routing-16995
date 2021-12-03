import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getProduct } from '../../Services/getItems';
import ItemDetail from '../../Components/ItemDetail';

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [product, setProduct] = useState({})

    useEffect( ()=> {
        
        ( async () => {
            const product = await getProduct (id);
            setProduct(product);
        })()

    }, [id])
    
    console.log(product);

    return (
        <>
        {
            product !== undefined ?
            <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 30,
            }}>
                <ItemDetail product={product}/>
            </div>
            :
            null
        }
        </>
    )
}

export default ItemDetailContainer
