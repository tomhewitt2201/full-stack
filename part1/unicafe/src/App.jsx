import { useState } from 'react'

const Button = ({ name, title, onClick }) => <button name={ name } title={ title } onClick={ onClick }>{ name }</button>
const Stat = ({ text, score }) => <p>{ text } { score }</p>
const Positive = ({ text, score }) => <p>{ text } { score }</p>

const App = () => {
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })

    const types = Object.keys(feedback) // types to turn feedback into an iterable array
	const weights = { good: 1, neutral: 0, bad: -1 } // weights for calculations later
	const total = Object.values(feedback).reduce((sum, value) => sum + value, 0) // total - loop over values in feedback, use reduce method which takes each loop value and adds it to the sum, which starts at 0
	const average = types.reduce((sum, type) => sum + feedback[type] * weights[type], 0) / total || 0 // average, so use reduce again but this time when we're adding the value of each type we're then multiplying it by the weight and then dividing by the total. I've also learned about a null style operator that is similar to ?? which I use in twig so that defaults the value to 0.
	const nps = (feedback.good / total) * 100 || 0 // simple calculation and again using that conditional to check for a NaN. 

	const handleClick = type => setFeedback({ ...feedback, [type]: feedback[type] + 1 }) // spread the feedback array, then for the specific feedback item, add 1. 


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
				<h3>scores</h3>
				{ types.map(type => <Stat key={ type } text={ type } score={ feedback[type] } />) }

				<h3>total</h3>
				<Stat feedback="Total" score={ total } />

				<h3>average</h3>
				<Stat feedback="Average" score={ average } />

				<h3>NPS</h3>
				<Positive feedback="Total" score={ `${ nps }%` } />
			</div>
        </div>
    )
}

export default App