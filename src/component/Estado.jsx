import React, { useState } from 'react'

const Estado = (props) => {
	const [count, setCount] = useState(0)

	const incrementar = () => {
		setCount(count + 1)
	}

	const decrementar = () => {
		setCount(count - 1)
	}

	return (
		<>
        <br />
        <br />
        <br />
        <br />
			<h2>Contador: {count}</h2>
            <br />
			<button onClick={incrementar}>Incrementar</button>
			<button onClick={decrementar}>Decrementar</button>
		</>
	)
}

export default Estado
