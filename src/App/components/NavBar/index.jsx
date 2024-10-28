import P from "prop-types"
import { Link } from "react-router-dom"
function NavBar({ config, clicked }) {

  return (
    <nav className={`${config} text-md bg-black gap-6 uppercase font-semibold`}>
      <Link onClick={() => { clicked(true), clicked(false) }} to="/">Home</Link>
      <Link onClick={() => { clicked(true), clicked(false) }} to="/search">Pesquisar</Link>
      <Link onClick={() => { clicked(true), clicked(false) }} to="/favorites">Favoritos</Link>
    </nav>
  )
}
NavBar.propTypes = {
  config: P.string,
  clicked: P.func
}
export default NavBar
