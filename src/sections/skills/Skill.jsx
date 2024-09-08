const Skill = ({ img, name }) => {
    return (
      <div className="skill-div hover:-translate-y-3 text-secondary flex flex-col items-center justify-center p-4 m-2 bg-aux2 rounded-lg shadow-lg">
        <img src={img} alt={`${name} logo`} className="md:w-28 md:h-28 w-12 h-12 " />
        <p className="text-lg font-semibold">{name}</p>
      </div>
    );
  };

export default Skill