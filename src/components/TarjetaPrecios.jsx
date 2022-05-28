export default function TarjetaPrecios({titulo, cantidadPagos, valorMensual, precioRegular, descripcionTitulo, descripcion}){
    const ocultar=precioRegular? "":"hidden";
    const EstiloDescripcion=ocultar==="hidden"?"mb-40":""
    const describiendo=ocultar==="hidden"&& "-mt-2"
    const ahorro=parseInt(precioRegular)-parseInt(valorMensual);
    return (           
        <div
        className=" border-4 rounded-md pb-9 text-white w-11/12 m-auto h-full"
        style={{ borderColor: "#74c2e2" }}
      >
        <h1 className="text-center text-2xl font-bold">{titulo}</h1>
        <h2 className="text-center text-xl font-semibold">{cantidadPagos}</h2>
        <hr
          className="table m-auto w-11/12 h-1 mt-6"
          style={{ backgroundColor: "#74c2e2" }}
        />

        <div className="w-10/12 m-auto">
    <img
      className="rounded-full w-10 h-10 m-auto mb-7 mt-10"
      src="https://t1.uc.ltmcdn.com/es/posts/9/6/8/significado_de_la_bandera_de_colombia_42869_1_600.webp"
      alt="bandera"
    />
    <div className={"border-4 border-white  m-auto rounded-md "+EstiloDescripcion} >
      <h3 className="text-white text-xl font-bold text-center">
      COP$ {valorMensual}/Mes
      </h3>
    </div>
    <div className={"text-lg h-1/2 mt "+ ocultar}>
      <p className="my-8 line-through ">Precio Regular COP${precioRegular}</p>
      <p className="my-8">Ahorras COP${ahorro}</p>
    </div>
    <div className={"bg-emerald-600 rounded-md "+ describiendo}>
      <h2 className={"ml-3 "}>{descripcionTitulo}</h2>
      <p className="ml-3 h-28 text-sm font-bold mt-5">
        {descripcion}
      </p>
    </div>
  </div>
      <button className="rounded-3xl w-9/12 bg-orange-500 hover:bg-blue-700 hover:border-orange-400 hover:border-2  h-10 text-xl m-auto block mt-5 relative ">
        Contacta a tu asesor
      </button>
  </div>
  )
}