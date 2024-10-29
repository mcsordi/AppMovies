import P from "prop-types"
import { Link } from "react-router-dom"
function NavBar({ config, onClick }) {

  return (
    <nav className={`${config} text-md bg-black gap-6 uppercase font-semibold`}>
      <Link onClick={() => { return onClick(true), onClick(false) }} to="/">Home</Link>
      <Link onClick={() => { return onClick(true), onClick(false) }} to="/search">Pesquisar</Link>
      <Link onClick={() => { return onClick(true), onClick(false) }} to="/favorites">Favoritos</Link>
    </nav>
  )
}
NavBar.propTypes = {
  config: P.string,
  onClick: P.func
}
export default NavBar
