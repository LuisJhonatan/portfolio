const Button = ({message, padding}) => {

  const handleClick = () => {
    if(message === "DESCARGAR CV"){
      window.open("https://drive.google.com/file/d/1kdPs_eXmeyIXDa9FRn9c6TUSJUvNyFeL/view", "_blank");
    }else if(message === "CONTÁCTAME"){
      document.getElementById('contacto').scrollIntoView({behavior: 'smooth'});
    }
  }

  return (
    <div>
        <button  onClick={handleClick} className={`md:text-2xl p-3 border border-tertiary rounded-2xl ${padding?"text-tertiary hover:bg-tertiary hover:text-white":" font-bold bg-tertiary hover:bg-opacity-0 hover:text-tertiary"}`}>
            {message}
        </button>
    </div>
  )
}

export default Button