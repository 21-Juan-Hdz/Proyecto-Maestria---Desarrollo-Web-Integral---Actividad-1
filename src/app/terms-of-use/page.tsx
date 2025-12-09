import TermsImg from "public/termos-use.jpg"
import Hero from "@/components/hero";

export default function TermsPage() {
  return (
    <div>
        <Hero 
        imgAlt="img"
        imgData={TermsImg}
        title="Terminos y condiciones"></Hero>
        <div className="my-5">
            <article className="px-40 text-justify">
                <h1 className="text-center font-bold">T&Eacute;RMINOS Y CONDICIONES DE USO DEL SISTEMA DE PR&Eacute;STAMO DE LIBROS</h1>

                <p>Biblioteca “Luis Donaldo Colosio” <br />
                    Villa de Tezontepec, Hidalgo </p>

                <p className="my-5">
                    El uso del sistema de administraci&oacute;n de pr&eacute;stamos de libros implica la aceptaci&oacute;n plena y sin reservas de los presentes T&eacute;rminos y Condiciones. Por favor, l&eacute;alos cuidadosamente.
                </p>
                <p className="text-justify my-5">
                    <span className="font-bold">1. Registro del usuario</span><br />
                    Para acceder al sistema, el usuario deber&aacute; proporcionar datos ver&iacute;dicos y completos, incluyendo: <br />
                    Nombre <br />
                    Direcci&oacute;n <br />
                    Correo electr&oacute;nico <br />
                    Tel&eacute;fono <br />
                    Datos de una persona de contacto <br />
                    El usuario es responsable de mantener actualizada su informaci&oacute;n.
                </p>
                <p className="text-justify my-5">
                    <span className="font-bold">2. Uso del sistema</span><br />
                    El sistema permite: <br />
                    Consultar el cat&aacute;logo de libros. <br />
                    Solicitar pr&eacute;stamos. <br />
                    Revisar fechas de vencimiento. <br />
                    Administrar historial de pr&eacute;stamos. <br />
                    Queda prohibido usar el sistema para actividades il&iacute;citas, manipular informaci&oacute;n o intentar acceder a &aacute;reas restringidas.
                </p>
                <p className="text-justify my-5">
                    <span className="font-bold">3. Pr&eacute;stamos y devoluciones</span> <br />
                    Los pr&eacute;stamos est&aacute;n sujetos a disponibilidad.
                    El usuario deber&aacute; respetar la fecha l&iacute;mite de devoluci&oacute;n indicada por la biblioteca.
                    Los retrasos podr&aacute;n generar restricciones temporales o permanentes en el sistema.
                    En caso de p&eacute;rdida o daño del material, el usuario deber&aacute; cubrir el costo de reposici&oacute;n o reparaci&oacute;n, seg&uacute;n corresponda.
                </p>
                <p className="text-justify my-5">
                    <span className="font-bold">4. Responsabilidad del usuario</span> <br />
                    El usuario es responsable:
                    Del correcto uso de su perfil dentro del sistema.
                    De la confidencialidad de sus credenciales de acceso.
                    De notificar a la biblioteca en caso de detectar un uso indebido o sospechoso.
                </p>
                <p className="my-5 text-justify">
                    <span className="font-bold">5. Suspensi&oacute;n del servicio</span> <br />
                    La biblioteca podr&aacute; suspender temporal o definitivamente el acceso al sistema en los siguientes casos:
                    Uso indebido del sistema.
                    Reincidencia en retrasos de devoluci&oacute;n.
                    Proporcionar datos falsos o incompletos.
                    Incumplir los presentes T&eacute;rminos y Condiciones.
                </p>
                <p className="text-justify my-5">
                    <span className="font-bold">6. Propiedad intelectual</span> <br />
                    El diseño, contenido y estructura del sistema son propiedad de la Biblioteca “Luis Donaldo Colosio” o sus desarrolladores, y est&aacute;n protegidos por las leyes de derechos de autor correspondientes.
                </p>
                <p>
                    <span className="font-bold">7. Privacidad y protecci&oacute;n de datos</span> <br />
                    El uso del sistema est&aacute; regido por el Aviso de Privacidad disponible en las instalaciones y (de existir) sitio web. Al utilizar el sistema, el usuario reconoce y acepta dicho aviso.
                </p>
                <p className="text-justify my-5">
                    <span className="font-bold">8. Modificaciones a los t&eacute;rminos</span> <br />
                    La biblioteca podr&aacute; actualizar estos T&eacute;rminos y Condiciones. Los cambios se dar&aacute;n a conocer mediante anuncios visibles o publicaciones digitales.
                </p>
            </article>
        </div>
    </div>
  );
}
