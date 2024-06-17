//http://localhost:3000/?

import { useState } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario'
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
const [mostrarFormulario, actualiarMostrar] = useState(true)
const [colaboradores, actualizarColaboradores] = useState([])



// Hay varias maneras de hacerlo:
// Ternario --> condicion ? seMuestra : noSeMuestra
// condicion && seMuestra

const cambiarMostrar = () =>{
  actualiarMostrar(!mostrarFormulario)
}


//Registrar colaborador
const registrarColaborador = (colaborador) => {
  //Spread operator. los tres puntos significa que esta copiando esa info
  actualizarColaboradores([...colaboradores, colaborador])

}



//Lista de equipos
const equipos = [

  {
    titulo: "Programación",
    colorPrimario:  "#57C278",
    colorSecundario: "#D9F7E9"
  },

  {
    titulo: "Front End",
    colorPrimario:  "#82CFFA",
    colorSecundario: "#E8F8FF"
  },

  {
    titulo: "Data Science",
    colorPrimario:  "#A6D157",
    colorSecundario: "#F0F8E2"
  },

  {
    titulo: "Devops",
    colorPrimario:  "#E06B69",
    colorSecundario: "#FDE7E8"
  },

  {
    titulo: "Ux y Diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5"
  },

  {
    titulo: "Movil",
    colorPrimario:  "#FFBA05",
    colorSecundario: "#FFF5D9"
  },

  {
    titulo: "Innovación y Gestión",
    colorPrimario:  "#FF8A29",
    colorSecundario: "#FFEEDF"
  }

]

  return (
    <div>
      <Header/>
      {/* {mostrarFormulario && <Formulario/>}*/}

      {mostrarFormulario === true ? <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)}
      registrarColaborador = {registrarColaborador}
      /> : <></> }
      
      <MiOrg cambiarMostrar= {cambiarMostrar}/>

      {
        equipos.map( (equipo) => {
          return <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} />
        } )
      }

      <Footer/>
      

    </div>
  );
}

export default App;
