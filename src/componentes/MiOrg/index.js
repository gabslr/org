import { useState } from "react"
import "./MiOrg.css"

const MiOrg= (props) => {
    // Estado - hooks
    // useState
    // useState ()
    // const [nombreVariable, funcionActualiza ] = useState(valorInicial)
    
    // const [mostrar,actualiarMostrar] = useState(true)

    // const manejarClick = () =>{
    //     actualiarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/añadir.png" alt="añadir" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg