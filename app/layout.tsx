import type { Metadata } from "next";
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { cn } from "@/lib/utils";
import { fetchProducts, ProductProvider } from "@/context/product";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(GeistSans.variable, GeistMono.variable)}
    >
      <body>
        <ProductProvider>
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
