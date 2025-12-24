import { useState } from "react"
import { InputForm } from "../components/forms/InputForm"
import { SelectForm } from "../components/forms/SelectForm"
import styles from '../assets/styles/Registro.module.css'

export function Registro() {

    const carreras = [{ "id": 1, "value": "Ingeniería en Sistemas Computacionales" }, { "id": 2, "value": "Ingeniería en Gestión Empresarial" }, { "id": 3, "value": "Ingeniería Industrial" }, { "id": 4, "value": "Ingeniería en Tecnologías de la Información y Comunicación" }, { "id": 5, "value": "Ingeniería en Logística" }, { "id": 6, "value": "Ingeniería en Electromecánica" }, { "id": 7, "value": "Ingeniería en Electrónica" }, { "id": 8, "value": "Ingeniería en Mecatrónica" }]
    const generos = [{ "id": 1, "value": "Masculino" }, { "id": 2, "value": "Femenino" }, { "id": 3, "value": "Otro" }]
    const userTypes = [{ "id": 1, "value": "Estudiante" }, { "id": 2, "value": "Docente" }, { "id": 3, "value": "Administrador" }, { "id": 4, "value": "Administrativo" }, { "id": 5, "value": "Intendente" }, { "id": 6, "value": "Guardia" }]

    const [userType, setUserType] = useState("alumno")

    function handleChange(event) {
        setUserType(event.target.value)
    }

    function submitForm(formData) {
        const query = [formData.get("email"), formData.get("name")]
        console.log(query)
    }

    function formType(value) {
        switch (value) {
            case "alumno":
                return (
                    <>
                        <SelectForm selectName="carrera" listOptions={carreras} labelValue="Carrera " />
                        <InputForm labelValue="Semestre: " inputName="semestre" inputType="number" inputPlaceholder="Válidos del 1 - 13" />
                    </>
                )
            case "docente":
            case "administrador":
                return (
                    <InputForm labelValue="Departamento: " inputName="departamento" inputPlaceholder="Ingresa el departamento al que perteneces..." />
                )
            case "guardia":
            case "intendente":
                return (
                    <InputForm labelValue="Empresa: " inputName="empresa" inputPlaceholder="Ingresa el nombre de la empresa a la que perteneces..." />
                )
            case "administrativo":
                return (
                    <InputForm labelValue="Area: " inputName="area" inputPlaceholder="Ingresa el nombre del area al que perteneces...|" />
                )
            default:
                return null
        }
    }

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <h1 className={styles.h1}>¡SaresTL, Construyendo un acceso seguro!</h1>
                    <h1 className={styles.h1}>Registrate aquí</h1>
                    <div className="profile-photo-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="black"
                            className="profile-photo"
                            id="profile-photo"
                            viewBox="0 0 16 16"
                        >
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                            <path
                                fillRule="evenodd"
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                            />
                        </svg>
                    </div>
                    <form action={submitForm} className={styles.form}>
                        <SelectForm selectName="tipo" listOptions={userTypes} labelValue="Seleccione el tipo de usuario" onFunction={handleChange} />
                        <fieldset className={styles.fieldset}>
                            <legend className={styles.legend}>Datos personales</legend>
                            <InputForm labelValue="Nombre: " inputName="name" inputPlaceholder="Ingresa tu nombre completo nombre completo..." />
                            <InputForm labelValue="Correo: " inputName="email" inputType="email" inputPlaceholder="example@domain.com" />
                            <InputForm labelValue="Telefono: " inputName="phone" inputType="tel" inputPlaceholder="XXX-XXX-XX-XX" />
                            <InputForm inputName="fecha" labelValue="Fecha de nacimiento: " inputType="date" />
                            <SelectForm selectName="genero" listOptions={generos} labelValue="Genero" />
                            <InputForm labelValue="Usuario" inputName="user" inputPlaceholder="Ingresa tu clave y/o No. de control" />
                            <InputForm labelValue="Contraseña" inputName="password" inputPlaceholder="Ingresa tu contraseña" />
                        </fieldset>
                        <fieldset className={styles.fieldset}>
                            <legend className={styles.legend}>Otros datos</legend>
                            {formType(userType)}
                        </fieldset>
                        <button type="submit" className={styles.sendButton}>Registrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}