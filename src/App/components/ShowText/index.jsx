import P from "prop-types"
function ShowText({ text }) {
  return <div className="font-poppins pt-4 font-medium text-xl text-white">
    <h3>{text}</h3>
  </div>
}

ShowText.propTypes = {
  text: P.string
}
export default ShowText
