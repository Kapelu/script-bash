import './style.css'

export default function Componente(props) {
	return (
		<div className='ejercicio'>
			<div className="card">{props.msg}</div>
        </div>
	)
}
