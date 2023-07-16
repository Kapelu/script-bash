import React from 'react'
import logo from './logo.svg'
import './App.css'
import Componente from './components/Componente'
import Propiedades from './components/Propiedades'

export default function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<h1>Welcome to React</h1>
			</header>
			<section className='clases'>
				<article>
					<h2>Componente</h2>
					<Componente msg='"Hola, Soy un componente"' />
					<br />
				</article>
				<article>
					<h2>Propiedades</h2>
					<Propiedades
						cadena='Esto es una cadena de texto'
						numero={19}
						booleano ={true}
						arreglo ={[1,2,3]}
						objeto={{
							nombre:'Daniel Calderon',
							email:'ddaniel_calderon@hotmail.com'
						}}
						funcion = {num => num*num}
						elementoReact={<i>Elemento de React</i>}
						componenteReact={<Componente msg='Soy un componente pasado como "props"'/>}
					/>
					<br />
				</article>
				<article>
					<h2>xxxxx</h2>
					<Componente msg='"Soy un componente"' />
					<br />
				</article>
			</section>
			<footer className='footer'>
				<small>
					Sitio diseñado y desarrollado por &nbsp;
					<a
						className='link'
						href='https://github.com/Kapelu'
						target='_blank'
						rel='noopener'
					>
						@Kapelu
					</a>
				</small>
			</footer>
		</div>
	)
}
