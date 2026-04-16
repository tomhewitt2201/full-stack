const Form = ({ onSubmit, value, onChange }) => (
    <form onSubmit={ onSubmit }>
        <input type="text" value={ value } onChange={ onChange } placeholder="Type note here" />

        <button type="submit">save</button>
    </form>
)

export default Form