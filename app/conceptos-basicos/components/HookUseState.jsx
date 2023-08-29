'use client'
import React, {useState} from 'react'

export default function HookUseState(props) {
	/* console.log(useState()) */
	const [contador, setContador] = useState(0)
	const sumar = () => setContador(contador + 1)
	const restar = () => setContador(contador - 1)

	return (
		<div className='ejercicio'>
			<h3>
				<i>&#39;UseState&#39;</i>
			</h3>
			<br />
			<p><u><i>Contador de {props.titulo}</i></u></p>
			<br />
			<h3>{contador}</h3>
			<nav>
				<button onClick={sumar}>➕</button>
				<button onClick={restar}>➖</button>
			</nav>
		</div>
	)
}


/*
$ ****defaultProps pronto desaparecera****

		HookUseState.defaultProps = {
			titulo: 'Seguidores',
		}
 */