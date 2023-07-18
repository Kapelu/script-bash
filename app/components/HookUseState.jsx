'use client'
import './style.css'
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
			<p>Contador Hook</p>
			<nav>
				<button onClick={sumar}>➕</button>
				<button onClick={restar}>➖</button>
			</nav>
			<p>Contador de {props.titulo}</p>
			<h3>{contador}</h3>
		</div>
	)
}

HookUseState.defaultProps ={
	titulo:'Clicks',
}
