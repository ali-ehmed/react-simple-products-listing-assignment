'use server'

import axios from "axios";

export async function fetchProducts({ pageParam = 0, postsPerPage = 10 }) {
    const res = await axios.get(`https://dummyjson.com/products?limit=${postsPerPage}&skip=${pageParam}`);
    return await res.data.products;
}