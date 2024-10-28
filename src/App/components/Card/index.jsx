import P from "prop-types"
function Card({ src }) {
  return (
    <a href="/">
      < div className="flex items-center justify-center hover:scale-110 w-[230px] 450:w-[250px]
      sm:w-[270px] sm:h-[180px] mx-2.5" >
        <img className="rounded-md" src={src} />
      </div >
    </a >
  )
}
Card.propTypes = {
  src: P.string
}
export default Card
