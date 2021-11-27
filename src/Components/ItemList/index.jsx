import React from 'react';
import Item from '../Item';
import './styles.scss'

const ItemList = ({characters}) => {

    //console.log(characters);

    return (
        <div className= "itemList">
            {characters.map(character => {
                return <Item character = {character} key={character.id}/>
            })}
        </div>
    )
}

export default ItemList
