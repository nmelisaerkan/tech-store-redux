import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import { getProductById } from "../services/api";
import {useDispatch, useSelector} from "react-redux";
import { addFavorite } from "../redux/favoritesSlice";
import type {RootState} from "../redux/store"

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product | null>(null);
    const favorites = useSelector((state: RootState ) => state.favorites.items);

    useEffect(() => {
        async function loadProduct() {
            if (!id) return;

            const data = await getProductById(id);
            setProduct(data);
        }

        loadProduct();
    }, [id]);

    //-----Product Null mu kontrolu-----//
    if (!product) {
        return <h2>Loading...</h2>;
    }
    const isFavorite = favorites.some((item) => item.id === product.id);

    const dispatch = useDispatch();
    function handleFavorite(){
        if(!product) return;
        dispatch(addFavorite(product));
    }

    return (
        <div>
            <img src={product.image} alt={product.title} width="200" />

            <h2>{product.title}</h2>

            <p>Price: ${product.price}</p>

            <p>Category: {product.category}</p>

            <p>{product.description}</p>

            <button
                onClick={handleFavorite}
                disabled={isFavorite}>
                {isFavorite ? "✅ Added to Favorites" : "❤️ Add to Favorites"}
            </button>
        </div>
    );

}

export default ProductDetail;