'use client'
import './style.css'
import React, {useState, useEffect} from 'react'

export default function HookUseEffect() {
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		console.log('%cFase de Montaje', 'color:green;font-weight:bold')
		console.log('%cComponentDidMount()', 'color:red;font-size:.8rem')

		const detectarScroll = ()=>{ setScrollY(window.pageYOffset)}

	})
	return (
		<div className='ejercicio'>
			<h3>
				<i>&#39;UseEffect&#39;</i> y ciclo de vida
			</h3>
			<br />
			<p>Scroll y del navegador {scrollY}px</p>
		</div>
	)
}
/* 
HookUseState.defaultProps = {
	titulo: 'Seguidores',
}
*/
