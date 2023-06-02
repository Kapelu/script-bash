import React from 'react'

//$ Componente funcion expresada
const Componente = props => {
    return(
    <>
    <p>{props.msg}</p>
    <br /><br /><br />
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