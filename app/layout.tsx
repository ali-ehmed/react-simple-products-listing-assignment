import type { Metadata } from "next";
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { cn } from "@/lib/utils";
import { ProductProvider } from "@/context/product";
import { fetchProducts } from "@/lib/supabase/client";

export const metadata: Metadata = {
  title: "Basic products listing app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialProducts = await fetchProducts({});
  return (
    <html
      lang="en"
      className={cn(GeistSans.variable, GeistMono.variable)}
    >
      <body>
        <ProductProvider initialProducts={initialProducts}>
          <div className='flex min-h-screen w-full flex-col'>
            <main className='flex flex-1 flex-col overflow-hidden bg-muted/50'>
              <div className='py-10 px-8'>
                {children}
              </div>
            </main>
          </div>
        </ProductProvider>
      </body>
    </html>
  );
}
