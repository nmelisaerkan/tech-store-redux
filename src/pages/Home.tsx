import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function loadProducts() {
            const data = await getProducts();
            setProducts(data);
        }

        loadProducts();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h1>🛒 Tech Store</h1>

            <input
                type="text"
                placeholder="Ürün ara..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                    padding: "10px",
                    width: "300px",
                    marginTop: "15px",
                    marginBottom: "20px",
                }}
            />

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 2fr)",
                    gap: "20px",
                    marginTop: "20px",
                }}
            >
                {products
                    .filter((product) =>
                        product.title.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Home;