'use client'
import Image from 'next/image'
import styles from './page.module.css'
import Inicio from './inicio/page'
import Contacto from './contacto/page'
import ConceptosBasicos from './conceptos-basicos/page'

export default function Home() {
	return (
		<>
			<section id='inicio' className='home'>
				<Inicio />
			</section>
			<section id='contacto' className='contacto'>
				<Contacto />
			</section>
			<section id='cosmetica' className=''>
				<ConceptosBasicos />
			</section>

			{/* <section id='cosmetica' className=''>
				<Bazar />
			</section> */}
		</>
	)
}
