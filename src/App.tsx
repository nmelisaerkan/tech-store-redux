import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

function App() {
    const favoriteCount = useSelector(
        (state: RootState) => state.favorites.items.length
    );
  return (
      <BrowserRouter>
        <nav
            style={{
              padding: "20px",
              display: "flex",
              gap: "20px",
            }}
        >
          <Link to="/">Home</Link>
            <Link to="/favorites">
                ❤️ Favorites ({favoriteCount})
            </Link>
          <Link to ="/cart">
              🛒 Cart
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;