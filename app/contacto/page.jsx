'use client'
import React, {useEffect} from 'react'
//import Image from 'next/image'
import Link from 'next/link'
import './style.css'

export default function Contacto() {
	
	return (
		<div className='container'>
			<h2 className='section-title'>¿Interesado?</h2>
			<article className='section contact-cards'>
				<aside className='contact-card box-shadow-1'>
					<svg
						width='37'
						height='28'
						viewBox='0 0 37 28'
						fill='#f99aaa'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M18.5 7.3125L7 16.8125V27C7 27.5625 7.4375 28 8 28H15C15.5 28 15.9375 27.5625 15.9375 27V21C15.9375 20.5 16.4375 20 16.9375 20H20.9375C21.5 20 21.9375 20.5 21.9375 21V27C21.9375 27.5625 22.4375 28 22.9375 28H30C30.5 28 31 27.5625 31 27V16.75L19.4375 7.3125C19.3125 7.1875 19.125 7.125 19 7.125C18.8125 7.125 18.625 7.1875 18.5 7.3125ZM36.6875 13.75L31.5 9.4375V0.8125C31.5 0.375 31.125 0.0625 30.75 0.0625H27.25C26.8125 0.0625 26.5 0.375 26.5 0.8125V5.3125L20.875 0.6875C20.375 0.3125 19.6875 0.0625 19 0.0625C18.25 0.0625 17.5625 0.3125 17.0625 0.6875L1.25 13.75C1.0625 13.875 0.9375 14.125 0.9375 14.3125C0.9375 14.5 1.0625 14.6875 1.125 14.8125L2.75 16.75C2.875 16.9375 3.0625 17 3.3125 17C3.5 17 3.6875 16.9375 3.8125 16.8125L18.5 4.75C18.625 4.625 18.8125 4.5625 19 4.5625C19.125 4.5625 19.3125 4.625 19.4375 4.75L34.125 16.8125C34.25 16.9375 34.4375 17 34.625 17C34.875 17 35.0625 16.9375 35.1875 16.75L36.8125 14.8125C36.9375 14.6875 37 14.5 37 14.3125C37 14.125 36.875 13.875 36.6875 13.75Z' />
					</svg>
					<h5>UBICACIÓN</h5>
					<small>Rivadavia, Mendoza, Argentina</small>
				</aside>
				<aside className='contact-card box-shadow-1'>
					<svg
						width='33'
						height='32'
						viewBox='0 0 33 32'
						fill='#f99aaa'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M31.8125 1.5625L25.3125 0.0625C24.625 -0.125 23.875 0.25 23.5625 0.9375L20.5625 7.9375C20.3125 8.5625 20.5 9.25 21 9.6875L24.8125 12.8125C22.5625 17.5625 18.625 21.5625 13.75 23.875L10.625 20.0625C10.1875 19.5625 9.5 19.375 8.875 19.625L1.875 22.625C1.1875 22.9375 0.875 23.6875 1 24.375L2.5 30.875C2.6875 31.5625 3.25 32 4 32C20 32 33 19.0625 33 3C33 2.3125 32.5 1.75 31.8125 1.5625Z' />
					</svg>
					<h5>TELÉFONO</h5>
					<small>
						<Link
							href='tel:+542615370075'
							target='_blank'
							rel='noopener noreferrer preload'
							as='tel:+542615370075'
						>
							(+54) 261 537-0075
						</Link>
					</small>
				</aside>
				<aside className='contact-card box-shadow-1'>
					<svg
						width='32'
						height='24'
						viewBox='0 0 32 24'
						fill='#f99aaa'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path d='M31.375 7.9375C29.9375 9.0625 28.125 10.4375 21.75 15.0625C20.5 16 18.1875 18.0625 16 18.0625C13.75 18.0625 11.5 16 10.1875 15.0625C3.8125 10.4375 2 9.0625 0.5625 7.9375C0.3125 7.75 0 7.9375 0 8.25V21C0 22.6875 1.3125 24 3 24H29C30.625 24 32 22.6875 32 21V8.25C32 7.9375 31.625 7.75 31.375 7.9375ZM16 16C17.4375 16.0625 19.5 14.1875 20.5625 13.4375C28.875 7.4375 29.5 6.875 31.375 5.375C31.75 5.125 32 4.6875 32 4.1875V3C32 1.375 30.625 0 29 0H3C1.3125 0 0 1.375 0 3V4.1875C0 4.6875 0.1875 5.125 0.5625 5.375C2.4375 6.875 3.0625 7.4375 11.375 13.4375C12.4375 14.1875 14.5 16.0625 16 16Z' />
					</svg>
					<h5>EMAIL</h5>
					<small>
						<a href='mailto:ddaniel_calderon@hotmail.com'>
							ddaniel_calderon@hotmail.com
						</a>
					</small>
				</aside>
				{/* <aside className='contact-card box-shadow-1'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='#f99aaa'
					>
						<path d='M16.018,3.815L15.232,8h-4.966l0.716-3.815L9.018,3.815L8.232,8H4v2h3.857l-0.751,4H3v2h3.731l-0.714,3.805l1.965,0.369 L8.766,16h4.966l-0.714,3.805l1.965,0.369L15.766,16H20v-2h-3.859l0.751-4H21V8h-3.733l0.716-3.815L16.018,3.815z M14.106,14H9.141 l0.751-4h4.966L14.106,14z' />
					</svg>
					<h5>SOCIAL MEDIA</h5>
					<small className='social-media'>
						<Link
							className='link'
							href='https://wa.me/542615370075'
							target='_blank'
							rel='noopener noreferrer preload'
							as='https://wa.me/542615370075'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
							>
								<path
									d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'
									fill='#00A884'
								/>
							</svg>
						</Link>
					</small>
				</aside> */}
			</article>
			{/*
			$ **********************   FORMULARIO CONTACTO   ********************** 
			*/}

			{/* <form className='contact-form box-shadow-1'>
				<input
					type='text'
					name='name'
					placeholder='Ingresa tu nombre *'
					title='Nombre sólo acepta letras y espacios en blanco'
					pattern='^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$'
					required
				/>
				<input
					type='number'
					name='email'
					placeholder='Ingresa tu correo *'
					title='Email incorrecto'
					pattern='/^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/'
					required
				/>
				<textarea
					name='comments'
					cols='50'
					rows='10'
					placeholder='Déjame tus comentarios *'
					required
				></textarea>
				<div className='contact-form-loader text-center none'>
					<svg
						width='25'
						height='25'
						viewBox='0 0 38 38'
						xmlns='http://www.w3.org/2000/svg'
						stroke='#f99aaa'
					>
						<g fill='none' fillRule='evenodd'>
							<g transform='translate(1 1)' strokeWidth='2'>
								<circle
									strokeOpacity='.5'
									cx='18'
									cy='18'
									r='18'
								/>
								<path d='M36 18c0-9.94-8.06-18-18-18'>
									<animateTransform
										attributeName='transform'
										type='rotate'
										from='0 18 18'
										to='360 18 18'
										dur='1s'
										repeatCount='indefinite'
									/>
								</path>
							</g>
						</g>
					</svg>
				</div>
				<input className='btn' type='submit' value='ENVIAR MENSAJE' />
			</form>

			<article id='gracias' className='modal'>
				<div className='modal-content'>
					<article className='contact-form-response'>
						<h3>
							¡Muchas Gracias!
							<br />
							Por tus comentarios
						</h3>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
						>
							<path
								d='M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z'
								fill='#f99aaa'
							/>
							<path
								d='M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z'
								fill='#f99aaa'
							/>
							<path
								d='M13 12l2 .012C15.012 11.55 15.194 11 16 11s.988.55 1 1h2c0-1.206-.799-3-3-3S13 10.794 13 12zM8 11c.806 0 .988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3l2 .012C7.012 11.55 7.194 11 8 11z'
								fill='#f99aaa'
							/>
						</svg>
					</article>
				</div>
			</article> */}
		</div>
	)
}
