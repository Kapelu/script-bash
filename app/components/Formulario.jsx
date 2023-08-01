'use client'
import './style.css'
import React, {useState} from 'react'

/* 
export default function Formulario() {
	const [nombre, setNombre] = useState('')
	const [sabor, setSabor] = useState('')
	const [lenguaje, setLenguaje] = useState('')
	const [terminos, setTerminos] = useState('false')

	const handleSubmit = e=>{
		e.preventDefault()
		alert('El formulrio se ha enviadol')
		//console.log('El formulrio se ha enviadol')
	}

	return (
		<div className='ejercicio'>
			<h3>
				<i>&#39;Formulario&#39;</i>
			</h3>
			<br />
			<form onSubmit={handleSubmit}>
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
				<span>
					<i>Elige tu sabor JS Favorito</i>
				</span>
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
				<br />
				<div className='form'>
					<span>
						<i>Elige tu sabor JS Favorito</i>
					</span>
					<br />
					<br />
					<select
						name='lenguaje'
						onChange={(e) => setLenguaje(e.target.value)}
						defaultValue=''
					>
						<option value=''> - - - </option>
						<option value='js'>JavaScript</option>
						<option value='php'>PHP</option>
						<option value='py'>Python</option>
						<option value='go'>GO</option>
						<option value='rb'>Ruby</option>
					</select>
				</div>
				<br />

				<div className=''>
					<label className='checkbox-label' htmlFor='terminos' onChange={(e) => setTerminos(e.target.checked)}>
						<input
							className='checkbox'
							type='checkbox'
							name='terminos'
							id='terminos'
						/>
						<p>
							<i>Acepto términos y condiciones.</i>
						</p>
					</label>

					<br />
					<br />
				</div>
				<input type="submit"></input>
			</form>
			<br />
		</div>
	)
}
*/

export default function Formulario() {
	const [form, setForm] = useState({})     //{nombre:''}

	const handleChange = e=>{
		setForm({
			...form, [e.target.name]:e.target.checked
		})
	}

	const handleChecked = e=>{
		e.preventDefault()
		alert('El formulrio se ha enviadol')
		//console.log('El formulrio se ha enviadol')
	}

	return (
		<div className='ejercicio'>
			<h3>
				<i>&#39;Formulario&#39;</i>
			</h3>
			<br />
			<form onSubmit={handleChecked}>
				<label htmlFor='nombre'>Nombre:&nbsp;</label>
				<input
					type='text'
					id='nombre'
					name='nombre'
					value={form.nombre}
					onChange={handleChange}
				/>
				<br />
				<br />
				<span>
					<i>Elige tu sabor JS Favorito</i>
				</span>
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
							onChange={handleChange}
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
							onChange={handleChange}
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
							onChange={handleChange}
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
							onChange={handleChange}
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
							onChange={handleChange}
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
							onChange={handleChange}
						/>
						Svelte
					</label>
				</div>
				<br />
				<div className='form'>
					<span>
						<i>Elige tu sabor JS Favorito</i>
					</span>
					<br />
					<br />
					<select
						name='lenguaje'
						onChange={handleChange}
						defaultValue=''
					>
						<option value=''> - - - </option>
						<option value='js'>JavaScript</option>
						<option value='php'>PHP</option>
						<option value='py'>Python</option>
						<option value='go'>GO</option>
						<option value='rb'>Ruby</option>
					</select>
				</div>
				<br />

				<div className=''>
					<label className='checkbox-label' htmlFor='terminos' onChange={handleChange}>
						<input
							className='checkbox'
							type='checkbox'
							name='terminos'
							id='terminos'
						/>
						<p>
							<i>Acepto términos y condiciones.</i>
						</p>
					</label>

					<br />
					<br />
				</div>
				<input type="submit"></input>
			</form>
			<br />
		</div>
	)
}
