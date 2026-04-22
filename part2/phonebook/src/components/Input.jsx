const Input = ({ value, onChange, text }) => (
    <div>
        { text }: <input value={ value } onChange={ onChange } />
    </div>
)

export default Input