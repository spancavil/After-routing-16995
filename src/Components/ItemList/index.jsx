import React from 'react';
import Item from '../Item';
import './styles.scss'

const ItemList = ({characters}) => {

    //console.log(characters);

    return (
        <div className= "itemList">
            {characters.map(character => {
                return <Item key = {character.id} character = {character}/>
            })}
        </div>
    )
}

export default ItemList
