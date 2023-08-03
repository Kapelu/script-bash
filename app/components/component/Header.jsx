import logoReact from '@/public/react.svg'
import logoNext from '@/public/next.svg'
import Image from 'next/image'
import '@/app/globals.css'
import '@/app/components/component/header.css'

export default function Header() {
	return (
		<header className='header'>
			
			<div className='logos'>
				<Image
					src={logoReact}
					className='App-logo-react'
					alt='logo'
					priority={true}
					as='image'
				/>
				<span style={{color: '#ffffff'}}>&nbsp;-&nbsp;&nbsp;&nbsp;</span>
				<Image
					src={logoNext}
					className='App-logo-next'
					alt='logo'
					priority={true}
					as='image'
				/>
			</div>
			<span style={{color: '#ffffff', padding:'.1rem'}}>Parte I</span>
			{/* <h1>Welcome !!!</h1> */}
		</header>
	)
}
