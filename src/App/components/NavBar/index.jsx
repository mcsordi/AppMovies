import P from "prop-types"
function NavBar({ config }) {
  return (
    <nav className={`${config} text-xl bg-black gap-6 uppercase font-semibold`}>
      <a href="/">Home</a>
      <a href="/">Pesquisar</a>
      <a href="/">Favoritos</a>
    </nav>
  )
}
NavBar.propTypes = {
  config: P.string
}
export default NavBar
