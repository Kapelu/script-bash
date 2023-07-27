'use client'
import './style.css'
import Link from 'next/link'

export default function Referencias() {
	const handleToggleMenu = (e) => {
		const $menu = document.getElementById('menu')
		if (e.target.textContent === 'Menú') {
			e.target.textContent = 'Cerrar'
			$menu.style.display = 'flex'
		} else {
			e.target.textContent = 'Menú'
			$menu.style.display = 'none'
		}
	}
	return (
		<div className='ejercicio'>
			<button id='menu-btn' onClick={handleToggleMenu}>
				Menú
			</button>
			<nav id='menu' className='menu' style={{display: 'none'}}> 
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
