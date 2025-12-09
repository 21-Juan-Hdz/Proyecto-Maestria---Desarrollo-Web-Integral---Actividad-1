"use client";

import { useState, useEffect } from "react";
import NavHome from "@/components/nav-home";
import ModalComponent from "@/components/modal";


export default function GenrePage(){
    const [isLoged, setIsLoged] = useState(true);
    const [isAdmin, setIsAdmin] = useState(true);
    const [action, setAction] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState<any[] | null>();
      useEffect(() => {
        setData([
          { "id": 1, "name": "Novela", "description": "Genero de Novela" },
          { "id": 2, "name": "Historia", "description": "Libros de historia" },
        ])
      }, []);

    const handleDelete = () => {
        alert("Usuario eliminado");
        setModalOpen(false);
    };
    return(
        <div className="my-4 mx-5">
            <NavHome 
            isLoged={isLoged}
            isAdmin={isAdmin}
            />
            <div className="p-10">
            <button
                className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition"
                onClick={() => {
                    setModalOpen(true);
                    setAction("Agrega Genero");
                }}
            >
                Agregar G&eacute;nero
            </button>

            <ModalComponent
                open={modalOpen}
                onClose={() => setModalOpen(false)}
                onConfirm={handleDelete}
                action={action}
            />
        </div>
            <div className="mx-5 p-4 text-justify">
                <table className="min-w-full">
                    <thead className="bg-white border-b">
                        <tr>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                #
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Nombre
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Descripción
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((row, rowIndex) => {
                            return (
                                <tr key={rowIndex} className="bg-gray-100 border-b">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {row.id}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {row.name}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {row.description}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <button
                                            className="bg-green-500 text-white rounded-md px-1 py-1 mx-1 hover:bg-green-700 transition"
                                            onClick={() => {
                                                setModalOpen(true);
                                                setAction("Edita Genero");
                                            }}
                                        >
                                            Modificar
                                        </button>

                                        <button
                                            className="bg-red-500 text-white rounded-md px-1 py-1 mx-1 hover:bg-red-700 transition"
                                            onClick={() => {
                                                setModalOpen(true);
                                                setAction("Eliminar");
                                            }}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>

                </table>
            </div>
        </div>
    );
}