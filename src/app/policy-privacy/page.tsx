"use client";

import { useEffect, useState } from "react";
import privacyImg from "public/privacy-policy.jpg"
import Hero from "@/components/hero";

export default function PrivacyPage() {
  return (
    <div>
        <Hero 
        imgAlt="img"
        imgData={privacyImg}
        title="Aviso de Privacidad"></Hero>
        <div className="my-5">
            <article className="px-40 text-justify">
                <h1 className="text-center font-bold">AVISO DE PRIVACIDAD</h1>
                <p className="my-5">Biblioteca “Luis Donaldo Colosio” <br />
                    Ubicaci&oacute;n: Villa de Tezontepec, Hidalgo</p>
                    <p className="my-5">
                        La Biblioteca “Luis Donaldo Colosio”, con domicilio en Villa de Tezontepec, Hidalgo, es responsable del tratamiento de los datos personales que nos proporcione, los cuales ser&aacute;n protegidos conforme a lo dispuesto por la Ley Federal de Protecci&oacute;n de Datos Personales en Posesi&oacute;n de los Particulares y dem&aacute;s normatividad aplicable.
                    </p>
                    <p className="my-5">
                        <span className="font-bold">1. Datos personales que se recaban</span><br />
                        Para el registro, administraci&oacute;n y control de usuarios del sistema de pr&eacute;stamos de libros, se recabar&aacute;n los siguientes datos personales: <br />
                        Datos del usuario: <br />
                        Nombre completo <br />
                        Direcci&oacute;n <br />
                        Correo electr&oacute;nico <br />
                        Tel&eacute;fono <br />
                        Direcci&oacute;n (domicilio) <br />
                        Datos de persona de contacto: <br />
                        Nombre completo <br />
                        Direcci&oacute;n <br />
                        Tel&eacute;fono <br />
                        Parentesco
                    </p>
                    <p className="my-5">
                        <span className="font-bold">2. Finalidades del tratamiento</span> <br />
                        Finalidades primarias: <br />
                        Los datos personales recabados ser&aacute;n utilizados para:
                        Registrar y administrar usuarios dentro del sistema digital de la biblioteca.
                        Controlar y dar seguimiento a los pr&eacute;stamos y devoluciones de libros.
                        Contactar al usuario o a la persona de contacto en caso de retrasos, actualizaciones, incidencias o asuntos relacionados con los pr&eacute;stamos.
                        Generar estad&iacute;sticas internas sin datos identificables.
                        Finalidades secundarias (opcionales):
                        Enviar avisos, comunicados o informaci&oacute;n relevante sobre actividades culturales o educativas realizadas por la biblioteca.
                        Si no desea que sus datos se utilicen para finalidades secundarias, puede manifestarlo por escrito o v&iacute;a correo electr&oacute;nico.
                    </p>
                    <p className="my-5">
                        <span className="font-bold">3. Transferencia de datos</span>
                        Sus datos personales no ser&aacute;n compartidos con terceros, salvo por requerimientos de autoridad competente o en casos previstos por ley.
                    </p>
                    <p className="my-5">
                        <span className="font-bold">4. Medios para ejercer derechos ARCO</span>
                        Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al uso de sus datos personales. Para ello, puede presentar una solicitud al responsable de datos personales de la Biblioteca “Luis Donaldo Colosio” mediante:
                        Solicitud escrita en el mostrador principal de la biblioteca.
                        Correo electr&oacute;nico (si la instituci&oacute;n cuenta con uno; se puede agregar).
                        Su solicitud deber&aacute; incluir nombre, datos de contacto y descripci&oacute;n clara del derecho que desea ejercer.
                    </p>
                    <p className="my-5">
                        <span className="font-bold">5. Uso de tecnolog&iacute;as de informaci&oacute;n</span> <br />
                        El sistema de administraci&oacute;n de pr&eacute;stamos podr&aacute; utilizar herramientas digitales para mejorar su funcionamiento; sin embargo, no realiza pr&aacute;cticas de seguimiento invasivo, ni captura datos biom&eacute;tricos, ni recaba informaci&oacute;n adicional sin consentimiento del usuario.
                    </p>
                    <p className="my-5">
                        <span className="font-bold">6. Cambios al aviso de privacidad</span>
                        Cualquier modificaci&oacute;n al presente aviso se publicar&aacute; en el sitio web oficial o en el tabl&oacute;n de anuncios de la biblioteca.
                    </p>
            </article>
        </div>
    </div>
  );
}
