import { useState } from "react"

const ItemCount = () => {   

    const stock = 7

    const [count, setCount] = useState(0)

    const increase = () => count < stock && setCount(count + 1)
    const decrease = () => count > 0 && setCount(count - 1)

    return (
        <div>
            <button type="button" onClick={decrease}>-</button>
            <button type="button"> Comprar : {count} </button>
            <button type="button" onClick={increase}>+</button>
        </div>
    )
}

export default ItemCount;