import viteLogo from './assets/img/vite.svg'
import reactLogo from './assets/img/react.svg'
import './style/App.css'
import Componente from './component/Componente'
import Propiedades from './component/Propiedades'
import Estado from './component/Estado'

function App() {
	return (
		<>
			<header className='header'>
				<a href='https://es.react.dev' target='_blank' rel='noreferrer'>
					<img src={reactLogo} className='logo react' alt='React logo'/>
				</a>
				<a href='https://es.vitejs.dev' target='_blank' rel='noreferrer' >
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<h1>React + Vite</h1>
			</header>
			<button className='panel-btn hamburger hamburger--vortex' type='button'>
				<span className='hamburger-box'>
					<span className='hamburger-inner'></span>
				</span>
			</button>
			<aside className='panel'>
				<nav className='menu'>
					<a href='#seccion1'>Componentes</a>
					<a href='#seccion2'>Propiedades</a>
					<a href='#seccion3'>Estado</a>
					<a href='#seccion4'>Sección </a>
					<a href='#seccion5'>Sección xx</a>
					<a href='#seccion6'>Sección xx</a>
					<a href='#seccion7'>Sección xx</a>
					<a href='#seccion8'>Sección xx</a>
					<a href='#seccion9'>Sección xx</a>
					<a href='#seccion10'>Sección xx</a>
				</nav>
			</aside>
			<main>
				<section id='seccion1' className='section'>
					<h2>
						<u>Componentes</u>
					</h2>
					<div className='contenido'>
						<Componente msg='Hola soy un componente funcional desde una prop' />
					</div>
				</section>
				<section id='seccion2' className='section'>
					<h2>
						<u>Propiedades</u>
					</h2>
					<div className='contenido'>
						<Propiedades
							cadena='Esto es una cadena de texto'
							numero={9}
							booleano={false}
							arreglo= {[1,2,3,'Kapelu']}
							objeto = {{Nombre: 'Daniel', Apodo:'Kapelu'}}
							funcion= {num => num*num}
							elementoReact={<i>Esto es un elemento de React</i>}
							componenteReact= {<Componente msg='Soy un componente pasado como prop'/>}
						/>
					</div>
				</section>
				<section id='seccion3' className='section'>
					<h2>
						<u>Estado</u>
					</h2>
					<div className='contenido'>
						<Estado />
					</div>
				</section>
				<section id='seccion4' className='section'>
					<h2>
						<u>Sección</u>
					</h2>
					<div className='contenido'></div>
				</section>
				<section id='seccion5' className='section'>
					<h2>
						<u>Sección</u>
					</h2>
					<div className='contenido'></div>
				</section>
				<section id='seccion6' className='section'>
					<h2>
						<u>Sección</u>
					</h2>
					<div className='contenido'></div>
				</section>
				<section id='seccion7' className='section'>
					<h2>
						<u>Sección</u>
					</h2>
					<div className='contenido'></div>
				</section>
				<section id='seccion8' className='section'>
					<h2>
						<u>Sección</u>
					</h2>
					<div className='contenido'></div>
				</section>
				<section id='seccion9' className='section'>
					<h2>
						<u>Sección</u>
					</h2>
					<div className='contenido'></div>
				</section>
				<section id='seccion10' className='section'>
					<h2>
						<u>Sección</u>
					</h2>
					<div className='contenido'></div>
				</section>
			</main>
		</>
	)
}

export default App