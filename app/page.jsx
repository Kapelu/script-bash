import Image from 'next/image'

export default function Home() {
	return (
		<>
			<section className='seccion'>
				<article className='contenedor'>
					<h2 className='titulo'>¿ Qué es React ?</h2>
					<p>
						React es una librería para crear interfaces de usuarios
						con código abierto, es decir, que está a disposición de
						cualquier programador para que use sus recursos e
						incluso haga colaboraciones. Esta biblioteca fue lanzada
						en el año 2013, por los desarrolladores de Facebook, con
						base en el lenguaje JavaScript.
					</p>
					<p>
						Actualmente es una de las herramientas más utilizadas
						para crear páginas web porque su uso es bastante
						amigable y fácil de aprender. Sobre todo si ya se tienen
						conocimientos del lenguaje JavaScript, ya que la
						sintaxis que usa es muy similar. Cabe mencionar que
						necesita otros software para complementar las funciones
						de un sitio web, porque no es esencialmente un
						framework. Esto lo veremos más adelante en los
						requerimientos.
					</p>
					<p>
						Por supuesto, es la base de la programación de Facebook,
						Instagram y WhatsApp; y varias compañías internacionales
						como Tesla, Netflix, Twitter, Uber, Walmart, Shopify,
						AirBnb, entre otras. Asimismo React cuenta con su
						repositorio en la plataforma de GitHub, donde tanto
						desarrolladores internos y externos comparten sus
						modificaciones sugeridas al código.
					</p>
					<h2 className='titulo'>¿ Para qué sirve React ?</h2>
					<p>
						La función principal de React es
						desarrollar páginas web de una manera gratuita y
						sencilla gracias a sus componentes reutilizables. Estos
						hacen posible usar un mismo elemento en varias partes
						del sitio o en otros sitios sin necesidad de volver a
						escribir todo el código. Como resultado, los
						programadores web ahorran gran cantidad de tiempo y
						trabajo.
					</p>
					<p>
						React cuenta con un óptimo desempeño que se encarga de
						actualizar y renderizar los cambios realizados de forma
						automática. Esta cualidad permite a los programadores
						desarrollar sus códigos sin mayores contratiempos en el
						modelo en objetos para la representación de documentos &nbsp;
						<i>(DOM)</i>.
					</p>
					<p>
						También es sumamente funcional para personalizar tu
						sitio web, gracias a su gran capacidad para integrarse
						con otros elementos. Además de la configuración de
						nuevas páginas web, esta librería de JavaScript sirve
						para crear aplicaciones móviles con la complementación
						del framework React Native. Y, de igual modo, para crear
						aplicaciones de realidad virtual con la ayuda del
						framework React 360.
					</p>
				</article>
			</section>
		</>
	)
}
