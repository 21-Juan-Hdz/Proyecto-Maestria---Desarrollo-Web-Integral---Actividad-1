"use client";

import { useState, useEffect } from "react";
import NavHome from "@/components/nav-home";
import ModalComponent from "@/components/modal";


export default function AuthorPage(){
    const [isLoged, setIsLoged] = useState(true);
    const [isAdmin, setIsAdmin] = useState(true);
    const [action, setAction] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [data, setData] = useState<any[] | null>();
      useEffect(() => {
        setData([
          { "id": 1, "name": "Gabriel Garcia Marquez", "nationality": "Colombiana", "birth": "06-03-1926","death": "17-04-2014","portrait": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Gabriel_Garcia_Marquez.jpg/250px-Gabriel_Garcia_Marquez.jpg","biography":"Autor colombiano, Gabriel García Márquez destacó, sin duda como uno de los más grandes narradores de la literatura del siglo XX, pieza fundamental del conocido como boom latinoamericano, sobre todo por su trabajo dentro del realismo mágico. En 1982, García Márquez recibió el galardón más importante de su carrera, el Premio Nobel de Literatura, otorgado como reconocimiento a toda su obra. García Márquez nació y se crio en Aracataca, localidad que luego tendría una importancia clave en muchas de sus obras más conocidas, en una familia cuyo abuelo, coronel, supuso una gran influencia en el joven escritor. A mediados de los años 30, García Márquez dejó atrás su pueblo natal para vivir en Sincelejo y, posteriormente, en Barranquilla. Al iniciar sus estudios de Derecho en Bogotá comienza su verdadera pasión por la literatura. Tras el cierre de la Universidad por los grandes disturbios de 1948, García Márquez se mudó a Cartagena y abandona los estudios para trabajar como periodista en varios medios, como El Universal o El Heraldo, profesión a la que dedicaría los siguientes años de su vida, convirtiéndose en una verdadera pasión capaz de rivalizar con la literatura."},
          { "id": 2, "name": "Francisco Martín Moreno", "nationality": "Mexicana", "birth": "04-04-1946","death": null,"portrait": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Francisco_Mart%C3%ADn_Moreno_.jpg/250px-Francisco_Mart%C3%ADn_Moreno_.jpg","biography":"Escritor y periodista mexicano, Francisco Martín Moreno estudió Derecho, doctorándose en la Academia Mexicana de Derecho, aunque es conocido por su larga labor dentro del mundo del periodismo. Martín Moreno ha trabajado para medios tan importantes como Novedades, El País, Excélsior, Cambio o Milenio, superando los 2000 artículos y columnas a lo largo de su carrera periodística. En lo literario, Martín Moreno se ha decantado por el género de la novela histórica, con especial atención a México y su historia política, en la que suele introducir tanto sucesos contrastados como elementos de ficción, dando como resultado historias adictivas de gran verismo. Su trabajo como periodista ha sido premiado en numerosas ocasiones con el Premio Nacional de Periodismo de México, hasta en cinco ocasiones, y como escritor ha ganado premios como el Laurel de Oro. De entre su obra habría que destacar Las cicatrices del viento, 100 mitos de la Historia de México o En media hora la muerte."},
        ])
      }, []);

    const handleDelete = () => {
        alert("Usuario eliminado");
        setModalOpen(false);
    };
    const shortBiography = (text: string, maxLength: number) => {
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
                    setAction("Agrega Autor");
                }}
            >
                Agregar Autor
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
                                Foto
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Nacionalidad
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Biograf&iacute;a
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Fecha de nacimiento
                            </th>
                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                Fecha de muerte
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
                                        <img src={row.portrait} alt="portada" className="w-10"/>
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {row.nationality}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {shortBiography(row.biography, 20)}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {row.birth}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {row.death}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        <button
                                            className="bg-green-500 text-white rounded-md px-1 py-1 mx-1 hover:bg-green-700 transition"
                                            onClick={() => {
                                                setModalOpen(true);
                                                setAction("Edita Autor");
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