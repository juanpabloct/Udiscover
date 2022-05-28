export default function Footer() {
    const numerosContacto=["+57 3054246600", "EE. UU. +1 786 789 0299", "COL +57 333 033 3477", "Gastos +56 323 820 966", "México +52 559 063 3939"]
    return (<>
        <div className="w-full">
          <img
            src="https://i.pinimg.com/originals/d3/80/fa/d380fadd94d0cf2db1d36b19cdbd99dd.png"
            className="inline h-40 m-auto"
            alt="icono"
          />
        </div>
        <div>
          <h2 className="text-white">Contactános</h2>
          <div className="flex flex-col">
          <div >
                <img
                        className="inline "
                        
                        src="https://icongr.am/simple/whatsapp.svg?size=20&color=ffffff&colored=false"
                        alt=""
                        />
                <span className="text-white">+57 3054246600</span>
            </div>
            {numerosContacto.map((item, index) => {
                return(
            <div key={index}>
                <img
                        className="inline h-full"
                        
                        src="https://icongr.am/fontawesome/phone.svg?size=20&color=ffffff"
                        alt=""
                        />
                <span className="text-white">{item}</span>
            </div>
            )
                })}
         
          </div>
        </div>
        <div>
            <h2 className="text-white font-semibold mb-3">Siguenos</h2>
            <div className="flex ">
                <div className="rounded-full bg-white flex items-center justify-center w-10 h-10 ">
                    <img src="https://icongr.am/fontawesome/facebook.svg?size=30&color=17204f" alt="" />
                </div>
                <div className="rounded-full bg-white flex items-center justify-center w-10 h-10">
                    <img src="https://icongr.am/fontawesome/instagram.svg?size=30&color=17204f" alt="" />
                </div>
                <div className="rounded-full bg-white flex items-center justify-center w-10 h-10">
                    <img src="https://icongr.am/fontawesome/youtube-play.svg?size=30&color=17204f" alt="" />
                </div>
                <div className="rounded-full bg-white flex items-center justify-center w-10 h-10">
                    <img src="https://icongr.am/fontawesome/linkedin-square.svg?size=30&color=17204f" alt="" />
                </div>
            </div>
                <h3 className="text-white">Registro ante el departamento de educación de la florida</h3>
                <br/>
                <span className="text-white">Politica de privacidad</span>
        </div>
        </>)
}