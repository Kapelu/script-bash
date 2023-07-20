'use client'
import './style.css'
import React, {useState, useEffect} from 'react'

export default function HookUseEffect() {
	const [count, setCount] = useState(0)
	const maxClicks = 5

	useEffect(() => {
		if (count === maxClicks) {
			setCount(0)
		}
	}, [count, maxClicks])

	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1)
	}

	return (
		<div className='ejercicio'>
			<h3>
				<i>&#39;UseState&#39;</i>
			</h3>
			<br />
			<p>
				Has hecho {count} clic{count !== 1 && 's'}
			</p><br />
			<button onClick={handleIncrement}>Click Me</button>
		</div>
	)
}

/* useEffect es un hook que le permite realizar efectos secundarios en un componente funcional. Los efectos secundarios son operaciones que ocurren fuera del flujo normal de la representación del componente, como obtener datos de una API, configurar suscripciones o modificar el DOM.

Toma dos argumentos: una función que realiza el efecto secundario y una matriz opcional de dependencias que especifican cuándo se debe ejecutar el efecto. La función pasada a useEffect se ejecuta después de que el componente se ha renderizado por primera vez y luego se vuelve a ejecutar cada vez que cambia alguna de las dependencias.
*/
