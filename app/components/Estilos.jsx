'use client'
import Link from 'next/link'
import './estilos.css'

export default function Estilos() {
	let myStyle = {
		borderRadius: '.5rem',
		backgroundColor: '#6e8060',
	}
	return (
		<div className='ejercicio estilos'>
			<article className='bg-react'>
				<span>
					<i>Estilos en hojas &#39;CSS externas&#39;</i>
				</span>
			</article>
			<article
				className='bg-react'
				style={{borderRadius: '1.5rem', backgroundColor: '#6e5980'}}
			>
				<span>
					<i style={{color: '#fff'}}>
						Estilos en línea &#39;style=&#123;&#125;&#39;
					</i>
				</span>
			</article>
			<article className='bg-react' style={myStyle}>
				<span>
					<i style={{color: '#fff'}}>
						Estilos en línea con variables
						&#39;style=&#123;&#125;&#39;
					</i>
				</span>
			</article>
			<article className='bg-react'>
				<span>
					<i /* style={{color: '#fff'}} */>
						Agregando normalize.css 👉🏼
					</i>
					<Link
						className='link'
						href='https://github.com/Kapelu/ReactJs'
						target='_blank'
						rel='noopener noreferrer preload'
						as='https://github.com/Kapelu/ReactJs'
					>
						📝 (doc)
					</Link>
				</span>
			</article>
		</div>
	)
}
