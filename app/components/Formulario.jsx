'use client'
import './style.css'
import React, {useState} from 'react'

export default function Formulario() {
	const [nombre, setNombre] = useState('')
	const [sabor, setSabor] = useState('')

	return (
		<div className='ejercicio'>
			<h3>
				<i>&#39;Formulario&#39;</i>
			</h3>
			<br />
			<form>
				<label htmlFor='nombre'>Nombre:&nbsp;</label>
				<input
					type='text'
					id='nombre'
					name='nombre'
					value={nombre}
					onChange={(e) => setNombre(e.target.value)}
				/>
				<br />
				<br />
				<span><i>Elige tu sabor JS Favorito</i></span>
				<br />
				<br />
				<div className='form'>
					<label className='checkbox-label' htmlFor='vanilla'>
						<input
							className='checkbox'
							type='radio'
							id='vanilla'
							name='sabor'
							value='vanilla'
							onChange={(e) => setSabor(e.target.value)}
						/>
						Vanilla
					</label>

					<label className='checkbox-label' htmlFor='react'>
						<input
							className='checkbox'
							type='radio'
							id='react'
							name='sabor'
							value='react'
							onChange={(e) => setSabor(e.target.value)}
						/>
						React
					</label>

					<label className='checkbox-label' htmlFor='next'>
						<input
							className='checkbox'
							type='radio'
							id='next'
							name='sabor'
							value='next'
							onChange={(e) => setSabor(e.target.value)}
						/>
						Next
					</label>

					<label className='checkbox-label' htmlFor='angular'>
						<input
							className='checkbox'
							type='radio'
							id='angular'
							name='sabor'
							value='angular'
							onChange={(e) => setSabor(e.target.value)}
						/>
						Ángular
					</label>

					<label className='checkbox-label' htmlFor='vue'>
						<input
							className='checkbox'
							type='radio'
							id='vue'
							name='sabor'
							value='vue'
							onChange={(e) => setSabor(e.target.value)}
						/>
						Vue
					</label>

					<label className='checkbox-label' htmlFor='svelte'>
						<input
							className='checkbox'
							type='radio'
							id='svelte'
							name='sabor'
							value='svelte'
							onChange={(e) => setSabor(e.target.value)}
						/>
						Svelte
					</label>
				</div>
			</form>
			<br />
		</div>
	)
}
