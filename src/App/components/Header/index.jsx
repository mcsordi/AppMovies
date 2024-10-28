import { useState } from "react"
import { TiThMenu } from "react-icons/ti";
import NavBar from "../NavBar";

function Header() {
  const [sandwich, setSandwich] = useState(false)
  return (
    <>
      <header className="border-b-2 border-red-700 px-3.5 sm:px-12 py-6 bg-black flex flex-row items-center justify-between font-poppinsbg-black text-white">
        <span className="uppercase text-red-700 font-semibold text-4xl">Mathew&apos;s Flix</span>
        <NavBar config={"hidden sm:flex"} />
        <TiThMenu className="flex sm:hidden text-2xl text-white" onClick={() => !sandwich ? setSandwich(true) : setSandwich(false)} />
      </header>
      {sandwich && <NavBar config={"flex sm:hidden text-white w-full justify-end py-2 px-3.5 "} />}
    </>
  )
}
export default Header
