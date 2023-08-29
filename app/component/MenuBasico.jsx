'use client'
import './menu.css'
import menu from '@/app/component/menu-basico.json'
import Link from 'next/link'

export default function Menu() {
    const item = menu[0]
	return (
		<>
			<nav className='menu' >
				{Object.keys(item).map((key) => (
					<Link href={item[key].link} key={key} passHref>
						<span className='btn-menu' >{item[key].name}</span>
					</Link>
				))}
			</nav>
		</>
	)
}
