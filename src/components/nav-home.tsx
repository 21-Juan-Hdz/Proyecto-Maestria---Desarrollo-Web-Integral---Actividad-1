"use client";
import { useState } from "react";
import Image from "next/image";
import menuOpenImage from "public/menu-squared-2.png"
import menuCloseImage from "public/close-window.png"
import booksImg from "public/bookcases-1869616_1280.jpg"
import booksLoggedImg from "public/books-logged.jpg"
import booksAdminImg from "public/books-in-table.jpg"
import Link from "next/link";

interface Props{
  isLoged: boolean;
  isAdmin: boolean;
}


export default function NavHome({
  isLoged,
  isAdmin
}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <nav className="flex flex-wrap items-center justify-between p-3">
        <div className="text-xl">Biblioteca "Luis Donaldo Colosio"</div>
        <div className="flex md:hidden">
          <button onClick={() => setOpen(!open)}>
            {!open ? (
              <Image src={menuOpenImage} alt="Open Menu" width={40} height={40}/>
            ) : (
              <Image src={menuCloseImage} alt="Close Menu" width={40} height={40}/>
            )}
          </button>
        </div>
        <div
          className={`${
            open ? "block" : "hidden"
          } w-full md:w-auto md:flex text-right font-bold mt-5 md:mt-0`}
        >
          {!isLoged &&(
            <a href="/" className="block md:inline-block hover:text-blue-500 px-3 py-3">
              Home
            </a>
          )}
          { isAdmin &&(
            <a href="/admin" className="block md:inline-block hover:text-blue-500 px-3 py-3">
            Home
          </a>
          )}
          {isLoged && !isAdmin &&(
            <a href="/dashboard" className="block md:inline-block hover:text-blue-500 px-3 py-3">
              Home
            </a>
          )}
          {isLoged && !isAdmin &&(
            <a href="/dashboard/rent" className="block md:inline-block hover:text-blue-500 px-3 py-3">
              Libros rentados
            </a>
          )}
          {isLoged && !isAdmin &&(
            <a href="/dashboard/favorites" className="block md:inline-block hover:text-blue-500 px-3 py-3">
              Mis favoritos
            </a>
          )}
          {isLoged && !isAdmin &&(
            <a href="/dashboard/profile" className="block md:inline-block hover:text-blue-500 px-3 py-3">
              Mi perfil
            </a>
          )}
          {!isLoged && !isAdmin &&(
            <a href="/login-admin" className="block md:inline-block hover:text-blue-500 px-3 py-3">
              Soy Administrador
            </a>
          )}
          {isAdmin &&(
            <a href="/admin/receive" className="block md:inline-block hover:text-blue-500 px-3 py-3">
              Recibir libros
            </a>
          )}
          {isAdmin &&(
            <a href="/admin/books" className="block md:inline-block hover:text-blue-500 px-3 py-3">
              Libros
            </a>
          )}
          {isAdmin &&(
            <a href="/admin/authors" className="block md:inline-block hover:text-blue-500 px-3 py-3">
              Autores
            </a>
          )}
          {isAdmin &&(
            <a href="/admin/publishers" className="block md:inline-block hover:text-blue-500 px-3 py-3">
              Editoriales
            </a>
          )}
          {isAdmin &&(
            <a href="/admin/genre" className="block md:inline-block hover:text-blue-500 px-3 py-3">
              G&eacute;neros
            </a>
          )}
          <div className="md:flex md:w-auto px-2 py-2">
            {!isLoged && (
              <Link href={"/login"}>
                <div className="flex justify-end">
                  <div className="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2">
                    Inicia Sesi&oacute;n
                  </div>
                </div>
              </Link>
            )}
            {isLoged && (
              <Link href={"/"}>
                <div className="flex justify-end">
                  <div className="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2">
                    Cerrar Sesi&oacute;n
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </nav>
      { !isLoged && (
      <div className="relative w-full h-[320px]" id="home">
        <div className="absolute inset-0 opacity-70">
            <Image src={booksImg} alt="Books" className="object-cover object-center w-full h-full"/>

        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-4 md:mb-0">
                <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">Biblioteca Luis Donaldo Colosio</h1>
                <p className="font-regular text-xl mb-8 mt-4">Ac&eacute;rcate con nosotros y encuentra los libros que necesitas.</p>
                
            </div>
        </div>
      </div> )} 
      { isLoged && !isAdmin &&(
        <div className="relative w-full h-[320px]" id="home">
        <div className="absolute inset-0 opacity-70">
            <Image src={booksLoggedImg} alt="Welcome" className="object-cover object-center w-full h-full"/>

        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-4 md:mb-0">
                <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">Bienvenido</h1>
                <p className="font-regular text-xl mb-8 mt-4">Comienza a disfrutar de nuestros mejores t&iacute;tulos</p>
                
            </div>
        </div>
      </div>
      )}
      { isLoged && isAdmin &&(
        <div className="relative w-full h-[320px]" id="home">
        <div className="absolute inset-0 opacity-70">
            <Image src={booksAdminImg} alt="Welcome" className="object-cover object-center w-full h-full"/>

        </div>
        <div className="absolute inset-9 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-4 md:mb-0">
                <h1 className="text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2">Bienvenido</h1>
                <p className="font-regular text-xl mb-8 mt-4">Comienza a administrar la biblioteca</p>
                
            </div>
        </div>
      </div>
      )}
      {/* no login */}
    </div>
  );
}
