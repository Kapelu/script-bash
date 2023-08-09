/* 'use client' */
import styled from 'styled-components'

export default function ComponentesEstilizados() {
	const mainColor = '#db7093',
		mainColorAlpha80 = '#db709380'

	const setTransitionTime = (time) => `all ${time} ease-in-out`

	const MyStyle = styled.p`
		padding: 2 rem;
		color: #bebebe;
		border: 2px solid ${mainColor};
		background-color: ${mainColorAlpha80};
		text-align: center;
		transition: ${setTransitionTime('1s')};

		&:hover {
			cursor: pointer;
			border: 15px solid ${mainColorAlpha80};
			background-color: ${mainColor};
		}
	`

	return (
		<div className='ejercicio'>
			<MyStyle>
				Componente estilizado con <i>&#39;Styled-Components&#39;</i>.
			</MyStyle>
		</div>
	)
}
