import React from 'react'
import img from '../assets/img/bg.png'

//$ Componente funcion expresada
const Componente = props => {
    return(
    <>
    <p>{props.msg}</p>
    <br />
    <img src={img} alt="kapelu" />
    </>
    )

}


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