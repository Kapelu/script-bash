'use client'
import './style.css'
import Image from 'next/image'
import logoReact from '@/public/react.svg'
import React, {useState, useEffect} from 'react'

function Usuarios({avatar, name}) {
	return (
		<figure className='avatar'>
			<Image
				className='imagen'
				src={avatar}
				alt={name}
				width={75}
				height={75}
			/>
			<figcaption>{name}</figcaption>
		</figure>
	)
}

export default function PeticionesAsincronas() {
	const [usuarios, setUsuarios] = useState([])

	useEffect(() => {
		let url = '/json/user.json'
		/*let url = 'https://jsonplaceholder.typicode.com/users'
		 */
		fetch(url)
			.then((res) => {
				return res.ok
					? res.json()
					: Promise.reject(res) /* validar el error */
			})
			.then((json) => {
				/* console.log(json) */
				json.forEach((element) => {
					fetch(url)
						.then((res) => {
							res.json()
						})
						.then((json) => {
							let usuario = {
								id: element.id,
								name: element.name,
								avatar: element.avatar,
							}
							setUsuarios((usuarios) => [...usuarios, usuario])
						})
				})
			})
			.catch((err) => {
				let message = fetch.statusText || 'Ocurrio un error!!!'
				console.log(message)
			})
			/* .finally(() => {
				console.log('Esto se ejecuta independiente del resultado !!!')
			}) */
	}, [])
	return (
		<div className='ejercicio'>
			{usuarios.length === 0 ? (
				<div>
					<Image
						src={logoReact}
						className='loading'
						width='auto'
						height='auto'
						alt='logo'
						priority={true}
					/>
					<p className='loader'>Cargando...</p>
				</div>
			) : (
				usuarios.map((elem) => (
					<Usuarios
						key={elem.id}
						name={elem.name}
						avatar={elem.avatar}
					/>
				))
			)}
		</div>
	)
}
