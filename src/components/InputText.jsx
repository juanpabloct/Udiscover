import Label from "./Label";

export default function InputText({label, textLabel}) {
    return (               
        <div className="flex flex-col">
            <Label label={label} textLabel={textLabel}/>
         <input  className="rounded-lg h-8 " type={"text"} name={label} id={label}/>
        </div>
 )   
}