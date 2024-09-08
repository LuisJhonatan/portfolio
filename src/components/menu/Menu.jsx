const Menu = ({ isActive }) => {
  return (
    <div className={`w-full h-screen z-30 bg-black bg-opacity-75 absolute top-0 ${isActive ? "left-0" : "-left-full"} overflow-hidden duration-500`}>
      <div className="flex flex-col justify-center items-center h-full">
      <a href="#inicio" className="text-white text-3xl font-bold py-2 hover:text-gray-300" >Inicio</a>
        <a href="#sobremi" className="text-white text-3xl font-bold py-2 hover:text-gray-300" >Sobre mí</a>
        <a href="#proyectos" className="text-white text-3xl font-bold py-2 hover:text-gray-300" >Proyectos</a>
        <a href="#habilidades" className="text-white text-3xl font-bold py-2 hover:text-gray-300" >Habilidades</a>
        <a href="#contacto" className="text-white text-3xl font-bold py-2 hover:text-gray-300" >Contacto</a>
      </div>
    </div>
  );
};

export default Menu;