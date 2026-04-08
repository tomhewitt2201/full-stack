const Hello = props => {
  return (
    <div>
      <p>Hello { props.name }, you are { props.age } years old</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Alice" age={ 25 } />
      <Hello name="Bob" age={ 30 } />
      <Hello name="Charlie" age={ 35 } />
    </div>
  )
}

export default App;
