import '@/app/globals.css'
import '@/app/components/component/navbar.css'
import Link from 'next/link'

export default function Navbar() {
	return (
		<nav className='navbar'>
			<Link href='/home'>Home</Link>
			<Link href='/modulo01'>Módulo 01</Link>
			<Link href='/modulo02'>Módulo 02</Link>
			<Link href='/modulo03'>Módulo 03</Link>
			<Link href='/modulo04'>Módulo 04</Link>
			<Link href='/modulo05'>Módulo 05</Link>
		</nav>
	)
}
