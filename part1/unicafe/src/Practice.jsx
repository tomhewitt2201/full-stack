import { useState } from 'react'

const Button = ({ name, onClick }) => <button name={ name } onClick={ onClick }>{ name }</button>

const App = () => {
    const [cart, setCart] = useState({ apples: 0, bananas: 0, oranges: 0 })

    const fruit = Object.keys(cart)
    const handleAddCart = choice => {
        setCart(prev => ({ ...prev, [choice]: prev[choice] + 1 }))

        console.log(`old value: ${ choice } = ${ cart[choice] }`)
        console.log(`new value: ${ choice } = ${ cart[choice] + 1 }`)
    }

    return (
        <div>
            <h1>Add to cart</h1>

            { fruit.map(item => <Button key={ item } name={ item } onClick={ () => handleAddCart(item) } />) }        
        </div>
    )
}

export default App