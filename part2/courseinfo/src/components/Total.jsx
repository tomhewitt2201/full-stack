const Total = props => {
	const total = props.parts.reduce((sum, part) => sum + part.exercises, 0)

	return (
		<p><strong>Total number of exercises: { total }</strong></p>
	)
}

export default Total;