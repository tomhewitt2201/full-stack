import { useState } from 'react'

const Button = ({ name, title, onClick }) => <button name={ name } title={ title } onClick={ onClick }>{ name }</button>
const Stat = ({ feedback, score }) => <p>{ feedback } { score }</p>

const App = () => {
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })

    const types = Object.keys(feedback)

	const handleClick = type => setFeedback({ ...feedback, [type]: feedback[type] + 1 })

    return (
        <div>
			<h1>give feedback</h1>

			{/* buttons */}
			<div className="buttons-wrapper">
				{ types.map(type => <Button key={ type } name={ type } title={ type[0].toUpperCase() } onClick={ () => handleClick(type) } />) }
			</div>

			{/* stats */}
			<h2>statistics</h2>

			<div className="feedback-wrapper">
				{ types.map(type => <Stat key={ type } feedback={ type } score={ feedback[type] } />) }
			</div>
        </div>
    )
}

export default App