'use client'
import './style.css'

export default function Inicio() {
	
	return (
		<>
			<article className='home container section-inicio'>
				<h2 className='titulo'>Fundamentos de React</h2>

				<br />
				<p className='texto'>
					En este tutorial aplico los diferentes conceptos base que
					fundamentan el cómo de ciertas prácticas en React. El uso de
					API, de JSX, que es un componente, eventos y estado de un
					componente, como manejar estilos.
				</p>
				<br />
				<p className='texto'>
					El tutorial está orientado a quienes quieren comenzar a
					trabajar con React o incluso para quienes llevan un tiempo
					trabajando ya que profundizaremos en algunos de los
					conceptos y modelos mentales base para entendeer cómo y por
					qué de algunas técnicas o métodos de uso de React.
				</p>
				<br />
				<h2>¿Que es React?</h2>
				<br />
				<p className='texto'>
					React es una biblioteca JavaScript altamente eficiente y
					declarativa que se utiliza para crear interfaces de usuario
					interactivas. React te insita a crear código declarativo
					(indicas el qué, no el cómo) y orientado a componentes. Un
					componente es un pieza de código que puede representar una
					parte de la interfaz de usuario o una funcionalidad en
					particular que se puede encapsular y reutilizar en
					diferentes partes de un desarrollo o incluso en diferentes
					aplicaciones. Cada componente reaccionará a cambios internos
					(en su estado) o externos (nuevas propiedades recibidas) y
					se volvera a redibujar (renderizado) en la interfaz. Para
					ello React utiliza su Virtual DOM que es una copia del DOM
					original del navegador para sólo hacer los cambios
					necesarios en los nodos que hayan reaccionado y evitar
					redibujar todo el árbol del DOM.
				</p>
				<br />
				<h2>¿Que es NextJS?</h2>
				<br />
				<p className='texto'>
					Next.js es un framework de React que ofrece una variedad de
					características y beneficios que lo hacen ideal para
					construir aplicaciones web modernas y escalables. Con su
					renderizado del lado del servidor (SSR), enrutamiento
					automático, pre-renderizado estático y fácil configuración,
					Next.js es una excelente opción para desarrolladores que
					buscan crear aplicaciones web rápidas y eficientes. Además,
					su compatibilidad con React, soporte para CSS-in-JS e
					integración con APIs hacen que sea una herramienta poderosa
					y fácil de usar para construir aplicaciones web dinámicas y
					completas. En general, si estás buscando un framework de
					React que te permita construir aplicaciones web de manera
					rápida y eficiente, entonces Next.js es una excelente opción
					a considerar.
				</p>
				<br />
				<h2>
					Conocimientos previos antes de aprender React.js
				</h2>
				<ul className='lista'>
					<li>
						<i>var, let & const :</i> var es cosa del pasado, si
						bien utilizarlo no tiene nada de malo, tiene sus
						inconvenientes y es por eso que han sido desplazadas por
						let y const.
					</li>
					<li>
						<i>Scope de JS :</i> El scope de una variable hace
						referencia al lugar donde esta va a vivir , o podrá ser
						accesible.
					</li>
					<li>
						<i>Template Strings :</i> Son plantillas que nos permiten
						incrustar uso de expresiones (prácticamente concatenar
						para obtener un string)
					</li>
					<li>
						<i>Funciones - function declaration :</i> Estas funciones
						tienen la característica de que pueden ser llamadas sin
						importar el orden que tengan dentro del código.
					</li>
					<li>
						<i>Funciones - function expression :</i> Para este caso,
						la sintaxis es distinta. Ya que se guarda la función
						dentro de una variable. ¿Cual es la diferencia? Que no
						podemos invocar a la variable (que contiene a la
						función) antes de que esta sea declarada
					</li>
					<li>
						<i>Funciones flecha - Arrow functions :</i> Estas
						funciones cumplen la misma función que las de JS, sus
						ventajas: una sintaxis más corta y mas fácil de
						leer/comprender.
					</li>
					<li>
						<i>Operador condicional (ternario) :</i> El operador
						condicional (ternario) es el único operador en
						JavaScript que tiene tres operandos. Este operador se
						usa con frecuencia como atajo para la instrucción if.
					</li>
					<li>
						<i>Object literal :</i> Un objeto es una colección de
						datos relacionados y/o funcionalidad En javascript
						podemos asociar una variable con distintos atributos.
					</li>
					<li>
						<i>Parámetros predeterminados (default values) :</i> En
						JavaScript puedes proporcionar valores por defecto a los
						parámetros de una función en caso que no se le pase
						ningún argumento.
					</li>
					<li>
						<i>Object constructor :</i> Al igual que object literal,
						permite crear objetos con distintas propiedades, la
						diferencia es que este objeto es dinámico, es decir,
						crear varios objetos que tengan los mismos atributos
						pero distintos valores.
					</li>
					<li>
						<i>Spread Operator :</i> Esta expresión permite hacer una
						copia de una variable. Pero, la copia no se hace por
						referencia. Por lo que son datos totalmente
						independientes entre sí, asegurando una consistencia de
						datos en el código.
					</li>
					<li>
						<i>Métodos de Array :</i> Saber manipular arreglos en
						JavaScript es básico para considerar que se domina. Cada
						método realiza una operación en concreto y devuelve
						diferentes tipos de datos.
					</li>
					<li>
						<i>Síncrono vs Asíncrono :</i> Javascript = Asincrono
						Antes de seguir, vienen cosas que dependen saber lo
						siguiente: que Javascript es asíncrono y concurrente
					</li>
					<li>
						<i>Callbacks :</i> Una función de callback es una función
						que se pasa a otra función como un argumento, que luego
						se invoca dentro de la función externa para completar
						algún tipo de rutina o acción.
					</li>
					<li>
						<i>Promesas :</i> Es un objeto que representa la
						terminación o el fracaso de una operación asíncrona. Es
						decir, se ejecuta una serie de instrucciones, y,
						dependiendo de los resultados que se computen. Recibimos
						el dato que esperamos (terminación) o el fracaso (error
						de lo que sucedió). Son útiles cuando queremos hacer un
						comportamiento sincrono y evitar el callback hell.
					</li>
					<li>
						<i>Async/Await :</i> Esta funcionalidad es algo reciente, no
						llegó para remplazar a las promesas, si no a
						complementarlas trabajando en conjunto. ¿Qué es
						Async/Await? Estas características, básicamente, actúan
						como azúcar sintáctico, haciendo el código asíncrono
						fácil de escribir y leer más tarde. Hacen que el código
						asíncrono se parezca más al código síncrono de la vieja
						escuela, por lo que merece la pena aprenderlo.
					</li>

					<li>
						<i>Destructuración :</i> es
						una expresión de JavaScript que permite extraer valores
						de Arrays o propiedades de objetos en distintas
						variables.
					</li>
				</ul>
			</article>
		</>
	)
}
