import React, { Component } from 'react'

//$ Componente funcion expresada
const Componente = props => <h2>{props.msg}</h2>


//$ Componete funcion declarada
/* 
function Componente(props){
    return <h2>{props.msg}</h2>
} 
*/

//$ Componente por clases
/* 
class Componente extends Component{
    render(){
        return <h2>{this.props.msg}</h2>
    }
} 
*/

export default Componente