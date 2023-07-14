import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import Componente from './components/Componente'

class App extends Component {
	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<h1>Welcome to React</h1>
				</header>
				<section>
					<h2>Componente</h2>
					<Componente msg='Hola, Soy un componente' />
					<br />
					<br />
				</section>
				<hr />
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
}

export default App
