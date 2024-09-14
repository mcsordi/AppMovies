import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import ErrorPage from "./pages/ErrorPage";
import FavoriteContext from "./context";
import BasePage from "./pages/BasePage";

function AppRoute() {
  return (
    <BrowserRouter>
      <FavoriteContext>
        <Routes>
          <Route path="/" element={<BasePage />}>
            <Route index element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/search" element={<Search />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route
              path="*"
              element={<ErrorPage param={"Pagina Não Encontrada"} />}
            />
          </Route>
        </Routes>
      </FavoriteContext>
    </BrowserRouter>
  );
}

export default AppRoute;
