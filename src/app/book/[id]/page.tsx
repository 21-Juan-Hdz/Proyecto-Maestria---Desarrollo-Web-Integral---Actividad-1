"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function LooginPage() {
    const { id } = useParams();
    const [data, setData] = useState<any[] | null>(null);
    const [selectedBook, setSelectedBook] = useState<any | null>(null);

    useEffect(() => {
        const books = [
            { "id": 1, "title": "100 años de soledad", "author": "Gabriel Garcia Marquez", "author_id": 1,"genre": "Novela", "published_at": "30-05-1967","editorial":"Trillas", "available": 5 , "portrait":"https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg","details":"Lorem ipsum dolor sit amet..." },
            { "id": 2, "title": "Arrebatos Carnales I", "author": "Francisco Martin Moreno", "author_id": 2,"genre": "Historia", "published_at": "10-05-2009","editorial":"Planeta", "available": 4 , "portrait":"https://m.media-amazon.com/images/I/813S5RSCwjL._AC_UF894,1000_QL80_.jpg","details":"Lorem ipsum dolor sit amet..." },
            { "id": 3, "title": "Arrebatos Carnales II", "author": "Francisco Martin Moreno", "author_id": 2,"genre": "Historia", "published_at": "05-11-2013","editorial":"Planeta", "available": 0, "portrait":"https://http2.mlstatic.com/D_NQ_NP_940046-MLU53308019496_012023-O.webp","details":"Lorem ipsum dolor sit amet..." },
            { "id": 4, "title": "Arrebatos Carnales III", "author": "Francisco Martin Moreno", "author_id": 2,"genre": "Historia", "published_at": "23-10-2015","editorial":"Planeta", "available": 10, "portrait":"https://www.librostijuana.com/imagenes/9786070/978607070921.GIF","details":"Lorem ipsum dolor sit amet..." },
        ];

        setData(books);

        const book = books.find((b) => b.id === Number(id));
        setSelectedBook(book || null);
    }, [id]);
    if (!selectedBook) {
        return (
            <div className="p-10 text-center text-xl">
                Cargando información del libro...
            </div>
        );
    }
    return (
        <div>
            <section className="py-12">
                <div className="flex mx-auto max-w-[1440px] justify-between gap-6">
                    <div className="w-[649px] h-auto ml-5">
                        <h1 className="text-[86px] font-bold font-['Rufina']">
                            {selectedBook.title}
                        </h1>

                        <p className="mt-5 mb-12 text-2xl font-medium font-['Poppins'] leading-[50px]">
                            {selectedBook.details}
                        </p>
                        <p className="mt-5 mb-2 text-2xl font-bold font-['Poppins'] leading-[50px]">
                            Autor
                        </p>
                        <p className="mt-2 mb-12 text-2xl font-medium font-['Poppins'] leading-[50px]">
                            <Link href={`/author/${selectedBook.author_id}`}>{selectedBook.author}</Link>
                            
                        </p>
                        <p className="mt-5 mb-2 text-2xl font-bold font-['Poppins'] leading-[50px]">
                            Editorial
                        </p>
                        <p className="mt-2 mb-12 text-2xl font-medium font-['Poppins'] leading-[50px]">
                            {selectedBook.editorial}
                        </p>
                    </div>

                    <img
                        className="w-[570px] rounded-lg"
                        src={selectedBook.portrait}
                        alt={selectedBook.title}
                    />
                </div>
            </section>
        </div>
    );
}
