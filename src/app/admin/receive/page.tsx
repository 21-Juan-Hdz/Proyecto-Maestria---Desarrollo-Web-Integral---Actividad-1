"use client";

import NavHome from "@/components/nav-home";
import { useEffect, useState } from "react";
import CardBook from "@/components/card-book";

export default function RentPage(){
    const [isLoged, setIsLoged] = useState(true);
    const [isAdmin, setIsAdmin] = useState(true);
    const [isRented, setIsRented] = useState(false);
    const [books, setBooks] = useState<any[] | null>();
    useEffect(() => {
        setBooks([
        { "id": 2, "title": "Arrebatos Carnales I", "author": "Francisco Martin Moreno", "author_id": 2,"genre": "Historia", "published_at": "10-05-2009","editorial":"Planeta", "available": 4 , "portrait":"https://m.media-amazon.com/images/I/813S5RSCwjL._AC_UF894,1000_QL80_.jpg"},
        { "id": 3, "title": "Arrebatos Carnales II", "author": "Francisco Martin Moreno", "author_id": 2,"genre": "Historia", "published_at": "05-11-2013","editorial":"Planeta", "available": 2 , "portrait":"https://http2.mlstatic.com/D_NQ_NP_940046-MLU53308019496_012023-O.webp"},
        ])
    }, []);
    return(
        <div>
            <NavHome 
            isLoged={isLoged}
            isAdmin={isAdmin}/>
            <div className="text-justify mx-8 my-6">
                <h3 className="font-bold text-center">
                    Libros que se han rentado
                </h3>
                <CardBook 
                isLoged={isLoged}
                books={books}
                isRented={isRented}
                isAdmin={isAdmin}/>
            </div>
        
        </div>
    );
}