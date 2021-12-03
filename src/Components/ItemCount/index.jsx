import React, {useState} from 'react';
import './styles.scss'

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(1)
    const [out, setOut] = useState(false)

    const handleAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
        else {
            setOut (true);
        }
    }

    const handleSub = () => {
        if (count === 1) {
            return
        } else {
            setCount(count - 1)
            setOut(false);
        }
    }

    return (
        <div className = "itemCountContainer">

            <button onClick = {handleSub}>-</button>
            <span>{count}</span>
            <button onClick = {handleAdd}>+</button>
            {out && <span>Out of stock</span>}
            <button onClick={() => onAdd(count)}> Add to cart </button>

        </div>
    )
}

export default ItemCount
