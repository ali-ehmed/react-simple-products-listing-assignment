import PageTitle from "@/components/page-title";
import ProductListing from "@/components/product-listing";

export default function Home() {
  return (
    <>
      <PageTitle title="Products" />
      <section className='mx-auto max-w-6xl px-4 py-6'>
        <ProductListing />
      </section>
    </>
  );
}
