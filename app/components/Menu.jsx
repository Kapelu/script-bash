'use client'
import './menu.css'
import menu from '@/app/components/menu.json'
import Link from 'next/link'

export default function Menu() {
    const item = menu[0]
	return (
		<>
			<nav className='menu' >
				{Object.keys(item).map((key) => (
					<Link href={item[key].link} key={key} passHref>
						<span className='button'><p>{item[key].name}</p></span>
					</Link>
				))}
			</nav>
		</>
	)
}
