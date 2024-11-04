import { useState } from "react"
import { TiThMenu } from "react-icons/ti";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";

function Header() {
  const [sandwich, setSandwich] = useState(false)

  return (
    <>
      <header className={`border-b-2 border-red-700 py-4 bg-black flex flex-row
        items-center px-3 justify-between sm:justify-around sm:px-12 font-poppins text-white`}>
        <Link to="/" className="uppercase text-red-700 font-semibold text-3xl">Mathew&apos;s Flix</Link>
        <NavBar onClick={(evt) => setSandwich(evt)} config={"hidden sm:flex"} />
        <TiThMenu className="flex sm:hidden text-2xl text-white" onClick={() =>
          !sandwich ? setSandwich(true) : setSandwich(false)} />
      </header>
      {sandwich && <NavBar onClick={(evt) => setSandwich(evt)}
        config={`${sandwich && `flex`} flex sm:hidden text-white w-full justify-end py-2 px-3.5 `} />}
    </>
  )
}
export default Header
