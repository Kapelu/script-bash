import '@/app/globals.css'
import '@/app/components/component/navbar.css'
import Link from 'next/link'

export default function Navbar() {
	return (
		<nav className='navbar'>
			<Link className='btn-menu' href='/home'>
				Home
			</Link>
			<Link className='btn-menu' href='/modulo01'>
				Módulo 01
			</Link>
			<Link className='btn-menu' href='/modulo02'>
				Módulo 02
			</Link>
			<Link className='btn-menu' href='/modulo03'>
				Módulo 03
			</Link>
			<Link className='btn-menu' href='/modulo04'>
				Módulo 04
			</Link>
			<Link className='btn-menu' href='/modulo05'>
				Módulo 05
			</Link>{/* 
			<Link className='btn-menu' href='/modulo06'>
				Módulo 06
			</Link>
			<Link className='btn-menu' href='/modulo07'>
				Módulo 07
			</Link>
			<Link className='btn-menu' href='/modulo08'>
				Módulo 08
			</Link>
			<Link className='btn-menu' href='/modulo09'>
				Módulo 09
			</Link>
			<Link className='btn-menu' href='/modulo10'>
				Módulo 10
			</Link>
			<Link className='btn-menu' href='/modulo11'>
				Módulo 11
			</Link>
			<Link className='btn-menu' href='/modulo12'>
				Módulo 12
			</Link> */}
		</nav>
	)
}
