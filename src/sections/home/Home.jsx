import photo from '../../assets/img/photo.png';
import Button from '../../components/button/Button';

const Home = () => {

  return (
    <section className='bg-principal bg-center bg-no-repeat bg-cover' id="inicio" >
        <div className="h-screen container m-auto flex flex-col">
            <div className="text-white m-auto px-4">
                <h2 className="text-2xl md:text-5xl">Bienvenido</h2>
                <h1 className="text-4xl md:text-6xl">Soy <i id='dynamic-name' className='text-tertiary'></i> <br/>desarrollador Full Stack</h1>
                <h3 className="text-base md:text-2xl text-end">Fusiono tecnología y diseño para crear soluciones web únicas.</h3>
                <img className='m-auto'  src={photo} alt="photo" />
                <div className='flex justify-around my-4'>
                    <Button message= "DESCARGAR CV"  padding = {true} />
                    <Button message= "CONTÁCTAME"  padding = {false} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home