import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Search from "./pages/Search";
import Watch from "./pages/Watch";
import ErrorPage from "./pages/ErrorPage";

function AppRoute() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default AppRoute;
