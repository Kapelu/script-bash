'use client'
import './style.css'
import Image from 'next/image'
import logoReact from '@/public/react.svg'
import React, {useState, useEffect} from 'react'

function Usuarios({avatar, name}) {
	return (
		<figure>
			<Image src={avatar} alt={name} />
			<figcaption>{name}</figcaption>
		</figure>
	)
}

export default function PeticionesAsincronas() {
	const [usuarios, setUsuarios] = useState([])

	/* useEffect(() => {
		let url = '/json/user.json'
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				console.log(json)
				json.user.forEach((el) => {
					fetch(el.url)
						.then((res) => res.json())
						.then((json) => {
							let usuarios = {
								id: json.id,
								name: json.name,
								avatar: json.avatar,
							}
							setUsuarios((pokemons)=>[...pokemons, usuarios])
						}
						)
				})
			})
	}, []) */
	return (
		<div className='ejercicio'>
			{usuarios.length === 0 ? (
				<div>
					<p>Cargando...</p>
					<Image
						src={logoReact}
						className='loading'
						width='auto'
						height='auto'
						alt='logo'
						priority={true}
					/>
				</div>
			) : (
				pokemons.map((el) => (
					<Usuarios key={el.id} nema={el.name} avatar={el.avatar} />
				))
			)}
		</div>
	)
}
