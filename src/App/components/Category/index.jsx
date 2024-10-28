import P from "prop-types"

function Category({ children, category }) {

  return (
    <div className=" text-center">
      <h2 className="font-poppins text-2xl font-medium text-white p-6">{category}</h2>
      <div className="flex">
        <div className="mx-auto w-[250px] 450:w-[270px]  sm:w-[580px] lg:w-[870px] 2xl:w-[1160px]">
          {children}
        </div>
      </div>
    </div>
  )
}
Category.propTypes = {
  category: P.string,
  children: P.shape({
    id: P.number,
    title: P.string,
    category: P.string,
    code: P.string
  })
}
export default Category
