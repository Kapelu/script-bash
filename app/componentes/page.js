import Image from "next/image"

export default function Componentes() {
	return (
		<>
			<section className='seccion'>
				<article className='contenedor'>
					<h1 className='titulo'>Componentes en ReactJS</h1>
					<p className='descripcion'>
						React es una librería JavaScript que nos permite crear
						interfaces de usuario en el proceso de desarrollar
						aplicaciones de una sola página. Estas aplicaciones
						también son conocidas como SPA (single page
						application). Para construir una aplicación completa en
						React, recomendamos un framework full-stack de React
						como Next.js
						<br />
						Dentro de React, existen dos tipos de objetos
						principales: los elementos y los componentes.
						<br />
						En comparación a los elementos, los componentes en React
						tienen una lógica más diferente y compleja. Por ello,
						para enseñarte qué son los componentes en React,
						utilizaremos un ejemplo más práctico. Supongamos que
						tenemos el siguiente elemento, que, aunque hemos creado
						con una línea de código JSX, podríamos haber creado
						tranquilamente con el comando react.create element:
						<br />
						<div className='container-code'>
						<Image className="image" src='/assets/codigo/code1.png' width={600} height={280} alt="React"/>
						</div>
						<br />
					</p>
					<p className='descripcion'>
						La constante rootElement cumple el único propósito de
						guargar el ID ‘root’ del elemento. Por su parte, las
						constantes helloWorld y goodbyeWorld guardan spans con
						un mensaje similar a su nombre.
						<br />
						Entonces, supongamos que queremos crear más spans con
						mensajes específicos. Hacer el mismo proceso de crear
						una constante en la que guardamos un span con un texto
						puede volverse tedioso. Por ello, podríamos crear una
						función en la que pasamos un texto y el programa nos
						devuelve el texto contenido dentro de un span.
						<br />
						A continuación, te mostramos cómo utilizamos los
						componentes en React para crear esta función:
						<br />
						<div className='container-code'>
						<Image className="image" src='/assets/codigo/code2.png' width={600} height={280} alt="React"/>
						</div>
						<br />
					</p>
					<p className='descripcion'>
						En las líneas de código anteriores, hemos creado una
						nueva constante Message. Esta constante es realmente un
						componente de tipo función que coge el objeto props de
						un elemento y hace que su propiedad msg se encierre
						dentro de un span. Luego, hemos definido un elemento
						element, en el que hemos insertado los componentes
						Message, cada uno con un msg igualado a mensajes
						distintos. Estos serán los pasados por la función
						Message.
						<br />
						No olvides que, para que un componente sea renderizado
						por ReactDOM, debes asegurarte de que su nombre está
						escrito con la primera letra en mayúsculas. De esta
						manera, cuando React.createElement quiere crear un
						elemento para pasárselo a ReactDOM, puede distinguir
						entre un elemento nativo o puro del DOM, como lo sería
						un div, y un elemento que nosotros hemos creado.
					</p>
					<h2 className='titulo'>
						¿Qué son los componentes en React?
					</h2>
					<p className='descripcion'>
						Como has podido ver en el ejemplo anterior, los
						componentes en React son funciones que reciben el objeto
						de propiedades props como parámetro y devuelven
						elementos React. Entonces, podemos utilizar las
						propiedades que conforman el objeto props para ejecutar
						acciones automáticas. En el ejemplo anterior, las usamos
						para acceder a un texto msg y transformarlo en un span
						con dicho texto.
						<br />
						Exiaten dos tipos de componentes de React:
					</p>
					<h2 className='subtitulo-center'>
						👉 los componentes de tipo función
					</h2>
					<br />
					<div className='container-code'>
					<Image className="image" src='/assets/codigo/code3.png' width={600} height={50} alt="React"/>
					</div>
					<br />
					<h2 className='subtitulo-center'>
						👉 los componentes de tipo clase
					</h2>
					<br />
					<div className='container-code'>
					<Image className="image" src='/assets/codigo/code4.png' width={600} height={150} alt="React"/>
					</div>
					<br />
					<p className='descripcion'>
						Como puedes ver en las anteriores líneas de código, para
						acceder a una propiedad del objeto props en un
						componente tipo clase deberás utilizar el comando this.
						Este comando tiene el mismo sentido que en JavaScript,
						por lo que te recomendamos leer nuestro post sobre qué
						es this en JavaScript para conocer más sobre él. Además,
						todo componente tipo clase debe tener una función de
						tipo render, que básicamente nos define qué se va a
						renderizar en pantalla. Dentro de esta función es donde
						insertamos nuestro return. En la práctica, utilizaremos
						mucho más a menudo el formato de componentes en React
						tipo función. Con este método, no solo nos ahorramos
						líneas de código, sino que también evitamos lidiar con
						this, un comando que no siempre es tan específico como
						queremos.
						<br />
					</p>
				</article>
			</section>
		</>
	)
}
