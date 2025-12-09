"use client";

import { act, useEffect, useState } from "react";

interface Props {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    action: string;
}

export default function ModalComponent({ open, onClose, onConfirm, action }: Props) {
    const [showToast, setShowToast] = useState(false);
    const [toastTitle, setToastTitle] = useState("");
    const [toastMessage, setToastMessage] = useState("");
    const [toastColor, setToastColor] = useState("");
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!open) return null;

    const handleSave = () => {
        setToastTitle("Registro guardado correctamente");
        setToastMessage("Puedes continuar navegando en el portal.");
        setToastColor("green");
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 4000);
        setTimeout(() => {
            onClose
        }, 9000);
    };
    const handleUpdate = () => {
        setToastTitle("Registro actualizado correctamente");
        setToastMessage("Puedes continuar navegando en el portal.");
        setToastColor("green");
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 4000);
        setTimeout(() => {
            onClose
        }, 9000);
    };

    return (
        <div className="fixed z-50 inset-0 bg-white bg-opacity-10 overflow-y-auto h-full w-full px-4 flex items-start justify-center pt-10">
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
            <div className="mx-auto shadow-xl rounded-md bg-white relative">

                {/* Botón de cerrar */}
                <div className="flex justify-end p-2">
                    <button
                        onClick={onClose}
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex items-center"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                {/* Contenido */}
                {action === "Agrega Libro" && (
                    <div className="p-6 pt-0 text-center">
                        <section className="bg-white p-1 xs:p-8">
                            <div className=" mx-auto border rounded-lg p-8">
                                <h2 className="sm:text-xl text-[12px] font-bold mb-6">Agregar libro</h2>
                                <form>
                                    <div className="space-y-6">
                                        <div className="grid sm:grid-cols-4 grid-cols-3 gap-6">
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">T&iacute;tulo </label>
                                                    <input type="text" id="title" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="title" value="" />
                                            </div>
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">ISBN</label>
                                                    <input type="text" id="isbn" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="isbn" value="" />
                                            </div>
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Cantidad</label>
                                                    <input type="number" id="quantity" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="quantity" value="" />
                                            </div>
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Fecha de publicación</label>
                                                    <input type="date" id="published_at" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="published_at" value="" />
                                            </div>
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Portada</label>
                                                    <input type="file" accept=".png, .jpg, .JPEG" id="portrait" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="portrait" value="" />
                                            </div>
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1">G&eacute;nero</label>
                                                <select name="genre" id="genre" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2">
                                                    <option value="" >Select</option>
                                                    <option value="1">Novela</option>
                                                    <option value="2">Historia</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1">Autor</label>
                                                <select name="author" id="author" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2">
                                                    <option value="" >Select</option>
                                                    <option value="1">Gabriel Garcia Marquez</option>
                                                    <option value="2">Francisco Martin Moreo</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1">Editorial</label>
                                                <select name="publisher" id="publisher" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2">
                                                    <option value="" >Select</option>
                                                    <option value="1">Trillas</option>
                                                    <option value="2">Planeta</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Resumen</label>
                                                <textarea id="details" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="details" value="" />
                                        </div>   
                                    </div>
                                    <div className="mt-4 flex justify-center">
                                        <button
                                            onClick={handleSave} 
                                            type="submit" 
                                            className=" bg-blue-700 rounded-[5px] p-[13px_25px] text-white">Guardar</button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                )}
                {action === "Edita Libro" && (
                    <div className="p-6 pt-0 text-center">
                        <section className="bg-white p-1 xs:p-8">
                            <div className=" mx-auto border rounded-lg p-8">
                                <h2 className="sm:text-xl text-[12px] font-bold mb-6">Editar libro</h2>
                                <form>
                                    <div className="space-y-6">
                                        <div className="space-y-6">
                                        <div className="grid sm:grid-cols-4 grid-cols-3 gap-6">
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">T&iacute;tulo </label>
                                                    <input type="text" id="title" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="title" value="" />
                                            </div>
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">ISBN</label>
                                                    <input type="text" id="isbn" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="isbn" value="" />
                                            </div>
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Cantidad</label>
                                                    <input type="number" id="quantity" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="quantity" value="" />
                                            </div>
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Fecha de publicación</label>
                                                    <input type="date" id="published_at" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="published_at" value="" />
                                            </div>
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Portada</label>
                                                    <input type="file" accept=".png, .jpg, .JPEG" id="portrait" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="portrait" value="" />
                                            </div>
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1">G&eacute;nero</label>
                                                <select name="genre" id="genre" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2">
                                                    <option value="" >Select</option>
                                                    <option value="1">Novela</option>
                                                    <option value="2">Historia</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1">Autor</label>
                                                <select name="author" id="author" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2">
                                                    <option value="" >Select</option>
                                                    <option value="1">Gabriel Garcia Marquez</option>
                                                    <option value="2">Francisco Martin Moreo</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1">Editorial</label>
                                                <select name="publisher" id="publisher" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2">
                                                    <option value="" >Select</option>
                                                    <option value="1">Trillas</option>
                                                    <option value="2">Planeta</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Resumen</label>
                                                <textarea id="details" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="details" value="" />
                                        </div>   
                                    </div>
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-center">
                                        <button
                                            onClick={handleUpdate} 
                                            type="submit" 
                                            className=" bg-green-700 rounded-[5px] p-[13px_25px] text-white">Actualizar</button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                )}
                {action === "Agrega Autor" && (
                    <div className="p-6 pt-0 text-center">
                        <section className="bg-white p-1 xs:p-8">
                            <div className=" mx-auto border rounded-lg p-8">
                                <h2 className="sm:text-xl text-[12px] font-bold mb-6">Agregar Autor</h2>
                                <form>
                                    <div className="grid sm:grid-cols-2 grid-cols-3 gap-6">
                                        <div>
                                            <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Nombre</label>
                                                <input type="text" id="name_autor" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="title" value="" />
                                        </div>
                                        <div>
                                            <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Foto</label>
                                                <input type="file" accept=".png, .jpg, .JPEG" id="photo" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="photo" value="" />
                                        </div>
                                        <div>
                                            <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Nacionalidad</label>
                                                <input type="text" id="nationality" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="nationality" value="" />
                                        </div>
                                        
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Fecha de nacimiento</label>
                                                    <input type="date" id="birth" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="birth" value="" />
                                            </div>
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Fecha de muerte</label>
                                                    <input type="date" id="death" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="death" value="" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Biograf&iacute;a</label>
                                                <textarea id="biography" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="biography" value="" />
                                        </div>                                    
                                    </div>
                                    <div className="mt-4 flex justify-center">
                                        <button
                                            onClick={handleSave} 
                                            type="submit" 
                                            className=" bg-blue-700 rounded-[5px] p-[13px_25px] text-white">Guardar</button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                )}
                {action === "Edita Autor" && (
                    <div className="p-6 pt-0 text-center">
                        <section className="bg-white p-1 xs:p-8">
                            <div className=" mx-auto border rounded-lg p-8">
                                <h2 className="sm:text-xl text-[12px] font-bold mb-6">Editar Autor</h2>
                                <form>
                                    <div className="grid sm:grid-cols-2 grid-cols-3 gap-6">
                                        <div>
                                            <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Nombre</label>
                                                <input type="text" id="name_autor" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="title" value="" />
                                        </div>
                                        <div>
                                            <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Foto</label>
                                                <input type="file" accept=".png, .jpg, .JPEG" id="photo" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="photo" value="" />
                                        </div>
                                        <div>
                                            <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Nacionalidad</label>
                                                <input type="text" id="nationality" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="nationality" value="" />
                                        </div>
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6">
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Fecha de nacimiento</label>
                                                    <input type="date" id="birth" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="birth" value="" />
                                            </div>
                                            <div>
                                                <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Fecha de muerte</label>
                                                    <input type="date" id="death" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="death" value="" />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Biograf&iacute;a</label>
                                                <textarea id="biography" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="biography" value="" />
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-center">
                                        <button
                                            onClick={handleUpdate} 
                                            type="submit" 
                                            className=" bg-green-700 rounded-[5px] p-[13px_25px] text-white">Actualizar</button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                )}
                {action === "Agrega Editorial" && (
                     <div className="p-6 pt-0 text-center">
                        <section className="bg-white p-1 xs:p-8">
                            <div className=" mx-auto border rounded-lg p-8">
                                <h2 className="sm:text-xl text-[12px] font-bold mb-6">Agregar Editorial</h2>
                                <form>
                                    <div className="space-y-6">
                                        <div>
                                            <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Nombre</label>
                                                <input type="text" id="name" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="name" value="" />
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-center">
                                        <button
                                            onClick={handleSave} 
                                            type="submit"
                                            className=" bg-blue-700 rounded-[5px] p-[13px_25px] text-white">Guardar</button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                )}
                {action === "Ediat Editorial" && (
                     <div className="p-6 pt-0 text-center">
                        <section className="bg-white p-1 xs:p-8">
                            <div className=" mx-auto border rounded-lg p-8">
                                <h2 className="sm:text-xl text-[12px] font-bold mb-6">Editar Editorial</h2>
                                <form>
                                    <div className="space-y-6">
                                        <div>
                                            <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Nombre</label>
                                                <input type="text" id="name" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="name" value="" />
                                        </div>
                                    </div>
                                    <div className="mt-4 flex justify-center">
                                        <button
                                            onClick={handleUpdate} 
                                            type="submit" 
                                            className=" bg-green-700 rounded-[5px] p-[13px_25px] text-white">Actualizar</button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                )}
                {action === "Agrega Genero" && (
                    <div className="p-6 pt-0 text-center">
                        <section className="bg-white p-1 xs:p-8">
                            <div className=" mx-auto border rounded-lg p-8">
                                <h2 className="sm:text-xl text-[12px] font-bold mb-6">Agregar g&eacute;nero</h2>
                                <form>
                                    <div className="space-y-6">
                                        <div>
                                            <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Nombre </label>
                                                <input type="text" id="name" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="name" value="" />
                                        </div>
                                        <div>
                                            <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Descripci&oacute;n</label>
                                                <input type="text" id="description" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="description" value="" />
                                        </div>
                                        
                                    </div>
                                    <div className="mt-4 flex justify-center">
                                        <button
                                            onClick={handleSave} 
                                            type="submit" 
                                            className=" bg-blue-700 rounded-[5px] p-[13px_25px] text-white">Guardar</button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                )}
                {action === "Edita Genero" && (
                    <div className="p-6 pt-0 text-center">
                        <section className="bg-white p-1 xs:p-8">
                            <div className=" mx-auto border rounded-lg p-8">
                                <h2 className="sm:text-xl text-[12px] font-bold mb-6">Editar g&eacute;nero</h2>
                                <form>
                                    <div className="space-y-6">
                                        <div>
                                            <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Nombre </label>
                                                <input type="text" id="name" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="name" value="" />
                                        </div>
                                        <div>
                                            <label className="text-xs xs:text-sm font-medium text-gray-700 mb-1 ">Descripci&oacute;n</label>
                                                <input type="text" id="description" className="h-[50px] rounded-[5px] text-xs xs:text-sm border border-[#D1D5DB] w-full px-2" name="description" value="" />
                                        </div>
                                        
                                    </div>
                                    <div className="mt-4 flex justify-center">
                                        <button
                                            onClick={handleUpdate} 
                                            type="submit" 
                                            className=" bg-green-700 rounded-[5px] p-[13px_25px] text-white">Actualizar</button>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                )}
                {action === "Eliminar" && (
                    <div className="p-6 pt-0 text-center">
                        <svg className="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>

                        <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">
                            ¿Est&aacute;s seguro de eliminar este registro?
                        </h3>

                        <button
                            onClick={onConfirm}
                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 mr-2"
                        >
                            Si
                        </button>

                        <button
                            onClick={onClose}
                            className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium rounded-lg text-base px-3 py-2.5"
                        >
                            Cancelar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
