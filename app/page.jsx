import Image from 'next/image'

export default function Home() {
	return (
		<>
			<section className='seccion'>
				<article className='contenedor'>
					<h2 className='titulo'>¿Qué es React y para qué sirve?</h2>
					<p className='descripcion'>
						React JS es una librería de código abierto que se
						utiliza principalmente para construir interfaces; es
						decir, es una tecnología enfocada en la interactividad.
						Está orientada al front-end (parte del software que el
						usuario utiliza) y su adopción ha ido aumentado en los
						últimos años.
						<br />
						React JS se presenta como una excelente alternativa para
						hacer todo tipo de aplicaciones web, SPA (Single Page
						Application) y hasta aplicaciones para dispositivos
						móviles. Se destaca por contar con un completo
						ecosistema de módulos, herramientas y componentes que
						posibilitan desarrollar funcionalidades complejas en
						poco tiempo. En ese sentido, React ofrece un entorno de
						trabajo robusto para programar usando el lenguaje
						JavaScript. Además, brinda ciertas facilidades para
						generar interfaces de usuario dinámicas.
						<br />
						Te permite agrupar componentes, pero no prescribe cómo
						hacer el enrutamiento y la obtención de datos. Para
						construir una aplicación completa en React, recomendamos
						un framework full-stack de React como Next.js
					</p>
					<br />
					<h2 className='titulo'>Características de React</h2>
					<p className='descripcion'>
						En las siguientes secciones presentaremos estas
						características y te explicaremos cómo contribuyen al
						desarrollo de aplicaciones móviles y web.
					</p>
					<h2 className='subtitulo'>👉 JSX</h2>
					<p className='descripcion'>
						JSX es una extensión de la sintaxis de JavaScript
						utilizada en la creación de elementos de React. Los
						desarrolladores la emplean para incrustar código HTML en
						objetos JavaScript. Ya que JSX acepta expresiones
						válidas de JavaScript e incrustación de funciones, puede
						simplificar las estructuras de código compleja.
						<br />
						Veamos un bloque de código que muestra cómo incrustar
						una expresión en JSX: const name = 'John Smith;
						{/* 
						const element = h1>Hola, {nombre}/h1>
                        ReactDOM.render(element,document.getElementById('root'))
						*/}
					</p>

					<p className='descripcion'>
						En la segunda línea, llamamos a la variable nombre
						dentro de un elemento React poniéndola dentro de las
						llaves.
						<br />
						Mientras tanto, la función ReactDOM.render() renderiza
						el elemento React en el árbol del Modelo de Objetos del
						Documento (DOM), describiendo la UI.
						<br />
						JSX también ayuda a combatir los ataques Cross-Site
						Scripting (XSS). Por defecto, React DOM convierte los
						valores incrustados en JSX en cadenas antes de
						renderizarlos. Por consiguiente, terceros no pueden
						inyectar código extra a través de la entrada del usuario
						a menos que esté explícitamente escrito en la
						aplicación.
						<br />
						Más adelante en el artículo, discutiremos detalladamente
						el papel de JSX en la creación de componentes React.
					</p>
					<h2 className='subtitulo'>👉 Virtual DOM</h2>
					<p className='descripcion'>
						El Modelo de Objetos del Documento (DOM) presenta una
						página web en una estructura de árbol de datos. ReactJS
						almacena árboles DOM virtuales en la memoria. Al
						hacerlo, React puede aplicar actualizaciones a partes
						específicas del árbol de datos, lo que es más rápido que
						volver a renderizar la totalidad del árbol DOM.
						<br />
						Cada vez que haya un cambio en los datos, ReactJS
						generará un nuevo árbol de DOM virtual y lo comparará
						con el anterior para encontrar la forma más rápida de
						implementar los cambios en el DOM real. Este proceso se
						conoce como diffing.
						<br />
						Al asegurarse de que la manipulación de la interfaz de
						usuario sólo afecta a secciones específicas del árbol
						real del DOM, renderizar la versión actualizada tarda
						menos tiempo y utiliza menos recursos. Esta práctica
						beneficia enormemente a los proyectos grandes con una
						interacción intensa con el usuario.
						<br />
					</p>
					<h2 className='subtitulo'>👉 Virtual DOM</h2>
					<p className='descripcion'>
						El Modelo de Objetos del Documento (DOM) presenta una
						página web en una estructura de árbol de datos. ReactJS
						almacena árboles DOM virtuales en la memoria. Al
						hacerlo, React puede aplicar actualizaciones a partes
						específicas del árbol de datos, lo que es más rápido que
						volver a renderizar la totalidad del árbol DOM.
						<br />
						Cada vez que haya un cambio en los datos, ReactJS
						generará un nuevo árbol de DOM virtual y lo comparará
						con el anterior para encontrar la forma más rápida de
						implementar los cambios en el DOM real. Este proceso se
						conoce como diffing.
						<br />
						Al asegurarse de que la manipulación de la interfaz de
						usuario sólo afecta a secciones específicas del árbol
						real del DOM, renderizar la versión actualizada tarda
						menos tiempo y utiliza menos recursos. Esta práctica
						beneficia enormemente a los proyectos grandes con una
						interacción intensa con el usuario.
					</p>
					<h2 className='subtitulo'>👉 Componentes y Props</h2>
					<p className='descripcion'>
						ReactJS divide la interfaz de usuario en piezas aisladas
						y reutilizables de código conocidas como componentes.
						Los componentes de React funcionan de forma similar a
						las funciones de JavaScript, ya que aceptan entradas
						arbitrarias denominadas propiedades o props. Los
						elementos React devueltos determinan el aspecto de la
						interfaz de usuario en el lado del cliente. Este es un
						ejemplo de un componente de función que devuelve un
						elemento React:
						{/* 
						function Welcome(props) {
							return h1> Hola, {props.name}/h1>;
						}
						*/}
						Es posible tener tantos componentes como sea necesario,
						sin saturar tu código.
					</p>
					<h2 className='subtitulo'>👉 Gestión de Estado</h2>
					<p className='descripcion'>
						El Modelo de Objetos del Documento (DOM) presenta una
						página web en una estructura de árbol de datos. ReactJS
						almacena árboles DOM virtuales en la memoria. Al
						hacerlo, React puede aplicar actualizaciones a partes
						específicas del árbol de datos, lo que es más rápido que
						volver a renderizar la totalidad del árbol DOM.
						<br />
						Cada vez que haya un cambio en los datos, ReactJS
						generará un nuevo árbol de DOM virtual y lo comparará
						con el anterior para encontrar la forma más rápida de
						implementar los cambios en el DOM real. Este proceso se
						conoce como diffing.
						<br />
						Al asegurarse de que la manipulación de la interfaz de
						usuario sólo afecta a secciones específicas del árbol
						real del DOM, renderizar la versión actualizada tarda
						menos tiempo y utiliza menos recursos. Esta práctica
						beneficia enormemente a los proyectos grandes con una
						interacción intensa con el usuario.
						<br />
					</p>
				</article>
			</section>
		</>
	)
}
