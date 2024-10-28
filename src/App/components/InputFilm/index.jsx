import P from "prop-types"
function InputFilm({ text }) {

  return <div className="pt-6">
    <input className="font-poppins w-60 sm:w-96 outline-none px-3.5 py-2 rounded-sm" type="search"
      onChange={(evt) => text(evt.target.value.toLocaleLowerCase().trim())} />
  </div>
}
InputFilm.propTypes = {
  text: P.func
}
export default InputFilm
