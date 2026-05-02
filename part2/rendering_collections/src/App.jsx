import { useState, useEffect } from 'react'
import axios from 'axios'

import Note from './components/Note'
import Form from './components/Form'
import Button from './components/Button'

const App = () => {
	const [notes, setNotes] = useState([])
	const [newNote, setNewNote] = useState('')
	const [showAll, setShowAll] = useState(true)

	const hook = () => {
		console.log('effect')

		axios.get('http://localhost:3001/notes')
			.then(res => {
				console.log('promise fulfilled')

				setNotes(res.data)
			})
	}

	useEffect(hook, [])

	console.log(`render ${ notes.length } notes`)
	
	const addNote = e => {
		e.preventDefault()

		const noteObject = {
			content: newNote,
			important: Math.random() < 0.5,
			id: String(notes.length + 1)
		}

		// remember - concat is a method that combines arrays into a new array
		setNotes(notes.concat(noteObject))
		setNewNote('')
	}

	const handleNoteChange = e => {
		setNewNote(e.target.value)
	}

	const notesToShow = showAll ? notes : notes.filter(note => note.important)

 	return (
		<div>
			<h1>Notes</h1>
			
			<Button onClick={ () => setShowAll(!showAll) } content={ `show ${ showAll ? 'important' : 'all' }` } />

			<ul>
				{ notesToShow.map((note) => <Note key={ note.id } note={ note.content } />) }
			</ul>

			<Form onSubmit={ addNote } value={ newNote } onChange={ handleNoteChange } />
		</div>
	)
}

export default App