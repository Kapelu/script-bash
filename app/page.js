import Componente from '@/app/components/Componente'
import Propiedades from './components/Propiedades'
import HookUseState from './components/HookUseState'
import HookUseEffect from './components/HookUseEffect'
import PeticionesAsincronas from './components/PeticionesAsincronas'
import HookPersonalizados from './components/HookPersonalizados'
import HookUseRef from './components/HookUseRef'

export default function Home() {
	return (
		<main className='App'>
			<section className='clases'>
				<article>
					<h2 className='titulo'>&nbsp;Componente&nbsp;</h2>
					<Componente msg='Soy un componente de ReactJs' />
					<br />
				</article>
				<article>
					<h2 className='titulo'>&nbsp;Propiedades&nbsp;</h2>
					<Propiedades
						cadena='Esto es una cadena de texto'
						numero={19}
						booleano={true}
						arreglo={[1, 2, 3]}
						objeto={{
							nombre: 'Daniel Calderon',
							email: 'ddaniel_calderon@hotmail.com',
						}}
						funcion={(num) => num * num}
						elementoReact={<i>Elemento de React</i>}
						componenteReact={
							<Componente msg='Soy un componente de ReactJs pasado como "props"' />
						}
					/>
					<br />
				</article>
				<article>
					<h2 className='titulo'>&nbsp;Hook&nbsp;</h2>
					<HookUseState titulo='Clicks' />
					<div className='hook-line'></div>
					<HookUseEffect />
					<div className='hook-line'></div>
					<HookUseRef />
					<br />
				</article>
				<article>
					<h2 className='titulo'>
						&nbsp;Peticiones Asincronas con Hooks&nbsp;
					</h2>
					<PeticionesAsincronas />
					<br />
				</article>
				<article>
					<h2 className='titulo'>
						&nbsp;Peticiones Asincronas&nbsp;
						<br />
						&nbsp;con&nbsp;
						<br />
						&nbsp;Hook Personalizados&nbsp;
					</h2>
					<HookPersonalizados />
					<br />
				</article>
				

				{/* 
				<article>
					<h2 className='titulo'>&nbsp;X&nbsp;</h2>
					<Componente />
					<br />
				</article>

				*/}
			</section>
		</main>
	)
}
