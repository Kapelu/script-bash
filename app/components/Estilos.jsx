'use client'
import './style.css'
import './estilos.css'

export default function Estilos() {
	return (
		<div className='ejercicio estilos'>
			<article className='bg-react'>
				<span>
					<i>Estilos en hojas &#39;CSS externas&#39;</i>
				</span>
			</article>
			<article className='bg-react' style={{borderRadius:'.5rem', backgroundColor:'#b8b8b8'}}>
				<span >
					<i>Estilos en línea &#39;style=&#123;&#125;&#39;</i>
				</span>
			</article>
			<br />
			<br />
		</div>
	)
}
