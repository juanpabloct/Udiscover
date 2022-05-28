export default function Label({label, textLabel}) {
    return (
        <label className="text-white" htmlFor={label}>{textLabel}<span className="text-red-800 text-base">*</span></label>
    )
}