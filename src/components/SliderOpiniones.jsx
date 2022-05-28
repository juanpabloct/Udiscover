import "../App.css";
export default function SliderOpiniones({opiniones}) {
    const widthChildrens=(opiniones.length)*100+"%"
    return (
    <div className="h-80 overflow-hidden" style={{width:"300% "}}>
        <div className=" flex  animacionSlider" style={{width:widthChildrens}}>

        {opiniones.map((item, index) => {
            
            const { nombre, papel, descripcion, imagen } = item;
            return (
                <div className={ "w-full flex-col flex  "} key={index}>
                <div className=" m-auto justify-center items-center flex w-9/12 gap-12">
                    <p className="w-7/12 text-base letraCarrusel pt-10 mt-10">{descripcion}</p>
                    <img src={imagen} alt="" className="w-52"/>
                </div>
                <div>
                    <p className="text-yellow-700 font-semibold text-xl pt-10 text-center">{nombre}</p>
                    <p className=" letraCarrusel font-black text-center">{papel}</p>
                </div>
            </div> 
          );
        })}
        </div>
      </div>
      )
}