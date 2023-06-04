import './app-filter.css'

const AppFilter = (props) => {
	const buttonsData = [
		{name: 'all', label: 'All Employees',colored: false},
		{name: 'rise', label: 'For promoting',colored: false},
		{name: 'moreThan1000', label: 'More than 1000$',colored: false}
	]

	const buttons = buttonsData.map(({name, label, colored}) => {
		const active = props.filter === name
		const clazz = active ? 'btn-light' : 'btn-outline-light'
		const style = colored ? {color: 'red'} : null
		return (
			<button 
			className={`btn ${clazz}`}
			key={name}
			type='button'
			onClick={() => props.onFilterSelect(name)}
			style={style}>
			{label}
			</button>
		)
	})

	return (
		<div className="btn-group">
			{buttons}
			
		</div>
	)
}

export default AppFilter