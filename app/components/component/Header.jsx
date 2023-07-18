/* import React from 'react'; */
import Image from 'next/image'
import logoReact from '@/public/react.svg'
import logoNext from '@/public/next.svg'
import '@/app/globals.css'
import '@/app/components/component/header.css'

export default function Header() {
	return (
		<header className='App-header'>
			<div className='logos'>
				<Image
					src={logoReact}
					className='App-logo-react'
					alt='logo'
					priority={true}
				/>
				<span>&nbsp;With&nbsp;&nbsp;&nbsp;</span>
				<Image
					src={logoNext}
					className='App-logo-next'
					alt='logo'
					priority={true}
				/>
			</div>

			<h1>Welcome to React</h1>
		</header>
	)
}
