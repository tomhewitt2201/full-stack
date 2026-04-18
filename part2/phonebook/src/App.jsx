import { useState } from 'react';

import Form from './components/Form'
import Person from './components/Person'

const App = () => {
	const [persons, setPersons] = useState([{ name: 'Arto Hellas', id: 1 }]);
	const [newName, setNewName] = useState('');

	const handleChange = e => {
		setNewName(e.target.value)
	}

	const addName = e => {
		e.preventDefault()

		const check = persons.filter(person => person.name === newName)

		if (!newName) {
			return alert(`Name can't be blank`)
		}
		
		if (!check.length) {
			setPersons(prev => prev.concat({ name: newName, id: persons.length + 1 }))
		} else {
			alert(`${ newName } is already added to phonebook`)
		}

		return setNewName('')
	}

	return (
		<div>
			<h2>Phonebook</h2>

			<Form value={ newName } onChange={ handleChange } onSubmit={ addName } />

			<h2>Numbers</h2>
			
			{ persons.map(person => <Person key={ person.id } name={ person.name } />) }
			...
		</div>
	);
};

export default App;
