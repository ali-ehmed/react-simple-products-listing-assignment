'use client'

import { useProducts } from "@/context/product";
import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';
import Product from "./product";
import { ClipLoader } from 'react-spinners'

export default function ProductListing() {
    const { products, loadMoreProducts } = useProducts();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            loadMoreProducts();
        }
    }, [inView, loadMoreProducts]);

    return (
        <>
            <div className={"grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 sm:grid-cols-1"}>
                {products.length > 0 && products.map((product) => (
                    <Product product={product} key={product.id} />
                ))}
            </div>
            <div ref={ref!} className="mt-10 flex justify-center items-center">
                <ClipLoader />
            </div>
        </>
    )
}