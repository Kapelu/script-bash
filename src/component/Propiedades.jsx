import React from 'react'

const  Propiedades = (props)=>{
    return (
    <>
    <p>{props.porDefecto}</p>
    <br />
    <ul>
            <li>{props.cadena}</li>
            <li>{props.numero}</li>
            <li>{props.booleano? 'Verdadero': 'Falso' }</li>
        </ul>
    </>
    )
}

Propiedades.defaultProps ={
    porDefecto:'Esta es una propiedad por defecto usando la propiedad "defaultProps" '
}

export default Propiedades