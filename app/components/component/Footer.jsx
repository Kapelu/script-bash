/* import React from 'react'; */
import Link from 'next/link'
import logo from '@/public/react.svg'
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
		</footer>
	)
}
