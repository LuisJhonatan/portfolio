import Button from "../../components/button/Button"

const AboutMe = () => {
  return (
    <section id="sobremi" className="bg-primary overflow-hidden" >
      <div className="h-screen container text-secondary flex flex-col items-center justify-center m-auto">
        <h2 className="md:text-6xl w-3/4 text-4xl mx-auto">Sobre Mí</h2>
        <div id="text1" className="md:text-2xl w-3/4 h-auto text-base mx-auto my-2 md:my-4 relative -left-full duration-1000">
          Estudio Ciencias de la Computación en 
          la Universidad Nacional de Ingeniería y soy 
          desarrollador full stack en constante 
          crecimiento.
        </div>
        <div id="text2" className="md:text-2xl w-3/4 h-auto text-base mx-auto my-2 md:my-4 relative -right-full duration-1000">
          Desde que descubrí mi pasión por la 
          tecnología, me he dedicado a aprender y 
          perfeccionar mis habilidades en desarrollo 
          web, tanto en frontend como en backend. 
          Además de la programación, he adquirido 
          conocimientos sólidos en metodologías 
          ágiles que me permiten trabajar de manera 
          eficiente en equipo y adaptarme rápidamente
          a los cambios. 
        </div>
        <div id="text3" className="md:text-2xl w-3/4 h-auto text-base mx-auto my-2 md:my-4 relative -left-full duration-1000">
          Mi objetivo es seguir aprendiendo y aplicar mis conocimientos en un   entorno profesional donde pueda contribuir y crecer como desarrollador. Estoy entusiasmado por las oportunidades que el futuro me depara yansioso por empezar a crear soluciones innovadoras que hagan la  diferencia.
        </div>
        <Button message= "DESCARGAR CV"  padding = {false} />
      </div>
    </section>
  )
}

export default AboutMe