import { createBrowserClient } from '@supabase/ssr';

export const createClient = () =>
    createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

export const supabaseClient = createClient();

export async function fetchProducts({ pageParam = 0, postsPerPage = 10 }) {
    const start = pageParam * postsPerPage;
    const end = start + postsPerPage - 1;
    const products = await supabaseClient
        .from('Notes')
        .select('*')
        .range(start, end);

    if (products.error) {
        throw new Error(products.error.message);
    }

    return products.data;
}   
