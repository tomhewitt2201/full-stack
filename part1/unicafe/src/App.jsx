import { useState } from 'react'

const Button = ({ name, title, onClick }) => <button name={ name } title={ title } onClick={ onClick }>{ name }</button>
const StatisticLine = ({ text, score }) => {
	return (
		<tr>
			<td>{ text }</td>
			<td>{ score }</td>
		</tr>
	)
}

const Statistics = ({ types, feedback, total, average, nps }) => {
	if (total !== 0) {
		return (
			<table>
				<tbody>
					{/* scores */}
					{ types.map(type => <StatisticLine key={ type } text={ type } score={ feedback[type] } />) }

					{/* total */}
					<StatisticLine text="Total" score={ total } />

					{/* average */}
					<StatisticLine text="Average" score={ average } />

					{/* nps */}
					<StatisticLine text="Positive" score={ `${ nps }%` } />
				</tbody>
			</table>
		)
	}

	return (
		<>
			<p>No feedback given</p>
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
			<h2>statistics</h2>
			<Statistics types={ types } feedback={ feedback } total={ total } average={ average } nps={ nps } />
        </div>
    )
}

export default App