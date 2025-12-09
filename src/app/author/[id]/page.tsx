"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

export default function AuthorPage(){
    const { id } = useParams();
    const [data, setData] = useState<any[] | null>(null);
    const [selectedAuthor, setSelectedAuthor] = useState<any | null>(null);

    useEffect(() => {
        const authors = [
            { "id": 1, "name": "Gabriel Garcia Marquez", "nationality": "Colombiana", "birth": "06-03-1926","death": "17-04-2014","portrait": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Gabriel_Garcia_Marquez.jpg/250px-Gabriel_Garcia_Marquez.jpg","biography":"Autor colombiano, Gabriel García Márquez destacó, sin duda como uno de los más grandes narradores de la literatura del siglo XX, pieza fundamental del conocido como boom latinoamericano, sobre todo por su trabajo dentro del realismo mágico. En 1982, García Márquez recibió el galardón más importante de su carrera, el Premio Nobel de Literatura, otorgado como reconocimiento a toda su obra. García Márquez nació y se crio en Aracataca, localidad que luego tendría una importancia clave en muchas de sus obras más conocidas, en una familia cuyo abuelo, coronel, supuso una gran influencia en el joven escritor. A mediados de los años 30, García Márquez dejó atrás su pueblo natal para vivir en Sincelejo y, posteriormente, en Barranquilla. Al iniciar sus estudios de Derecho en Bogotá comienza su verdadera pasión por la literatura. Tras el cierre de la Universidad por los grandes disturbios de 1948, García Márquez se mudó a Cartagena y abandona los estudios para trabajar como periodista en varios medios, como El Universal o El Heraldo, profesión a la que dedicaría los siguientes años de su vida, convirtiéndose en una verdadera pasión capaz de rivalizar con la literatura."},
            { "id": 2, "name": "Francisco Martín Moreno", "nationality": "Mexicana", "birth": "04-04-1946","death": null,"portrait": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Francisco_Mart%C3%ADn_Moreno_.jpg/250px-Francisco_Mart%C3%ADn_Moreno_.jpg","biography":"Escritor y periodista mexicano, Francisco Martín Moreno estudió Derecho, doctorándose en la Academia Mexicana de Derecho, aunque es conocido por su larga labor dentro del mundo del periodismo. Martín Moreno ha trabajado para medios tan importantes como Novedades, El País, Excélsior, Cambio o Milenio, superando los 2000 artículos y columnas a lo largo de su carrera periodística. En lo literario, Martín Moreno se ha decantado por el género de la novela histórica, con especial atención a México y su historia política, en la que suele introducir tanto sucesos contrastados como elementos de ficción, dando como resultado historias adictivas de gran verismo. Su trabajo como periodista ha sido premiado en numerosas ocasiones con el Premio Nacional de Periodismo de México, hasta en cinco ocasiones, y como escritor ha ganado premios como el Laurel de Oro. De entre su obra habría que destacar Las cicatrices del viento, 100 mitos de la Historia de México o En media hora la muerte."},
        ];

        setData(authors);

        const author = authors.find((b) => b.id === Number(id));
        setSelectedAuthor(author || null);
    }, [id]);
    if (!selectedAuthor) {
        return (
            <div className="p-10 text-center text-xl">
                Cargando información del autor...
            </div>
        );
    }
    return(
        <div>
            <div className="bg-gray-100">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                        <div className="col-span-4 sm:col-span-3">
                            <div className="bg-white shadow rounded-lg p-6">
                                <div className="flex flex-col items-center">
                                    <img src={selectedAuthor.portrait} className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                                    </img>
                                    <h1 className="text-xl font-bold">{selectedAuthor.name}</h1>
                                    <p className="text-gray-700">{selectedAuthor.nationality}</p>
                                </div>
                                <hr className="my-6 border-t border-gray-300" />
                                <div className="flex flex-col">
                                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Fecha de nacimiento</span>
                                    <ul>
                                        <li className="mb-2">{selectedAuthor.birth}</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">Fecha de muerte</span>
                                    <ul>
                                        {!selectedAuthor.death && (
                                            <li className="mb-2">Activo</li>
                                        )}   
                                        {selectedAuthor.death && (
                                            <li className="mb-2">{selectedAuthor.death}</li>
                                        )}                                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-9">
                            <div className="bg-white shadow rounded-lg p-6">
                                <h2 className="text-xl font-bold mb-4">Biograf&iacute;a</h2>
                                <p className="text-gray-700">{selectedAuthor.biography}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}