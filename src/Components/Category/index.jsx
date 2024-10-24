import P from "prop-types"

function Category({ children, category }) {
  return (
      <section className= "flex flex-col text-center">
        <h2 className="py-3 text-2xl text-white font-body">
          {category}
        </h2>
        <div className="flex ">
          {children}
        </div>
      </section>
    );
}
Category.propTypes={
  category:P.string,
  children:P.shape({
    id:P.number,
    title:P.string,
    category:P.string,
    code:P.string
  })
}
export default Category;
