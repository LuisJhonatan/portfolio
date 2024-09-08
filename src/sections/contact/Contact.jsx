import phone from '../../assets/img/phone.svg'
import email from '../../assets/img/email.svg'
import check from '../../assets/img/check.svg'
import github from '../../assets/img/github.svg'
import linkedin from '../../assets/img/linkedin.svg'
import whatsapp from '../../assets/img/whatsapp.svg'

const Contact = () => {
  return (
    <section className='bg-principal bg-center bg-no-repeat bg-cover' id="contacto" >
        <div className="md:gap-8 h-screen container text-white  flex flex-col items-center justify-center gap-6 m-auto">
            <h2 className="md:text-6xl text-4xl text-white">¿Interesado?</h2>
            <a className='md:hover:scale-105 w-3/4 bg-aux flex flex-col items-center gap-2 p-2' href="tel:+51981727594" target="_blank" rel="noopener noreferrer">
                <img className='w-8 h-auto' src={phone} alt="phone" />
                <p className='md:text-4xl text-3xl'>Teléfono</p>
                <p className='text-base'>981 727 594</p>
            </a>

            <a className='md:hover:scale-105 w-3/4 bg-aux flex flex-col items-center gap-2 p-2' href="mailto:jhonatan.baca.5@gmail.com" target="_blank" rel="noopener noreferrer">
                <img className='w-8 h-auto' src={email} alt="email" />
                <p className='md:text-4xl text-3xl'>Email</p>
                <p className='text-base'>jhonatan.baca.5@gmail.com</p>
            </a>

            <div className='md:hover:scale-105 w-3/4 bg-aux flex flex-col items-center gap-2 p-2'>
                <img className='w-8 h-auto' src={check} alt="" />
                <p className='md:text-4xl text-3xl'>Social media</p>
                <div className='flex gap-2'>
                    <a href="https://github.com/LuisJhonatan" target="_blank" rel="noopener noreferrer">
                        <img className='w-8 h-auto' src={github} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/luis-baca-sandoval-42a4172a5/" target="_blank" rel="noopener noreferrer">
                        <img className='w-8 h-auto' src={linkedin} alt="linkedin" />
                    </a>
                    <a href="https://wa.me/51981727594" target="_blank" rel="noopener noreferrer">
                        <img className='w-8 h-auto' src={whatsapp} alt="whatsapp" />
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact