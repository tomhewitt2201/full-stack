import Input from './Input'

const Form = ({ handleName, handleNumber, name, number, onSubmit }) => (
    <form onSubmit={ onSubmit }>

            <Input text="name" value={ name } onChange={ handleName } />
            <Input text="number" value={ number } onChange={ handleNumber } />

            <div>
                <button type="submit">add</button>
            </div>
    </form>
)

export default Form