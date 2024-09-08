import react from '../../assets/img/react.svg'
import javascript from '../../assets/img/javascript.svg'
import css from '../../assets/img/css.svg'
import html from '../../assets/img/html.svg'
import tailwind from '../../assets/img/tailwind.svg'
import nodejs from '../../assets/img/nodejs.svg'
import mysql from '../../assets/img/mysql.svg'
import next from '../../assets/img/nextjs.svg'
import typescript from '../../assets/img/typescript.svg'
import Skill from "./Skill"

const Skills = () => {
  return (
    <section id="habilidades" className="bg-primary overflow-hidden" >
        <div className="h-screen container text-secondary flex flex-col items-center justify-center m-auto">
            <h2 className="md:text-6xl text-4xl mx-auto my-3">Mis Habilidades</h2>
            <div className="w-full flex flex-col items-center">
          <h3 className="text-2xl m-2">Frontend</h3>
          <div className="flex flex-wrap justify-center">
            <Skill img={next} name={"Next.js"} />
            <Skill img={typescript} name={"TypeScript"} />
            <Skill img={react} name={"React"} />
            <Skill img={javascript} name={"JavaScript"} />
            <Skill img={css} name={"CSS"} />
            <Skill img={html} name={"HTML"} />
            <Skill img={tailwind} name={"Tailwind CSS"} />
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-12">
          <h3 className="text-2xl m-2">Backend</h3>
          <div className="flex flex-wrap justify-center">
            <Skill img={nodejs} name={"Node.js"} />
            <Skill img={mysql} name={"MySQL"} />
          </div>
        </div>
        </div>
    </section>
  )
}

export default Skills