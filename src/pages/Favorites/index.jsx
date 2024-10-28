import Card from "../../App/components/Card"
import ShowText from "../../App/components/ShowText"
import { useFavoriteContext } from "../../context"

function Favorites() {
  const { fav } = useFavoriteContext()
  const numberOfFavorites = fav.length
  const textFavorite = numberOfFavorites == 1 ? `${numberOfFavorites} Favorito`
    : `${numberOfFavorites} Favoritos`

  return (
    <section className="flex flex-col">
      <div className="mt-6">
        <ShowText text={textFavorite} />
      </div>
      <div className="mx-auto gap-3 my-6 grid sm:mt-3 sm:gap-0 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {fav.map((film, id) => <Card key={id} id={film} />)}
      </div>
    </section>
  )
}
export default Favorites
