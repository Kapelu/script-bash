import logoReact from '@/public/react.svg'
import logoNext from '@/public/next.svg'
import Image from 'next/image'
import '@/app/globals.css'
import '@/app/components/component/header.css'

export default function Header() {
	return (
		<header className='header'>
			<h1>Bienvenidos !!!</h1>
			<div className='logos'>
				<h2>Curso de</h2>
				<Image
					src={logoReact}
					className='App-logo-react'
					alt='logo'
					priority={true}
					as='image'
				/>
				<p style={{paddingRight: '1rem'}}>&</p>
				<Image
					src={logoNext}
					className='App-logo-next'
					alt='logo'
					priority={true}
					as='image'
				/>
			</div>
			{/* <span style={{color: '#ffffff', padding: '.1rem'}}>Parte I</span> */}
		</header>
	)
}
