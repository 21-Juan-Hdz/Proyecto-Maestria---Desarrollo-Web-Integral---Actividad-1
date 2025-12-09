"use client";
import { useEffect, useState } from "react";
import NavHome from "@/components/nav-home";
import Link from "next/link";
import SingUpImg from "public/signup.jpg"
export default function LooginPage(){
    const [isLoged, setIsLoged] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    return(
        <div>
            <NavHome
            isLoged={isLoged}
            isAdmin={isAdmin}
            />
            <div>
                <div className="bg-white min-h-screen flex flex-col justify-center py-1 sm:px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className="mt-1 text-center text-3xl font-extrabold text-gray-900">
                            Inicia Sesi&oacute;n
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600 max-w">
                            O &nbsp;
                            <a href="signup" className="font-medium text-blue-600 hover:text-blue-500">
                                crea una cuenta
                            </a>
                        </p>
                    </div>
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            <form className="space-y-6" action="#" method="POST">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Correo electr&oacute;nico
                                    </label>
                                    <div className="mt-1">
                                        <input id="email" name="email" type="email" required
                                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Escribe tu Correo electr&oacute;nico" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Contrase&ntilde;a
                                    </label>
                                    <div className="mt-1">
                                        <input id="password" name="password" type="password" required
                                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                            placeholder="Escribe tu contrase&ntilde;a" />
                                    </div>
                                </div>
                                <div>
                                    <Link href={"/dashboard"}>
                                        <button 
                                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            Iniciar sesi&oacute;n
                                        </button>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}