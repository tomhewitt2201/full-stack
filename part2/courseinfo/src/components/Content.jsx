import Part from './Part'

const Content = props => {
	return (
		<div>
			{ props.parts.map(part => {
				const { name, exercises, id } = part

				return (
					<Part key={ id } part={ name } exercise={ exercises } />
				)
			}) }
		</div>
	)
}

export default Content