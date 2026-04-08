const App = () => {
	const now = new Date()
	const [a, b] = [10, 20];
	console.log(now, a+b)

	return (
		<div>
			<p>Hello world, it is { now.toString() }</p>
			<p>
				{ a } plus { b } is { a + b }
			</p>
		</div>
	)
}

export default App;
