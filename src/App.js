import logo from "./logo.svg";
import "./App.css";

import jsonPhoneCode from "./utilities/codigosTelefonicos.json";
import ModelTarget from "./components/Model.target";
import {
  imagenEmpresas,
  opiniones,
  valoresModal,
  valoresNavbar,
  valoresTarjetasPrecios,
  valueTargetBlog,
} from "./utilities/constantes";
import TarjetaPrecios from "./components/TarjetaPrecios";
import SliderOpiniones from "./components/SliderOpiniones";
import SliderEmpresas from "./components/sliderEmpresas";
import Navbar from "./components/Nabvar";
import SectionBlog from "./components/SectionBlog";
import SeccionFormulario from "./components/SeccionFormulario";
import Footer from "./components/Footer";

function App() {
  const phones = jsonPhoneCode.countries;
  return (
    <>
      <Navbar valoresNavbar={valoresNavbar} />
      <main className="pt-24" style={{ backgroundColor: "#4373cf" }}>
        <section className=" pt-9 text-white">
          <div className="grid col-span-1 lg:grid-cols-3 w-11/12 m-auto gap-3 justify-items-center">
            <p className="text-6xl font-black w-11/12 text-center">
              Por una educación <span className="text-green-300">+</span>{" "}
              <span className="text-yellow-500">humana</span>
            </p>
            <div className="w-3/5 lg:col-span-2">
              <p className="text-2xl mb-10 font-bold">
                uDiscover es un Colegio Virtual bilingüe Americano, con enfoque
                en Tecnología, Emprendimiento e Innovación.
              </p>
              <p>
                Ofrecemos la modalidad: Académica bilingüe (español–inglés).
                Contamos con 3 niveles: Elementary School (básica primaria) ,
                Middle School (básica secundaria) y High School (educación
                media) de carácter mixto, Calendarios A (Inicio clases Febrero)
                y B (Inicio clases Agosto).
              </p>
            </div>
          </div>
        </section>
        <section className="mb-4">
          <SeccionFormulario />
        </section>
        <section>
          <img
            src="https://icongr.am/material/school.svg?size=128&color=ffffff"
            alt=""
            className="m-auto"
          />
          <h3 className="text-center text-white text-2xl font-semibold">
            Al ser parte de uDiscover, nuestros estudiantes obtienen la
            titulación High School Diploma.
          </h3>
        </section>
        <section className="mt-16">
          <h3 className="text-center text-6xl text-white font-bold mb-5">
            Aprovecha nuestros precios especiales con descuento
          </h3>
          <div className="grid grid-cols-3 pb-10">
            {valoresTarjetasPrecios.map((item, index) => {
              const {
                titulo,
                cantidadPagos,
                valorMensual,
                precioRegular,
                descripcionTitulo,
                descripcion,
              } = item;
              return (
                <TarjetaPrecios
                  titulo={titulo}
                  cantidadPagos={cantidadPagos}
                  valorMensual={valorMensual}
                  precioRegular={precioRegular}
                  descripcionTitulo={descripcionTitulo}
                  descripcion={descripcion}
                  key={index}
                />
              );
            })}
          </div>
        </section>
        <section className="flex">
          <img
            src="https://ud.school/wp-content/uploads/2021/12/MINIATURA-YT-DEMO-new.png"
            alt=""
            className="w-1/2"
          />
          <div className="bg-white w-1/2 justify-center flex-col flex">
            <h2 className="text-green-800 text-5xl font-bold mt-11">
              Conoce a los finalistas de nuestro Demo Day 2021
            </h2>
            <button className="bg-orange-400 w-1/3 m-auto h-12 rounded-md">
              Ingresa Aqui
            </button>
          </div>
        </section>
        <section className="bg-gradient-to-b to-white degradado ">
          <h2 className=" text-center text-white text-3xl my-10">
            ¿Por qué tu hijo debe estudiar en uDiscover?
          </h2>
          <p className="text-center text-white text-xs my-9">
            Tu hijo merece tener una educación de calidad y a la vez, tiempo
            para desarrollar diferentes actividades. Estudiar en uDiscover les
            permitirá eso y mucho más:
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 w-11/12 m-auto gap-5 pb-16">
            {valoresModal.map((item, index) => {
              const { description, title, img } = item;
              return (
                <ModelTarget
                  description={description}
                  title={title}
                  img={img}
                  key={index}
                />
              );
            })}
          </div>
        </section>
        <section className="">
          <div className="bg-gradient-to-b to-white degradado_50">
            <div className="grid cols-1 xl:grid-cols-2">
              <img
                src="	https://ud.school/wp-content/uploads/2021/05/sl3girl-02.png"
                alt=""
              />
              <div className="mt-24 ml-20 relative">
                <h1 className="text-yellow-400 text-3xl font-black">
                  <span className="text-blue-600">S</span>aberes y<br />
                  <span className="text-blue-600">E</span>xperiencias para
                  <br />
                  <span className="text-blue-600">R</span>econocerse
                </h1>
                <p className="text-8xl font-black text-blue-600">
                  Educación <br />
                  Para la <br />
                  vida
                </p>
                <p className="text-blue-600 font-semibold text-xl mt-5 w-2/3">
                  Más que la mera transmisión de información, el conocimiento es
                  una herramienta para{" "}
                  <span className="text-cyan-600">
                    descubrir por sí mismos{" "}
                  </span>
                  el rol dentro de una sociedad,{" "}
                  <span className="text-cyan-600">
                    las virtudes y las pasiones
                  </span>
                  . Con una mentalidad de libertad e interminable curiosidad,
                  aquí lo importante, más que las respuestas, son las preguntas.
                </p>
                <button className="bg-gradient-to-l text-white to-cyan-600 from-sky-400 text-xl w-7/12 font-bold rounded-md border-2 border-white py-1 shadow-lg shadow-zinc-600 absolute -bottom-24">
                  <a href="#">Conoce Nuestra Metodologia</a>
                </button>
              </div>
            </div>
            <svg
              fill="#3189ff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              {" "}
              <path
                className="elementor-shape-fill"
                d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"
              ></path>{" "}
            </svg>
          </div>
        </section>
        <section className="text-blue-600 bg-gradient-to-b degradado to-white relative flex items-center justify-center">
          <SliderOpiniones opiniones={opiniones} />
        </section>
        <section className="bg-white pt-20">
          <hr className="m-auto bg-blue-400 w-1/2 h-2 rounded-md" />
          <SliderEmpresas imagenEmpresas={imagenEmpresas} />
        </section>
        <section className="bg-gradient-to-b to-sky-800 from-blue-600 ">
          <SectionBlog valueTargetBlog={valueTargetBlog} />
        </section>
      </main>
      <footer className="text-blue-600 bg-gradient-to-b from-sky-800 to-blue-400 pt-7 pb-3">
        <hr className="bg-white h-1" />
        <div className=" grid grid-cols-3 justify-items-center pt-10">
          <Footer />
        </div>
      </footer>
    </>
  );
}

export default App;
