'use client'
import PageTitle from "@/components/page-title";
import ProductListing from "@/components/product-listing";
import { useProducts } from "@/context/product";

export default function Home() {
  const { products } = useProducts();
  console.log(products)
  return (
    <>
      <PageTitle title="Products" />
      <section className='mx-auto max-w-6xl px-4 py-6'>
        <ProductListing />
      </section>
    </>
  );
}
