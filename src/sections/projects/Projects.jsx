import Project from "./Project"
import react from '../../assets/img/react.svg'
import javascript from '../../assets/img/javascript.svg'
import css from '../../assets/img/css.svg'
import html from '../../assets/img/html.svg'
import tailwind from '../../assets/img/tailwind.svg'
import firebase from '../../assets/img/firebase.svg'
import nodejs from '../../assets/img/nodejs.svg'
import mysql from '../../assets/img/mysql.svg'
import next from '../../assets/img/nextjs.svg'
import typescript from '../../assets/img/typescript.svg'

const Projects = () => {
  return (
    <section className="bg-secondary bg-center bg-no-repeat bg-cover" id="proyectos" >
        <div className="container flex flex-col items-center m-auto">
            <h2 className="text-4xl text-white mt-16">Proyectos</h2>
            <Project 
            id = "project1"
            name = "Aura - Arquitectura interiores" 
            description = "Aura - arquitectura de interiores se dedica a la creación de espacios únicos y personalizados. En este proyecto se realizó el diseño y despliegue de su página web."
            tech = {[javascript, css, html]}
            link="https://github.com/LuisJhonatan/Aura"
            />

            <Project
            id = "project2"
            name="Gestor de productos"
            description="Gestor de productos es una aplicación web que permite a los usuarios llevar un control de los productos que tienen en su inventario."
            tech={[react, javascript, css, firebase]}
            link="https://github.com/LuisJhonatan/ManageProducts"
            />

            <Project
            id = "project3"
            name = "Portfolio"
            description = "Portfolio personal desarrollado con React, JavaScript y TailwindCSS."
            tech = {[react, javascript, tailwind, css]}
            />
        </div>
    </section>
  )
}

export default Projects