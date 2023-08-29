

export default function Propiedades(props) {
	return (
		
			<ul>
				{/* <li>{props.porDefecto}</li>
				<br /> */}
				<li>{props.cadena}</li>
				<br />
				<li>{props.numero}</li>
				<br />
				<li>{props.booleano ? 'Verdadero' : 'Falso'}</li>
				<br />
				<li>{`[ ${props.arreglo.join(', ')} ]`}</li>
				<br />
				<li>{`[ ${props.arreglo.map(props.funcion).join(', ')} ]`}</li>
				<br />
				<li>{props.objeto.nombre + ' / ' + props.objeto.email}</li>
				<br />
				<li>{props.elementoReact}</li>
				<br />
				<li>{props.componenteReact}</li>
				<br />
			</ul>
		
	)
}

/* 
$ Será removida la propiedad defaultProps en un futuro
Propiedades.defaultProps = {
	porDefecto: '" props por defecto dentro de un objeto "',
} */