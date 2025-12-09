"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import booksImg from "public/bookcases-1869616_1280.jpg"
import NavHome from "@/components/nav-home";
import Image from "next/image";
import CardBook from "@/components/card-book";
export default function Home() {
  // LIBROS
  const [books, setBooks] = useState<any[] | null>();
  useEffect(() => {
    setBooks([
      { "id": 1, "title": "100 años de soledad", "author": "Gabriel Garcia Marquez", "author_id": 1,"genre": "Novela", "published_at": "30-05-1967","editorial":"Trillas", "available": 5 , "portrait":"https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg"},
      { "id": 2, "title": "Arrebatos Carnales I", "author": "Francisco Martin Moreno", "author_id": 2,"genre": "Historia", "published_at": "10-05-2009","editorial":"Planeta", "available": 4 , "portrait":"https://m.media-amazon.com/images/I/813S5RSCwjL._AC_UF894,1000_QL80_.jpg"},
      { "id": 3, "title": "Arrebatos Carnales II", "author": "Francisco Martin Moreno", "author_id": 2,"genre": "Historia", "published_at": "05-11-2013","editorial":"Planeta", "available": 0, "portrait":"https://http2.mlstatic.com/D_NQ_NP_940046-MLU53308019496_012023-O.webp"},
      { "id": 4, "title": "Arrebatos Carnales III", "author": "Francisco Martin Moreno", "author_id": 2,"genre": "Historia", "published_at": "23-10-2015","editorial":"Planeta", "available": 10, "portrait":"https://www.librostijuana.com/imagenes/9786070/978607070921.GIF" },
    ])
  }, []);

  const [isLoged, setIsLoged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isRented, setIsRenisRented] = useState(false);
  return (
    <div>
      <NavHome 
      isLoged={isLoged}
      isAdmin={isAdmin}/>
      <div className="mt-8">
          <section className="py-10" id="services">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Los m&aacute;s buscados</h2>
              <CardBook 
              isLoged={isLoged} 
              books={books}
              isRented={isRented}
              isAdmin={isAdmin}/>
            </div>
        </section>
      </div>
    </div>
  );
}
