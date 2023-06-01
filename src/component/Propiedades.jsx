import React from 'react'
import PropTypes from 'prop-types'

const  Propiedades = (props)=>{
    return (
    <>
    <p>{props.porDefecto}</p>
    <br />
    <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano? 'Verdadero': 'Falso' }</li>
            <li>{props.arreglo.join(', ')}</li>
            <li>{props.arreglo.map(props.funcion).join(', ')}</li>
            <li>Nombre: {props.objeto.Nombre}, Apodo: {props.objeto.Apodo}</li>
            <li>{props.elementoReact}</li>
            <li>{props.componenteReact}</li>
        </ul>
    </>
    )
}

Propiedades.defaultProps ={
    porDefecto:'Esta es una propiedad por defecto usando la propiedad "defaultProps" '
}

export default Propiedades