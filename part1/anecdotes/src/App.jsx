import { useState } from 'react'

const Button = ({ onClick, content }) => <button onClick={ onClick }>{ content }</button>
const Votes = ({ votes }) => <p>has { votes } votes </p>

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]
    
    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(anecdotes.map(item => [item, 0]))

    const mostVoted = Math.max(...votes.map(item => item[1]))
    const topVote = votes.find(item => item[1] === mostVoted)
    
    const handleGenerate = () => {
        let newSelection

        do {
            newSelection = Math.floor(Math.random() * anecdotes.length)
        } while (newSelection === selected)

        setSelected(newSelection)
    }  
    
    const handleVote = () => {
        const updatedVotes = votes.map(item => {
            if (item[0] === anecdotes[selected]) {
                return [item[0], item[1] + 1]
            }

            return item
        }) 

        setVotes(updatedVotes)
    }   

    return (
        <>
            <div className="anecdote-of-the-day">
                <h1>Anecdote of the day</h1>
                
                <p>{ anecdotes[selected] }</p>
                <Votes votes={ votes[selected][1] } />

                <Button onClick={ handleVote } content="Vote" />
                <Button onClick={ handleGenerate } content="Next anecdote" />
            </div>

            <div className="anecdote-most-votes">
                <h2>Anecdote with most votes</h2>
                
                <p>{ mostVoted === 0 ? 'No votes yet' : topVote[0] }</p>
                { mostVoted !== 0 ? <Votes votes={ mostVoted } /> : '' }
            </div>
        </>
    )
}

export default App