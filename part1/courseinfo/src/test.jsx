import React, { useState } from 'react'

const History = props => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }

    return (
        <div>
            button press history: { props.allClicks.join(' ') }
        </div>
    )
}

const Button = ({ name, title, onClick }) => <button name={ name } title={ title } onClick={ onClick }>{ name }</button>

const App = () => {
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })

    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)

    const handleClicks = e => {
        const newClicks = {
            ...clicks,
            [e.target.name]: clicks[e.target.name] + 1
        }

        const newTotal = () => total + 1

        setClicks(newClicks)
        setAll(allClicks.concat(e.target.title))
        setTotal(newTotal)
    }

    return (
        <div>
            { clicks.left }

            { Object.keys(clicks).map(item => <Button key={ item } title={ item[0].toUpperCase() } name={ item } onClick={ handleClicks } />) }
            
            { clicks.right }    
            
            <History allClicks={ allClicks } />
            <p>Total { total }</p>
        </div>
    )
}

export default App