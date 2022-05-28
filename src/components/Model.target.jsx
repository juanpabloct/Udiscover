export default function ModelTarget({title, description, img}) {
    return (
        <div className="bg-white border-2 col-span-1 rounded-lg w-full" style={{borderColor: "#d9f8e9"}}>
        <img
          src={img}
          alt=""
          className="m-auto w-1/2 mt-8 mb-3 "
        />
        <h1 className=" text-center text-xl w-9/12 m-auto font-bold mb-5" style={{color:"#30d77b"}}>
          {title}
        </h1>
        <p className="w-11/12 text-center m-auto pb-4 text-sm" style={{color:"#3e63a9"}}>
            {description}
        </p>
      </div>
    )
}