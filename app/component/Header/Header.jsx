'use client'
import React, {useState, useEffect} from 'react'
import menu from './headerMenu.json'
import '@/app/component/Header/header.css'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/react.svg'

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const item = menu[0]

	useEffect(() => {
		const changeMenu = (event) => {
			if (!event.target.matches('.menu-item')) return false
			const $btnMenu = document.querySelector('.menu-btn')
			$btnMenu.firstElementChild.classList.remove('none')
			$btnMenu.lastElementChild.classList.add('none')
			setIsMenuOpen(false)
		}
		document.addEventListener('click', changeMenu)
	}, [])

	return (
		<header className='header'>
			<section className='container'>
				{/* */}
				<button
					className={`menu-btn`}
					onClick={() => {
						const $btnMenu = document.querySelector('.menu-btn')

						setIsMenuOpen(!isMenuOpen)

						$btnMenu.firstElementChild.classList.toggle('none')
						$btnMenu.lastElementChild.classList.toggle('none')
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<path d='M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z' />
					</svg>

					<svg
						className='none'
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
					>
						<path d='M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z' />
					</svg>
				</button>
				<nav className={`menu ${isMenuOpen ? 'is-active' : ''}`}>
					{Object.keys(item).map((key) => (
						<Link
							href={item[key].link}
							key={key}
							passHref
						>
							<span className='menu-item'>{item[key].name}</span>
						</Link>
					))}
				</nav>
				<div className='logo'>
					<Link
						className='link'
						href='https://react.dev/'
						target='_blank'
						rel='noopener noreferrer preload'
						as='https://react.dev/'
					>
						<Image
							src={Logo}
							className='logo-react'
							alt='Logo React'
							width='48'
							priority={true}
							as='image'
					/> 
					</Link>
				</div> 
			</section>
		</header>
	)
}
