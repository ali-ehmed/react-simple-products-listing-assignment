'use client'

import { fetchProducts } from '@/lib/supabase/client';
import { IProduct } from '@/types';
import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface ProductContextType {
    products: IProduct[];
    loadMoreProducts: () => Promise<void>
    hasMoreProducts: boolean;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = (): ProductContextType => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProducts must be used within a ProductProvider');
    }
    return context;
};

export const ProductProvider = ({ children, initialProducts }: { children: ReactNode, initialProducts: IProduct[] }) => {
    const [products, setProducts] = useState<IProduct[]>(initialProducts);
    const [hasMoreProducts, setHasMoreProducts] = useState(true);
    const [page, setPage] = useState(1);
    const postsPerPage = 8;

    const loadMoreProducts = useCallback(async () => {
        if (!hasMoreProducts) return;

        const nextPage = page + 1;
        const newProductsData = await fetchProducts({ pageParam: nextPage, postsPerPage });
        if (newProductsData.length > 0) {
            setPage(nextPage);
            setProducts((prevProducts) => [...prevProducts, ...newProductsData]);
            if (newProductsData.length < postsPerPage) {
                setHasMoreProducts(false);
            }
        } else {
            setHasMoreProducts(false);
        }
    }, [page, hasMoreProducts]);

    return (
        <ProductContext.Provider value={{
            products, loadMoreProducts, hasMoreProducts
        }}>
            {children}
        </ProductContext.Provider>
    );
};
