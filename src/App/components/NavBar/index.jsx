import P from "prop-types"
import { Link } from "react-router-dom"
function NavBar({ config }) {
  return (
    <nav className={`${config} text-md bg-black gap-6 uppercase font-semibold`}>
      <Link to="/">Home</Link>
      <Link to="/search">Pesquisar</Link>
      <Link to="/favorites">Favoritos</Link>
    </nav>
  )
}
NavBar.propTypes = {
  config: P.string
}
export default NavBar
