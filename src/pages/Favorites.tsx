import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { removeFavorite, clearFavorites } from "../redux/favoritesSlice";
import { Link } from "react-router-dom";

function Favorites() {
    const favorites = useSelector(
        (state: RootState) => state.favorites.items
    );

    const dispatch = useDispatch();

    function handleRemove(id: number) {
        dispatch(removeFavorite(id));
    }

    function handleClear() {
        dispatch(clearFavorites());
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>❤️ Favorites</h1>
            <button onClick={handleClear}>
                🗑 Clear Favorites
            </button>

            {favorites.length === 0 ? (
                <p>Henüz favori ürün eklenmedi.</p>
            ) : (
                favorites.map((product) => (
                    <div
                        key={product.id}
                        style={{
                            marginBottom: "15px",
                            borderBottom: "1px solid #ccc",
                            paddingBottom: "10px",
                        }}
                    >
                        <Link to = {"/product/" + product.id}>
                            <h3>{product.title}</h3>

                        </Link>
                        <p>${product.price}</p>

                        <button onClick={() => handleRemove(product.id)}>
                            ❌ Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Favorites;