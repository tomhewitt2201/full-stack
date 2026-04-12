import { useState } from 'react'

const Button = ({ name, title, onClick }) => <button name={ name } title={ title } onClick={ onClick }>{ name }</button>
const StatisticLine = ({ text, score }) => <p>{ text } { score }</p>
const Statistics = ({ types, feedback, total, average, nps }) => {
	return (
		<>
			<h2>statistics</h2>

			<div className="feedback-wrapper">
				<h3>scores</h3>
				{ types.map(type => <StatisticLine key={ type } text={ type } score={ feedback[type] } />) }

				<h3>total</h3>
				<StatisticLine feedback="Total" score={ total } />

				<h3>average</h3>
				<StatisticLine feedback="Average" score={ average } />

				<h3>NPS</h3>
				<StatisticLine feedback="Positive" score={ `${ nps }%` } />
			</div>
		</>
	)
}

const App = () => {
    const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 })

    const types = Object.keys(feedback) 
	const weights = { good: 1, neutral: 0, bad: -1 } 
	const total = Object.values(feedback).reduce((sum, value) => sum + value, 0) 
	const average = types.reduce((sum, type) => sum + feedback[type] * weights[type], 0) / total || 0 
	const nps = (feedback.good / total) * 100 || 0 

	const handleClick = type => setFeedback({ ...feedback, [type]: feedback[type] + 1 }) 


    return (
        <div>
			<h1>give feedback</h1>

			{/* buttons */}
			<div className="buttons-wrapper">
				{ types.map(type => <Button key={ type } name={ type } title={ type[0].toUpperCase() } onClick={ () => handleClick(type) } />) }
			</div>

			{/* stats */}
			<Statistics types={ types } feedback={ feedback } total={ total } average={ average } nps={ nps } />
        </div>
    )
}

export default App