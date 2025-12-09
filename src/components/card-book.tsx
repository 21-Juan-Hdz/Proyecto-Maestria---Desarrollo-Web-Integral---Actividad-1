"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
interface Props {
    isLoged: boolean;
    books: any[] | null | undefined;
    isRented: boolean;
    isAdmin: boolean;
}
export default function CardBook({
    isLoged,
    books,
    isRented,
    isAdmin
}: Props) {
    const [showToast, setShowToast] = useState(false);
    const [toastTitle, setToastTitle] = useState("");
    const [toastMessage, setToastMessage] = useState("");
    const [toastColor, setToastColor] = useState("");
    const [favorites, setFavorites] = useState<number[]>([]);

    const handleRent = () => {
        setToastTitle("Haz rentado este libro. Tienes 7 días para entregarlo.");
        setToastMessage("Puedes continuar navegando en el portal.");
        setToastColor("green");
        setShowToast(true);
        setTimeout(() => {
        setShowToast(false);
        }, 4000);
    };

    const handleExtension = () => {
        setToastTitle("Haz extendido tu prestamo. Tienes 7 días más para entregarlo.");
        setToastMessage("Puedes continuar navegando en el portal.");
        setToastColor("green");
        setShowToast(true);
        setTimeout(() => {
        setShowToast(false);
        }, 4000);
    };

    const handleReceive = () =>{
        setToastTitle("Recepción de libro registrada correctamente");
        setToastMessage("Puedes continuar navegando en el portal.");
        setToastColor("green");
        setShowToast(true);
        setTimeout(() => {
        setShowToast(false);
        }, 4000);
    }
    

  const toggleFavorite = (id: number) => {
    if (favorites.includes(id)) {
      // Eliminar de favoritos
      setFavorites((prev) => prev.filter((favId) => favId !== id));
      setToastTitle("Libro eliminado de favoritos");
      setToastMessage("Puedes continuar navegando en el portal.");
      setToastColor("red");
    } else {
      // Agregar a favoritos
      setFavorites((prev) => [...prev, id]);
      setToastTitle("Libro agregado a favoritos");
      setToastMessage("Puedes continuar navegando en el portal.");
      setToastColor("green");
    }

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
    return (
        <div
            id="books"
            className="bg-cover w-full flex justify-center items-center"
        >
            {showToast && (
                <div className={`fixed bottom-5 right-5 text-white px-5 py-3 rounded-lg shadow-lg animate-fade-in-up z-50`}>
                    <div
                        className={`flex bg-white text-black items-center px-6 py-4 text-sm border-t-2 rounded-b shadow-sm border-${toastColor}-500`}>
                        {toastColor === "green" && (
                            <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 h-8 text-${toastColor}-500 stroke-current`} fill="none"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        )}
                        {toastColor === "red" && (
                            <svg viewBox="0 0 24 24" className={`w-8 h-8 text-${toastColor}-500 stroke-current`} fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 8V12V8ZM12 16H12.01H12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        )}
                        <div className="ml-3">
                            <div className="font-bold text-left">{toastTitle}</div>
                            <div className="w-full mt-1">{toastMessage}</div>
                        </div>
                    </div>
                </div>
            )}
            
            <div className="w-full bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
                <div className="w-12/12 mx-auto rounded-2xl bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
                    <div className="flex flex-wrap justify-center gap-6">
                        {books?.map((row, rowIndex) => (
                            <div
                                key={rowIndex}
                                className="w-full md:w-[48%] xl:w-[48%] p-2"
                            >
                                <div className="bg-white shadow-md rounded-3xl p-4 border border-gray-100">
                                    <div className="flex-none lg:flex">
                                        <div className="h-full w-full lg:h-full lg:w-full lg:mb-0 mb-3">
                                            <img
                                                src={row.portrait}
                                                alt="card"
                                                className="w-full object-cover lg:h-full rounded-2xl"
                                            />
                                        </div>
                                        <div className="flex-auto ml-3 justify-evenly py-2">
                                            <div className="flex flex-wrap">
                                                <div className="w-full flex-none text-xs text-blue-700 font-medium">
                                                    <Link href={`/author/${row.author_id}`}>{row.author}</Link>
                                                    <button
                                                    onClick={() => toggleFavorite(row.id)}
                                                    aria-label="Agregar a favoritos"
                                                    className="ml-auto focus:outline-none"
                                                    >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill={favorites.includes(row.id) ? "red" : "none"}
                                                        viewBox="0 0 24 24"
                                                        stroke="red"
                                                        strokeWidth="2"
                                                        className="w-6 h-6 cursor-pointer"
                                                    >
                                                        <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M12 21C12 21 6 16 4 11a5 5 0 018-7 5 5 0 018 7c-2 5-8 10-8 10z"
                                                        />
                                                    </svg>
                                                    </button>
                                                </div>
                                                <h3 className="flex-auto text-lg font-medium">
                                                    <Link href={`/book/${row.id}`}>{row.title}</Link>
                                                </h3>
                                            </div>
                                            <div className="flex py-4 text-sm text-gray-500">
                                                <div className="flex-1 inline-flex items-center">

                                                    <p>{row.genre}</p>
                                                </div>
                                                <div className="flex-1 inline-flex items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-5 w-5 mr-2 text-gray-400"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        ></path>
                                                    </svg>
                                                    <p>Publicado <br /><small>{row.published_at}</small></p>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-3 text-sm font-medium mt-3">
                                                {/* <Link
                                                    className="bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100"
                                                    href="/work/37"
                                                >
                                                    <span>Ver</span>
                                                </Link> */}
                                                
                                                {isLoged ? (
                                                    isAdmin ? (
                                                        <button
                                                            onClick={handleReceive} // nueva función
                                                            className="bg-red-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                                        >
                                                            Recibir libro
                                                        </button>
                                                    ) : isRented ? (
                                                        <button
                                                            onClick={handleExtension}
                                                            className="bg-red-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                                        >
                                                            Pedir extensión
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={handleRent}
                                                            className="bg-red-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                                        >
                                                            Rentar
                                                        </button>
                                                    )
                                                ) : (
                                                    <Link href={"/login"}>
                                                        <button className="bg-red-600 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800">
                                                            Rentar
                                                        </button>
                                                    </Link>
                                                )}
                                                
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}