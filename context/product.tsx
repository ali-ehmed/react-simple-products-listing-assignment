'use client'

import { fetchProducts } from '@/actions';
import { IProduct } from '@/types';
import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

interface ProductContextType {
    products: IProduct[];
    loadMoreProducts: () => void;
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
    const [page, setPage] = useState(1);

    useEffect(() => {
        const loadInitialProducts = async () => {
            const initialProducts = await fetchProducts({ pageParam: 0 });
            setProducts(initialProducts);
        };

        loadInitialProducts();
    }, []);

    const loadMoreProducts = useCallback(async () => {
        const nextPage = page + 10;
        const newProductsData = await fetchProducts({ pageParam: nextPage });
        if (newProductsData?.length) {
            setPage(nextPage);
            setProducts((prevProducts) => [...prevProducts, ...newProductsData]);
        }
    }, [page]);

    return (
        <ProductContext.Provider value={{
            products, loadMoreProducts
        }}>
            {children}
        </ProductContext.Provider>
    );
};
