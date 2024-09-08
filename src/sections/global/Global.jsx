import Header from "../../components/header/Header";
import Home from "../home/Home";
import AboutMe from "../about_me/AboutMe";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Contact from "../contact/Contact";
import { useEffect } from "react";

const Global = () => {
  useEffect(() => {
    let timeout = null;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "inicio") {
              const text = "Luis Jhonatan";
              let index = 0;
              const speed = 150;

              const typeWriter = () => {
                if (index < text.length) {
                  document.getElementById("dynamic-name").innerHTML +=
                    text.charAt(index);
                  index++;
                  timeout = setTimeout(typeWriter, speed);
                }
              };
              document.getElementById("dynamic-name").innerHTML = "";
              typeWriter();
            }else{
              document.getElementById("dynamic-name").innerHTML = "";
            }
            
            if (entry.target.id === "sobremi") {
              document.getElementById("text1").style.left = "0";
              document.getElementById("text2").style.right = "0";
              document.getElementById("text3").style.left = "0";
            } else {
              document.getElementById("text1").style.left = "-100%";
              document.getElementById("text2").style.right = "-100%";
              document.getElementById("text3").style.left = "-100%";
            }
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      clearTimeout(timeout);
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  return (
    <>
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Global;
