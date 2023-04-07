import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar/Navbar";
import Footer from "./components/layouts/Footer/Footer";
import GlobalContextProvider from "./context/GlobalContext";
import ProfessionalsContainer from "./components/pages/Professionals/ProfessionalsContainer";
import Home from "./components/pages/Home/Home";
import ProfessionalSelectedContainer from "./components/pages/ProfessionalSelected/ProfessionalSelectedContainer";
import FavoritesContainer from "./components/pages/Favorites/FavoritesContainer";

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <Routes>
          <Route element={<Footer />}>
            <Route element={<Navbar />}>
              <Route path="/" element={<Home />} />
              <Route path="/dentistas" element={<ProfessionalsContainer />} />
              <Route
                path="/dentista/:id"
                element={<ProfessionalSelectedContainer />}
              />
              <Route
                path="/contacto"
                element={<h1>Aca va el form de contacto</h1>}
              />
              <Route path="/favs" element={<FavoritesContainer />} />
            </Route>
          </Route>
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
