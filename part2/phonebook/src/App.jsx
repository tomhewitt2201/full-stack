import { useState, useEffect } from 'react';
import axios from 'axios'

import Form from './components/Form'
import Search from './components/Search'
import Person from './components/Person'

const App = () => {
	const [persons, setPersons] = useState([])
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filter, setFilter] = useState('')

	const hook = () => {
		axios.get('http://localhost:3001/persons').then(res => setPersons(res.data))
	}

	useEffect(hook, [])

	const handleChange = (e, method) => method(e.target.value)

	const searchPersons = filter ? persons.filter(person => person.name.includes(filter)) : persons

	const addDetails = e => {
		e.preventDefault()

		const check = persons.filter(person => person.name === newName)

		if (!newName) {
			return alert(`Name can't be blank`)
		} else if (!newNumber) {
			return alert(`Number can't be blank`)
		}
		
		if (check.length) {
			return alert(`${ newName } is already added to phonebook`)
		}

		setPersons(prev => prev.concat({ name: newName, telephone: newNumber, id: persons.length + 1 }))

		return setNewName('')
	}

	return (
		<div>
			<h2>Phonebook</h2>

			<Search value={ filter } onChange={ e => handleChange(e, setFilter) }/>

			<h2>Add new</h2>

			<Form name={ newName } number={ newNumber } handleName={ e => handleChange(e, setNewName) } handleNumber={ e => handleChange(e, setNewNumber) } onSubmit={ addDetails } />

			<h2>Numbers</h2>
			
			{ searchPersons.map(person => <Person key={ person.id } name={ person.name } number={ person.telephone } />) }
			...
		</div>
	);
};

export default App;
