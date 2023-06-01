import viteLogo from './assets/img/vite.svg'
import reactLogo from './assets/img/react.svg'
import './style/App.css'
import Componente from './component/Componente'
import Propiedades from './component/Propiedades'


function App() {
	return (
		<>
		{/* <header className="header">
			<div>
				
			</div>
			
		</header> */}
		<header class="header"><a href='https://es.react.dev' target='_blank' rel='noreferrer' >
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
				<a href='https://es.vitejs.dev' target='_blank' rel='noreferrer' >
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
			<h1>React + Vite</h1>
		</header>
		<button class="panel-btn hamburger hamburger--vortex" type="button">
			<span class="hamburger-box">
				<span class="hamburger-inner"></span>
			</span>
		</button>
		<aside class="panel">
			<nav class="menu">
				<a href="#seccion1">Componentes</a>
				<a href="#seccion2">Propiedades</a>
				<a href="#seccion3">Sección 3</a>
				<a href="#seccion4">Sección 4</a>
				<a href="#seccion5">Sección 5</a>
			</nav>
		</aside>
		<main>
			<section id= 'seccion1'className="section">
				<h2><u>Componentes</u></h2>
				<div className="contenido">
					<Componente msg='Hola soy un componente funcional desde una prop'/>
				</div>
			</section>
			<section id= 'seccion2'className="section">
				<h2><u>Propiedades</u></h2>
				<div className="contenido">
					<Propiedades cadena= 'Esto es una cadena de texto' numero={9} booleano= {false}/>
				</div>
			</section>
			<section id= 'seccion3'className="section">
				<h2><u>Sección</u></h2>
				<div className="contenido">
					
				</div>
			</section>
			<section id= 'seccion4'className="section">
				<h2><u>Sección</u></h2>
				<div className="contenido">
					
				</div>
			</section>
			<section id= 'seccion5'className="section">
				<h2><u>Sección</u></h2>
				<div className="contenido">
					
				</div>
			</section>
		</main>
		</>
	)
}

export default App