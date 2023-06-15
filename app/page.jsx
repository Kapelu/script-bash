import Image from "next/image"

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
						simplificar las estructuras de código compleja
					</p>
					<Image className="imagen" src='/assets/codigo/home-caracteristica-jsx.png' width={100} height={100} alt="React"/>

				</article>
			</section>
		</>
	)
}
