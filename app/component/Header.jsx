import Image from 'next/image'
import './header.css'

export default function Header() {
	return (
		<header>
			<div>
				<Image
					className='logo-react'
					src='/logo-react.svg'
					width={100}
					height={100}
					alt='React'
					
				/>
			</div>
			<h1>Curso de ReactJS</h1>
			<div>
				<Image
					className='daniel-calderon'
					src='/assets/dcalderon.png'
					width={130}
					height={130}
					alt='Daniel Calderon'
				/>
			</div>
		</header>
	)
}
