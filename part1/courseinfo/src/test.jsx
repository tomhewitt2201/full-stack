import React, { useState } from 'react'

const App = () => {
    const [clicks, setClicks] = useState({
        left: 0, right: 0
    })

    const handleClicks = e => {
        const newClicks = {
            ...clicks,
            [e.target.name]: clicks[e.target.name] + 1
        }

        setClicks(newClicks)
    }

    return (
        <div>
            { clicks.left }
            <button onClick={ handleClicks } name="left">left</button>

            <button onClick={ handleClicks } name="right">right</button>
            { clicks.right }
        </div>
    )
}

export default App