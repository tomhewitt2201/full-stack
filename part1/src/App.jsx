const Hello = props => {
  console.log(props)

  return (
    <>
      <p>Hello { props.name }, you are { props.age } years old</p>
    </>
  )
}

const App = () => {
	const [name, age] = ['Alice', 25];

	return (
		<>
			<h1>Greetings</h1>

			<Hello name={ name } age={ age } />
			<Hello name="Bob" age={ 30 + 5 } />
		</>
	)
}

export default App;
