'use client'
import Image from 'next/image'
import logoReact from '@/public/react.svg'
import {useFetch} from '@/app/hooks/useFetch'

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

export default function HookPersonalizados() {
	//console.log(useFetch());
	let url = '/json/user.json'

	let {data, isPending, error} = useFetch(url)

	return (
		<div className='ejercicio'>
			<h3>
				<i>Estado {JSON.stringify(isPending)}</i>
			</h3>
			<br />
			<h3>
				<mark>{JSON.stringify(error)}</mark>
			</h3>
			<br />
			<h3 className='hook-async-personalizado'>{JSON.stringify(data)}</h3>
		</div>
	)
}
