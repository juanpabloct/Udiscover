export default function SectionBlog({valueTargetBlog}) {
    return (<>  
            <img src="https://ud.school/wp-content/uploads/2021/04/pencil2-1.png" alt="Lapiz"/>
            <h2 className="text-center text-5xl mb-7 text-yellow-500 font-extrabold">
            Blog
          </h2>
          <div className="md:grid-cols-2 grid lg:grid-cols-3 justify-items-center gap-4 lg:gap-0">
            {valueTargetBlog.map((item, index) => {
              const { imagen, Titulo, contexto, fecha } = item;
              return (
                <div className="w-10/12 bg-white h-full">
                  <div className="w-full object-cover">
                    <img
                      src={imagen}
                      className=" w-full"
                      style={{ objectPosition: "" }}
                      alt=""
                    />
                  </div>
                  <div className="w-10/12 m-auto mt-10 mb-5 relative bottom-0">
                    <a className=" text-blue-400 " href="#">
                      {Titulo}
                    </a>
                    <p className="text-zinc-500 py-3 mb-5">{contexto}</p>
                    <a href="#" className="text-green-300 pb-3">
                      LEER MÁS<span className="text-xl">{">>"}</span>
                    </a>
                    <hr className="" />
                    <span className="text-zinc-500 mt-5">{fecha}</span>
                  </div>
                </div>
              );
            })}
          </div></>)    
}