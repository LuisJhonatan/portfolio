import { useEffect, useRef, useState } from "react";
import github from '../../assets/img/github.svg'

const Project = ({ id,  name, description, tech, link }) => {
  const [showDescription, setShowDescription] = useState(false);
  const linkRef = useRef(null);

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  useEffect(()=>{
    const techContainer = document.getElementById(id);    
      tech.map((t) => {
        const techElement = document.createElement('img');
        techElement.src = t;
        techElement.alt = 'Technology';
        techElement.className = 'w-8 h-8';
        techContainer.appendChild(techElement);
      });

      if (linkRef.current) {
        linkRef.current.href = link;
        linkRef.current.target = '_blank';
      }
    return () => {
      techContainer.innerHTML = '';
    }
  }, []);

  return (
    <div className="w-full md:w-1/2 h-[30vh] bg-aux m-2 md:m-6">
      <div className="w-full h-full p-1 relative">
        <div
          className="w-full h-full  flex items-center justify-center"
          onClick={handleToggleDescription}
        >
          <h3 className="cursor-pointer md:text-4xl md:hover:font-bold md:hover:scale-110 text-center text-white text-2xl front">
            {name}
          </h3>
        </div>

        <div
          className={`w-full h-full flex flex-col md:gap-8 gap-4 absolute top-0 left-0 md:p-6 p-4 description ${
            showDescription ? "show" : "hide"
          }`}
        >
          <p className="md:text-2xl text-center">
            {description}
          </p>

          <div className="flex items-center justify-around" >
            <div id={id} className="flex gap-2">

            </div>
            <div className="w-8 h-8">
              <a ref={linkRef}>
                <img src={github} alt="github" />
              </a>
            </div>
          </div>

          <div className="wrapper">
            <button className="md:text-2xl b-project" onClick={handleToggleDescription} >
              Atras
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
