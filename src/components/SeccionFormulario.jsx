import { edades, valoresFormulario, valueForms } from "../utilities/constantes";
import InputOptions from "./InputOptions";
import InputText from "./InputText";

export default function SeccionFormulario() {
    return (
        <div className="w-1/2 mt-6 m-auto  bg-yellow-500 rounded-lg grid grid-cols-2">
        <div className="w-10/12 ml-8 text-white">
          <div className="w-full">
            <img
              className=""
              src="https://icongr.am/jam/chevrons-right.svg?size=60&color=ffffff"
              alt=""
            />
            <h2 className="text-5xl font-black ">Inscríbete ahora</h2>
            <span className="mt-20">
              Nuestra asesora pedagógica se pondrá en contacto para iniciar
              el proceso de inscripción de tu hijo.
            </span>
          </div>
          <hr className="text-white" />
          <div className="text-xs w-full">
            <span className="inline-block text-sky-900">
              ¿Ya te inscribiste?{" "}
            </span>
            <a href="#" className="underline">
              Ingresa aquí para conocer el proceso de admisión.
            </a>
          </div>
        </div>
        <div className="w-10/12">
          <form>
            {valueForms.map((item, index) => {
              const { label, textLabel } = item;
              return (
                <InputText
                  label={label}
                  textLabel={textLabel}
                  key={index}
                />
              );
            })}
            <InputOptions options={edades} label={"Edad Del Estudiante"} />
            <InputOptions
              options={valoresFormulario}
              label={"¿Cuál es el motivo para buscar un colegio virtual?*"}
            />
            <input type={"checkbox"} />
            <label>
              He leído y acepto la política de privacidad
              <span className="text-red-700">*</span>
            </label>
          </form>
        </div>
      </div>
    )
}