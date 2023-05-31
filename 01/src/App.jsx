import viteLogo from './assets/img/vite.svg'
import reactLogo from './assets/img/react.svg'
import './style/App.css'
import Componente from './component/Componente'


function App() {
	return (
		<>
			<header className='header'>
				<div>
					<a href='https://es.react.dev' target='_blank' rel='noreferrer' >
						<img src={reactLogo} className='logo react' alt='React logo' />
					</a>
					<a href='https://es.vitejs.dev' target='_blank' rel='noreferrer' >
						<img src={viteLogo} className='logo' alt='Vite logo' />
					</a>
				</div>
				<h1>React + Vite</h1>
			</header>
			<hr /><br />
			<section>
				<Componente msg='Hola soy un componente funcional desde una prop'/>
			</section>
		</>
	)
}

export default App
