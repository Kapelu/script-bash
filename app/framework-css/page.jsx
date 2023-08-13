'use client'
import './styles.css'
import Menu from '../components/Menu'

export default function Home() {
	return (
		<main className='App'>
			<div className='menu-fijo'>
				<Menu />
			</div>
			<section className='clases'>
				
				{/* <article className='articulos' id='framework-css'>
					<h2 className='titulo'>&nbsp;Framework CSS&nbsp;</h2>
					<Framework />
					<br />
				</article> */}


				{/* 
				<article className='articulos' id=''>
					<h2 className='titulo'>&nbsp;X&nbsp;</h2>
					<Componente />
					<br />
				</article>
				*/}
			</section>
			{/* <div style={{borderRight: '1px solid var(--first-color)'}}></div> */}
		</main>
	)
}
