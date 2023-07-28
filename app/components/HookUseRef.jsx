'use client'
import './style.css'
import Link from 'next/link'
import React, {createRef, crreateRef, useRef} from 'react'

export default function HookUseRef() {
	//let refMenu = createRef()
	let refMenu = useRef()
	let refMenuBtn = useRef()

	const handleToggleMenu = (e) => {
		/* 
		$ ********************************
		$ ******   Con Vanilla JS   ******
		$ ********************************

		const $menu = document.getElementById('menu')
		if (e.target.textContent === 'Menú') {
			e.target.textContent = 'Cerrar'
			$menu.style.display = 'flex'
		} else {
			e.target.textContent = 'Menú'
			$menu.style.display = 'none'
		} 
		*/
		/* 
		$ ****************************
		$ ******   Con useRef   ******
		$ ****************************
		*/

		//const $menu = document.getElementById('menu')
		if (refMenuBtn.current.textContent === 'Menú') {
			refMenuBtn.current.textContent = 'Cerrar'
			refMenu.current.style.display = 'flex'
		} else {
			refMenuBtn.current.textContent = 'Menú'
			refMenu.current.style.display = 'none'
		}
	}
	return (
		<div className='ejercicio'>
			<h3>
				<i>&#39;UseRef&#39;</i>
			</h3>
			<br />
			<p>
				<u>
					<i>Hamburguer Menu</i>
				</u>
			</p>
			<br />
			<button
				/* id='menu-btn' */ ref={refMenuBtn}
				onClick={handleToggleMenu}
			>
				Menú
			</button>
			<nav
				id='menu'
				className='menu'
				ref={refMenu}
				style={{display: 'none'}}
			>
				<Link
					className='referencia-enlaces'
					href='#'
					target='_blank'
					rel='noopener noreferrer preload'
					as='fetch'
				>
					Sección 1
				</Link>
				<Link
					className='referencia-enlaces'
					href='#'
					target='_blank'
					rel='noopener noreferrer preload'
					as='fetch'
				>
					Sección 2
				</Link>
				<Link
					className='referencia-enlaces'
					href='#'
					target='_blank'
					rel='noopener noreferrer preload'
					as='fetch'
				>
					Sección 3
				</Link>
				<Link
					className='referencia-enlaces'
					href='#'
					target='_blank'
					rel='noopener noreferrer preload'
					as='fetch'
				>
					Sección 4
				</Link>
				<Link
					className='referencia-enlaces'
					href='#'
					target='_blank'
					rel='noopener noreferrer preload'
					as='fetch'
				>
					Sección 5
				</Link>
			</nav>
		</div>
	)
}
