import { useState } from 'react';

import Form from './components/Form'
import Person from './components/Person'

const App = () => {
	const [persons, setPersons] = useState([{ name: 'Arto Hellas', telephone: '12345 67890', id: 1 }]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');

	const handleChange = (e, method) => method(e.target.value)

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

			<Form name={ newName } number={ newNumber } handleName={ e => handleChange(e, setNewName) } handleNumber={ e => handleChange(e, setNewNumber) } onSubmit={ addDetails } />

			<h2>Numbers</h2>
			
			{ persons.map(person => <Person key={ person.id } name={ person.name } number={ person.telephone } />) }
			...
		</div>
	);
};

export default App;
