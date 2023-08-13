import '@/app/globals.css'
import '@/app/components/navbar.css'
import Link from 'next/link'

export default function Navbar() {
	return (
		<>
			<div style={{borderLeft: '1px solid var(--first-color)'}}></div>
			<nav className='navbar'>
				<Link className='btn-navbar' href='/'>
				{/* <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z"/></svg> */}
					Home
				</Link>
				<Link className='btn-navbar' href='/conceptos-basicos'>
					Conceptos Básicos
				</Link>
				<Link className='btn-navbar' href='https://react-js-framework-css.vercel.app/'>
					Frameworks CSS
				</Link>
				{/*
				<Link className='btn-navbar' href='/modulo03'>
					Módulo 03
				</Link>
				<Link className='btn-navbar' href='/modulo04'>
					Módulo 04
				</Link>
				<Link className='btn-navbar' href='/modulo05'>
					Módulo 05
				</Link>
				<Link className='btn-navbar' href='/modulo06'>
					Módulo 06
				</Link>
				<Link className='btn-navbar' href='/modulo07'>
					Módulo 07
				</Link>
				<Link className='btn-navbar' href='/modulo08'>
					Módulo 08
				</Link>
				<Link className='btn-navbar' href='/modulo09'>
					Módulo 09
				</Link>
				<Link className='btn-navbar' href='/modulo10'>
					Módulo 10
				</Link>
				<Link className='btn-navbar' href='/modulo11'>
					Módulo 11
				</Link>
				<Link className='btn-navbar' href='/modulo12'>
					Módulo 12
				</Link>
				<Link className='btn-navbar' href='/modulo10'>
					Módulo 13
				</Link>
				<Link className='btn-navbar' href='/modulo11'>
					Módulo 14
				</Link>
				<Link className='btn-navbar' href='/modulo12'>
					Módulo 15
				</Link>
				<Link className='btn-navbar' href='/modulo10'>
					Módulo 16
				</Link>
				<Link className='btn-navbar' href='/modulo11'>
					Módulo 17
				</Link>
				<Link className='btn-navbar' href='/modulo12'>
					Módulo 18
				</Link>
				<Link className='btn-navbar' href='/modulo10'>
					Módulo 19
				</Link>
				<Link className='btn-navbar' href='/modulo11'>
					Módulo 20
				</Link>
				 */}
			</nav>
			<div style={{borderRight: '1px solid var(--first-color)'}}></div>
		</>
	)
}
