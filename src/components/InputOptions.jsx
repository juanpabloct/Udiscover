import Label from "./Label"

export default function InputOptions({options, label}) {
        
        return (<>
        <Label label={label} textLabel={label}/>
        <select className="mb-10 w-full rounded-md h-8">
            <option  disabled>Selecciona</option>

            {options.map((option, index) => {
                return (
                    <option key={index}>{option}</option>)
                }
                )
            }
      </select>
            </>
    )
}

    
