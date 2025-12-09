"use client";

import NavHome from "@/components/nav-home";
import { useEffect, useState } from "react";
import Image from "next/image";
import userImg from "public/user.png";
import addressImg from "public/address.png";
import emailImg from "public/email.png";
import phoneImg from "public/phone.png";
import libraryImg from "public/library.jpg"

export default function ProfilePage(){
    const [isLoged, setIsLoged] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [profile, setProfile] = useState<any[] | null>();
    const [isEditable, setIsEditable] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastTitle, setToastTitle] = useState("");
    const [toastMessage, setToastMessage] = useState("");
    const [toastColor, setToastColor] = useState("");
    // EDIT
    const [name, setName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    useEffect(() => {
        const data = [
            {
                id: 1,
                name: "Juan Carlos",
                middle_name: "Hernandez",
                last_name: "Resendiz",
                email: "21.juan.carlos.hdz.rdz@gmail.com",
                phone_number: "7714050957",
                address: "Calle Azucena, Col. Guadalupe, Hgo.",
                profile_picture: null
            },
        ];

        setProfile(data);
        setName(data[0].name);
        setMiddleName(data[0].middle_name);
        setLastName(data[0].last_name);
        setEmail(data[0].email);
        setAddress(data[0].address);
        setPhone(data[0].phone_number);
    }, []);
    
    const handleEdit = () =>{
        setIsEditable(true);
    }
    const handleCancelEdit = () =>{
        setIsEditable(false);
    }
    const handleSave = () => {
        setProfile([{
            ...profile?.[0],
            name,
            middle_name: middleName,
            last_name: lastName,
            email,
            address,
            phone_number: phone
        }]);
        setIsEditable(false);
        setShowToast(true);
        setToastTitle("Datos actualizados.");
        setToastMessage("Puedes continuar navegando en el portal.");
        setToastColor("green");
        setTimeout(() => {
            setShowToast(false);
        }, 4000);
    };
    return(
        <div>
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
            <NavHome 
            isLoged={isLoged}
            isAdmin={isAdmin}/>
            {/* Profile */}
            <div className="relative h-1/2">
                <div className="absolute -z-10 inset-0">
                    <Image 
                    src={libraryImg}
                    alt={"Perfil del usuario"}
                    fill
                    style={{objectFit: 'cover'}}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900"></div>
                </div>
                <div>
                    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">

                        {/* MAIN COLUMN */}
                        <div
                            id="profile"
                            className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white text-black opacity-75 mx-6 lg:mx-0"
                        >

                            <div className="p-4 md:p-12 text-center lg:text-left">

                                {/* Mobile Image */}
                                <div
                                    className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
                                    style={{
                                        backgroundImage: "url('https://source.unsplash.com/MP0IUfwrn0A')",
                                    }}
                                />

                                <h1 className="text-3xl font-bold pt-8 lg:pt-0">Mis datos</h1>

                                <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25" />

                                <div className="pt-2  text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                                    <Image 
                                    src={userImg}
                                    alt="Usuario"
                                    className="w-5 mr-3"
                                    />
                                    {!isEditable && (
                                        <span>{profile?.[0].name}&nbsp;{profile?.[0].middle_name}&nbsp;{profile?.[0].last_name}</span>
                                    )}
                                    {isEditable && (
                                        <div className="mx-2 p-2">
                                            <input
                                                type="text"
                                                className="border p-1 rounded my-1"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                            /> <br />
                                            <input
                                                type="text"
                                                className="border p-1 rounded my-1"
                                                value={middleName}
                                                onChange={(e) => setMiddleName(e.target.value)}
                                            /> <br />
                                            <input
                                                type="text"
                                                className="border p-1 rounded my-1"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                        </div>
                                    )}
                                </div>
                                <p className="pt-2  text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                                    <Image 
                                    src={emailImg}
                                    alt="Correo electronico"
                                    className="w-5 mr-3"
                                    />
                                    {!isEditable && (
                                        <span>{profile?.[0].email}</span>
                                    )}
                                    {isEditable && (
                                        <input
                                            type="email"
                                            className="border p-1 rounded"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    )}
                                </p>

                                <p className="pt-2  text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                                    <Image 
                                    src={addressImg}
                                    alt="Dirección"
                                    className="w-5 mr-3"
                                    />
                                    {!isEditable && (
                                        <span>{profile?.[0].address}</span>
                                    )}
                                    {isEditable && (
                                        <input
                                            type="text"
                                            className="border p-1 rounded"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        />
                                    )}
                                </p>
                                <p className="pt-2  text-xs lg:text-sm flex items-center justify-center lg:justify-start">
                                    <Image 
                                    src={phoneImg}
                                    alt="Teléfono"
                                    className="w-5 mr-3"
                                    />
                                    {!isEditable && (
                                        <span>{profile?.[0].phone_number}</span>
                                    )}
                                    {isEditable && (
                                         <input
                                            type="text"
                                            className="border p-1 rounded"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    )}
                                </p>
                                <div className="pt-12 pb-8 flex items-center">
                                    {!isEditable && (
                                        <button 
                                        onClick={handleEdit}
                                        className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 mx-4 rounded-full">
                                            Actualizar
                                        </button>
                                    )}
                                    {isEditable && (
                                        <div>
                                            <button 
                                            onClick={handleSave}
                                            className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 mx-4 rounded-full">
                                                Guardar
                                            </button>
                                            <button 
                                            onClick={handleCancelEdit}
                                            className="bg-orange-700 hover:bg-orange-900 text-white font-bold py-2 px-4 mx-4 rounded-full">
                                                Cancelar
                                            </button>
                                        </div>
                                    )}
                                    
                                </div>
                                
                            </div>
                        </div>

                        {/* RIGHT SIDE IMAGE */}
                        <div className="w-full lg:w-2/5">
                            <img
                                src="https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
                                alt="Profile Image"
                                width={600}
                                height={600}
                                className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
                            />
                        </div>
                    </div>
                </div>
                {/* <div className="pt-50 pb-50 flex justify-center item-center">
                    <h1 className="text-white text-6xl">
                        datos de perfil
                    </h1>
                </div> */}
            </div>
        
        </div>
    );
}