'use client'
import Link from 'next/link'
import './estilos.css'
import './estilos.scss'

import moduleStyle from './estilos.module.css'

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
					<i /* style={{background-color: '#797979'}} */>
						Agregando normalize.css 👉🏼
					</i>
					<Link
						className='link'
						href='https://github.com/Kapelu/ReactJs/blob/main/public/assets/normalize.md'
						target='_blank'
						rel='noopener noreferrer preload'
						as='https://github.com/Kapelu/ReactJs/blob/main/public/assets/normalize.md'
					>
						📝 (doc)
					</Link>
				</span>
			</article>
			<article className='bg-react' style={{backgroundColor: '#797979'}}>
				<span className='span-css'>
					<i className={moduleStyle.error} style={{color: '#fff'}}>
						Estilos con &#39;Módulos&#39; &#187; Error &#171;
					</i>
					<br />
					<i className={moduleStyle.success} style={{color: '#fff'}}>
						Estilos con &#39;Módulos&#39; &#187; Success &#171;
					</i>
				</span>
			</article>
			<article className='bg-sass'>
				<span>
					<i style={{color: '#fff'}}>
						Estilos con &#39;SASS&#39;
					</i>
					
				</span>
			</article>
		</div>
	)
}
