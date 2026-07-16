import { useDispatch, useSelector} from "react-redux";
import type { Product } from "../types/Product";
import { addFavorite } from "../redux/favoritesSlice";
import { Link } from "react-router-dom";
import type {RootState} from "../redux/store";
import { addCart } from "../redux/cartSlice";


interface Props {
    product: Product;
}

function ProductCard({ product }: Props) {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState ) => state.favorites.items);
    const isFavorite = favorites.some((item) => item.id === product.id);

    function handleFavorite() {
        dispatch(addFavorite(product));
    }
    function handleCart() {
        dispatch(addCart(product));
    }

    return (
        <div
            style={{
                border: "1px solid lightgray",
                borderRadius: "10px",
                padding: "15px",
                textAlign: "center",
            }}
        >
            <Link to = {"/product/" + product.id}>
            <img
                src={product.image}
                alt={product.title}
                width="120"
                height="120"
            />

            <h3>{product.title}</h3>
            </Link>

            <p>${product.price}</p>

            <button
                onClick={handleFavorite}
                disabled={isFavorite}>
                {isFavorite ? "✅Added to Favorites" : "❤️ Add to Favorites"}
            </button>
            <button
                onClick={handleCart}>
                🛒 Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;