import type { Product } from "../types/Product";

const API_URL = "https://fakestoreapi.com/products";

export async function getProducts(): Promise<Product[]> {
    const response = await fetch(API_URL);

    const data = await response.json();

    return data;
}

export async function getProductById(id: string): Promise<Product> {
    const response = await fetch(`${API_URL}/${id}`);

    const data = await response.json();

    return data;
}