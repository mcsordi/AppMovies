import P from "prop-types"
function Container({ children }) {
  return <section className="min-h-screen w-full bg-blacktone">
    {children}
  </section>
}

Container.propTypes = {
  children: P.array
}
export default Container
