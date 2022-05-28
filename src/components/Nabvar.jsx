export default function Navbar({valoresNavbar}) {
    return (	
    <header
    className="flex justify-around items-center fixed w-full z-40"
    style={{ backgroundColor: "#336aa1", height: "80px" }}
  >
    <img
      src="https://ud.school/wp-content/uploads/elementor/thumbs/UDiscover-Logoheader-pftn7ernrp27v4ctfczxrzc1nvrpw9u3cy50pyo1m8.png"
      title="Colegio Virtual"
      alt="UDiscover - Colegio Virtual"
      className="h-4/6"
      data-ll-status="loaded"
    />
    <nav className="text-9xl flex justify-between h-full w-3/5">
      <ul className="flex justify-center items-center text-sm w-full gap-2">
        {valoresNavbar.map((item, index) => (
          <li className="efecto" key={index}>
            {item}
          </li>
        ))}
        <button
          className=" text-lg w-1/6 h-2/5 my-auto rounded-lg "
          style={{ backgroundColor: "#51c994", color: "white" }}
        >
          Contacto
        </button>
      </ul>
    </nav>
  </header>)
}