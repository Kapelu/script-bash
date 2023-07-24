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

export default function HookPersonalizados() {

	return (
		<div className='ejercicio'>
			<h3>Hooks Personalizados</h3>
		</div>
	)
}
