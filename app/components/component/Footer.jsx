/* import React from 'react'; */
import Link from 'next/link'
import Image from 'next/image'
import logoGithub from '@/public/github.svg'
import '@/app/globals.css'
import '@/app/components/component/footer.css'

export default function Footer() {
	return (
		<footer className='footer'>
			<small>
				Sitio diseñado y desarrollado por &nbsp;
				<Link
					className='link'
					href='https://github.com/Kapelu'
					target='_blank'
					rel='noopener noreferrer'
				>
					@Kapelu
				</Link>
			</small>
			<br />
			<small className='repositorio' >
				Repositorio en  &nbsp;
				<Link
					className='link'
					href='https://github.com/Kapelu/ReactJs'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
					src={logoGithub}
					className='App-logo-github'
					alt='logo'
					priority={true}
				/>
					
				</Link>
			</small>
		</footer>
	)
}
