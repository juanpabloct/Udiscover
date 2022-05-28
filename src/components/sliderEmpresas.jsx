import "../App.css";

export default function SliderEmpresas({imagenEmpresas}) {
    const widthChildrens=(imagenEmpresas.length)*100+"%"
    return (
    <div className="h-80  overflow-hidden">
        <div className="animacionEmpresas flex " style={{width:widthChildrens}}>

        {imagenEmpresas.map((item, index) => {
            return (
                <div className={ "w-screen flex-col flex items-center"} key={index}>
                    <img src={item} alt="" className="w-32"/>
            </div> 
          );
        })}
        </div>
      </div>
      )
}