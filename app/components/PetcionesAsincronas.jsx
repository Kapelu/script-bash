'use client'
import './style.css'
import Image from 'next/image'
import logoReact from '@/public/react.svg'
import React, {useState, useEffect} from 'react'

function Pokemons({avatar, name}) {
	return (
		<figure>
			<Image src={avatar} alt={name}></Image>
			<figcaption>{name}</figcaption>
		</figure>
	)
}

export default function PeticionesAsincronas() {
	const [pokemons, setPokemons] = useState([])

	useEffect(() => {
		let url = '/json/user.json'
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				console.log(json)

				json.results.forEach((el) => {
					fetch(el.url)
						.then((res) => res.json())
						.then((json) => {
							let pokemon = {
								id: json.id,
								name: json.name,
								avatar: json.avatar,
							}
						})
				})
			})
	}, [])

	return (
		<div className='ejercicio'>
			{pokemons.length === 0 ? (
				<Image
					src={logoReact}
					className='loading'
					width='auto'
					height='auto'
					alt='logo'
					priority={true}
				/>
			) : (
				pokemons.map((el) => (
					<Pokemons key={el.id} nema={el.name} avatar={el.avatar} />
				))
			)}
		</div>
	)
}
