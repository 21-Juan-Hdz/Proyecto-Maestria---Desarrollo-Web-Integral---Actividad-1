"use client";

import { useState, useEffect } from "react";
import NavHome from "@/components/nav-home";
import ModalComponent from "@/components/modal";


export default function BookPage(){
    const [isLoged, setIsLoged] = useState(true);
    const [isAdmin, setIsAdmin] = useState(true);
    const [action, setAction] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState<any[] | null>();
      useEffect(() => {
        setData([
          { "id": 1, "title": "100 años de soledad", "author": "Gabriel Garcia Marquez", "author_id": 1,"genre": "Novela", "published_at": "30-05-1967","editorial":"Trillas", "available": 5 , "portrait":"https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg","details":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur excepturi error eos quia fugit. Sit impedit voluptatum nihil modi rerum eveniet nisi itaque distinctio incidunt a laboriosam qui, animi hic quaerat nemo. Corporis nihil earum in error non cumque dolor blanditiis, sunt quo at. Suscipit provident inventore deleniti accusamus, voluptatum nisi eius, aut ipsa quo veniam repellendus ratione, consequatur consectetur."},
          { "id": 2, "title": "Arrebatos Carnales I", "author": "Francisco Martin Moreno", "author_id": 2,"genre": "Historia", "published_at": "10-05-2009","editorial":"Planeta", "available": 4 , "portrait":"https://m.media-amazon.com/images/I/813S5RSCwjL._AC_UF894,1000_QL80_.jpg","details":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur excepturi error eos quia fugit. Sit impedit voluptatum nihil modi rerum eveniet nisi itaque distinctio incidunt a laboriosam qui, animi hic quaerat nemo. Corporis nihil earum in error non cumque dolor blanditiis, sunt quo at. Suscipit provident inventore deleniti accusamus, voluptatum nisi eius, aut ipsa quo veniam repellendus ratione, consequatur consectetur."},
          { "id": 3, "title": "Arrebatos Carnales II", "author": "Francisco Martin Moreno", "author_id": 2,"genre": "Historia", "published_at": "05-11-2013","editorial":"Planeta", "available": 0, "portrait":"https://http2.mlstatic.com/D_NQ_NP_940046-MLU53308019496_012023-O.webp","details":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur excepturi error eos quia fugit. Sit impedit voluptatum nihil modi rerum eveniet nisi itaque distinctio incidunt a laboriosam qui, animi hic quaerat nemo. Corporis nihil earum in error non cumque dolor blanditiis, sunt quo at. Suscipit provident inventore deleniti accusamus, voluptatum nisi eius, aut ipsa quo veniam repellendus ratione, consequatur consectetur."},
          { "id": 4, "title": "Arrebatos Carnales III", "author": "Francisco Martin Moreno", "author_id": 2,"genre": "Historia", "published_at": "23-10-2015","editorial":"Planeta", "available": 10, "portrait":"https://www.librostijuana.com/imagenes/9786070/978607070921.GIF" ,"details":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur excepturi error eos quia fugit. Sit impedit voluptatum nihil modi rerum eveniet nisi itaque distinctio incidunt a laboriosam qui, animi hic quaerat nemo. Corporis nihil earum in error non cumque dolor blanditiis, sunt quo at. Suscipit provident inventore deleniti accusamus, voluptatum nisi eius, aut ipsa quo veniam repellendus ratione, consequatur consectetur."},
        ])
      }, []);

    const handleDelete = () => {
        alert("Usuario eliminado");
        setModalOpen(false);
    };
    const shortDetail = (text: string, maxLength: number) => {
        if (!text) return "";
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
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
                    setAction("Agrega Libro");
                }}
            >
                Agregar libro
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
                                Titulo
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Resumen
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Portada
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Autor
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Editorial
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                ISBN
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Género
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Cantidad
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
                                        {row.title}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {shortDetail(row.details,20)}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <img src={row.portrait} alt="portada" className="w-7"/>
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {row.author}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {row.editorial}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {row.author_id}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {row.genre}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {row.available}
                                    </td>

                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <button
                                            className="bg-green-500 text-white rounded-md px-1 py-1 mx-1 hover:bg-green-700 transition"
                                            onClick={() => {
                                                setModalOpen(true);
                                                setAction("Edita Libro");
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