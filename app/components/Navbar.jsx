import '@/app/globals.css'
import '@/app/components/navbar.css'
import Link from 'next/link'

export default function Navbar() {
	return (
		<>
			<div style={{borderLeft: '1px solid var(--first-color)'}}></div>
			<nav className='navbar'>
				<Link className='btn-navbar' href='/'>
					Home
				</Link>
				<Link className='btn-navbar' href='/modulo01'>
					Módulo 01
				</Link>
				<Link className='btn-navbar' href='/modulo02'>
					Módulo 02
				</Link>
				<Link className='btn-navbar' href='/modulo03'>
					Módulo 03
				</Link>
				<Link className='btn-navbar' href='/modulo04'>
					Módulo 04
				</Link>
				<Link className='btn-navbar' href='/modulo05'>
					Módulo 05
				</Link>
				{/*
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
