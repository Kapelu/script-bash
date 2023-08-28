import '@/app/component/Footer/footer.css'
import logoGithub from '@/public/github.svg'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
	return (
		<footer className='footer'>
			<small>
				Sitio diseñado y desarrollado por &nbsp;
				<Link
					className='link'
					href='https://danielcalderon.vercel.app/'
					target='_blank'
					rel='noopener noreferrer preload'
					as='https://danielcalderon.vercel.app/'
				>
					@Kapelu
				</Link>
			</small>
			<br />
			<small className='repositorio'>
				Repositorio en &nbsp;
				<Link
					className='link'
					href='https://github.com/Kapelu/ReactJs'
					target='_blank'
					rel='noopener noreferrer preload'
					as='https://github.com/Kapelu/ReactJs'
				>
					<Image
						src={logoGithub}
						className='App-logo-github'
						alt='logo'
						priority={true}
						as='image'
					/>
				</Link>
			</small>
		</footer>
	)
}
