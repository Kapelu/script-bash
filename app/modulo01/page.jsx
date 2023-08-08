'use client'
import './styles.css'
import Componente from '@/app/modulo01/components/Componente'
import Propiedades from '@/app/modulo01/components/Propiedades'
import HookUseState from '@/app/modulo01/components/HookUseState'
import HookUseEffect from '@/app/modulo01/components/HookUseEffect'
import PeticionesAsincronas from '@/app/modulo01/components/PeticionesAsincronas'
import HookPersonalizados from '@/app/modulo01/components/HookPersonalizados'
import HookUseRef from '@/app/modulo01/components/HookUseRef'
import Formulario from '@/app/modulo01/components/Formulario'
import Estilos from '@/app/modulo01/components/Estilos'
import Menu from '../components/Menu'

export default function Home() {
	return (
		<main className='App'>
			<div className='menu-fijo'>
				<Menu />
			</div>
			<section className='clases'>
				<article className='articulos' id='componente'>
					<h2 className='titulo'>&nbsp;Componente&nbsp;</h2>
					<Componente msg='Soy un componente de ReactJs' />
					<br />
				</article>
				<article className='articulos' id='propiedades'>
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
				<article className='articulos' id='hooks'>
					<h2 className='titulo'>&nbsp;Hook&nbsp;</h2>
					<HookUseState titulo='Clicks' />
					<div className='hook-line'></div>
					<HookUseEffect />
					<div className='hook-line'></div>
					<HookUseRef />
					<br />
				</article>
				<article className='articulos' id='peticiones-asincronas-con-hooks'>
					<h2 className='titulo'>
						&nbsp;Peticiones Asincronas con Hooks&nbsp;
					</h2>
					<PeticionesAsincronas />
					<br />
				</article>
				<article className='articulos' id='peticiones-asincronas-con-hooks-personalizados'>
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
				<article className='articulos' id='formularios'>
					<h2 className='titulo'>&nbsp;Formulario&nbsp;</h2>
					<Formulario />
					<br />
				</article>

				<article className='articulos' id='estilos-css'>
					<h2 className='titulo'>
						&nbsp;Estilos <i>&#39;css&#39;</i>&nbsp;
					</h2>
					<Estilos />
					<br />
				</article>
				{/* 
				<article className='articulos'>
					<h2 className='titulo'>&nbsp;X&nbsp;</h2>
					<Componente />
					<br />
				</article>
				*/}
			</section>
			<div style={{borderRight: '1px solid var(--first-color)'}}></div>
		</main>
	)
}
