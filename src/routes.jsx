import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import ErrorPage from "./pages/ErrorPage";
import FavoriteContext from "./context";

function AppRoute() {
  return (
    <BrowserRouter>
      <FavoriteContext>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/search" element={<Search />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route
            path="*"
            element={<ErrorPage param={"Pagina Não Encontrada"} />}
          />
        </Routes>
      </FavoriteContext>
    </BrowserRouter>
  );
}

export default AppRoute;
