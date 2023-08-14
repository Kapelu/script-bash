'use client'
import './styles.css'
import MenuFramework from '../components/MenuFramework'
import Bootstrap from './components/Bootstrap'
import MaterialUi from './components/MaterialUi'

export default function Home() {
	return (
		<main className='App'>
			<div className='menu-fijo'>
				<MenuFramework />
			</div>
			<section className='clases'>
				<article className='articulos' id='bootstrap'>
					<h2 className='titulo'>&nbsp;Bootstrap&nbsp;</h2>
					<Bootstrap />
					<br />
				</article>
				<article className='articulos' id='material-ui'>
					<h2 className='titulo'>&nbsp;Material-UI&nbsp;</h2>
					<MaterialUi />
					<br />
				</article>

				{/* 
				<article className='articulos' id=''>
					<h2 className='titulo'>&nbsp;X&nbsp;</h2>
					<Componente />
					<br />
				</article>
				*/}
			</section>
		</main>
	)
}
