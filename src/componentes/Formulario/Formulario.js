
import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    const {registrarColaborador} = props

    const manejarEnvio = (evento) => {
      
        evento.preventDefault()

        let datosAEnviar ={
            nombre,
            puesto,
            foto,
            equipo
        } 
        
        registrarColaborador(datosAEnviar)


    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
            titulo="Nombre"
            placeholder="Ingresar nombre" 
            valor={nombre} 
            actualizarValor={actualizarNombre}  
            />

            <CampoTexto 
            titulo="Puesto" 
            placeholder="Ingresar puesto"
            valor={puesto} 
            actualizarValor={actualizarPuesto}  
            />

            <CampoTexto 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto"
            valor={foto} 
            actualizarValor={actualizarFoto} 
            />

            <ListaOpciones 
            valor= {equipo}
            actualizarEquipo={actualizarEquipo}
            equipos={props.equipos}
            />

            <Boton texto="Crear"/>
        </form>
    </section>
}

export default Formulario