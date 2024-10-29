import P from "prop-types"

function FormNewFilm({ response, target, setTarget, setTitle, onClick
  , setCode,
  setCategory, setNewCategory }) {

  return (
    <div className="bg-black p-10 rounded-md"><form className="gap-2 w-96 flex flex-col">
      <label htmlFor="title" className="text-white">Titulo</label>
      <input className="outline-none p-2 rounded-sm" id="title" type="search"
        onChange={(evt) => setTitle(evt.target.value)} />
      <label htmlFor="code" className="text-white">Código</label>
      <input className="outline-none p-2 rounded-sm" id="code" type="search"
        onChange={(evt) => setCode(evt.target.value)} />
      <label htmlFor="category" className="text-white">Categoria</label>
      <select className=" outline-none p-2 rounded-sm"
        onClick={(evt) => {
          return evt.target.value == "Outro" ? setTarget("flex") : setTarget("hidden"),
            setCategory(evt.target.value)
        }}>
        {response.map(({ category }, id) => <option key={id}>{category}</option>)}
        <option>Outro</option>
      </select>
      <label htmlFor="writeCategory" className={`${target} text-white`}>Outra Categoria</label>
      <input className={`${target} outline-none p-2 rounded-sm`} id="writeCategory" type="search"
        onChange={(evt) => setNewCategory(evt.target.value)} />
      <input className="mt-4 rounded-sm font-semibold cursor-pointer p-1.5 bg-teal-500"
        onClick={(evt) => { return evt.preventDefault(), onClick() }} type="submit" />
    </form></div>)
}
FormNewFilm.propTypes = {
  response: P.array,
  target: P.string,
  setTarget: P.func,
  setTitle: P.func,
  onClick: P.func,
  setCode: P.func,
  setCategory: P.func,
  setNewCategory: P.func
}
export default FormNewFilm
