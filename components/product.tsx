'use client'
import { Star } from 'lucide-react';
import React from 'react';
import Image from "next/image";
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { IProduct } from '@/types';
import { useRouter } from 'next/navigation';
const Product = ({ product }: { product: IProduct }) => {

    const router = useRouter()

    return (
        <Card key={product.id}>
            <CardHeader>
                <div className={'h-40 w-50 relative'}>
                    <Image
                        alt={product.thumbnail}
                        src={product.images}
                        fill
                        sizes={'50vw'}
                        style={{ objectFit: "cover" }} />
                </div>
            </CardHeader>
            <CardContent>
                <CardTitle className={"text-sm text-gray-600"}>{product.title}</CardTitle>
                <CardDescription className={'mt-2 truncate'}>{product.description}</CardDescription>
                <div className={"flex items-center justify-between mt-4"}>
                    <div className="flex">
                        {Array.from({ length: Math.floor(product.rating) }, () => 0)
                            .map((_star, idx) => (
                                <Star size={20} key={idx} color={"#fed802"} fill={'#fed802'} />
                            ))}
                        {Array.from({ length: 5 - Math.floor(product.rating) }, () => 0)
                            .map((_star, idx) => (
                                <Star size={20} key={idx} color={"#fed802"} />
                            ))}
                    </div>
                    <p className="text-sm font-medium text-gray-900">${product.price}</p>
                </div>
            </CardContent>
            <CardFooter>
                <Button className={"w-24"} onClick={() => router.push('/payment')}>Buy now</Button>
            </CardFooter>
        </Card>
    )
}

export default React.memo(Product);
