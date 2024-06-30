'use server'

export async function fetchProducts({ pageParam = 0, postsPerPage = 10 }) {
    const res = await fetch(`https://dummyjson.com/products?limit=${postsPerPage}&skip=${pageParam}`);
    return res.json();
}