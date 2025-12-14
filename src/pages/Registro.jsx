import { useState } from "react"
import { InputForm } from "../components/forms/InputForm"
import { SelectForm } from "../components/forms/SelectForm"
import styles from '../assets/styles/Registro.module.css'

export function Registro() {

    const carreras = [{ "id": 1, "value": "Sistemas" }, { "id": 2, "value": "Conta" }]
    const generos = [{ "id": 1, "value": "Masculino" }, { "id": 2, "value": "Femenino" }]
    const userTypes = [{ "id": 1, "value": "alumno" }, { "id": 2, "value": "docente" }, { "id": 3, "value": "administrador" }, { "id": 4, "value": "administrativo" }, { "id": 5, "value": "intendente" }, { "id": 6, "value": "guardia" }]

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
                        <SelectForm selectName="carrera" listOptions={carreras} labelValue="Carrera: " />
                        <InputForm labelValue="Semestre: " inputName="semestre" />
                    </>
                )
            case "docente":
            case "administrador":
                return (
                    <InputForm labelValue="Departamento: " inputName="departamento" />
                )
            case "guardia":
            case "intendente":
                return (
                    <InputForm labelValue="Empresa: " inputName="empresa" />
                )
            case "administrativo":
                return (
                    <InputForm labelValue="Area: " inputName="area" />
                )
            default:
                return null
        }
    }

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.container}>
                    <h1 className={styles.h1}>Registrate aquí</h1>
                    <form action={submitForm} className={styles.form}>
                        <SelectForm selectName="tipo" listOptions={userTypes} labelValue="Seleccione el tipo de usuario" onFunction={handleChange} />
                        <h2>Datos personales</h2>
                        <InputForm labelValue="Nombre: " inputName="name" />
                        <InputForm labelValue="Correo: " inputName="email" inputType="email" />
                        <InputForm labelValue="Telefono: " inputName="phone" inputType="tel" />
                        <SelectForm selectName="genero" listOptions={generos} labelValue="Generos: " />
                        <InputForm inputName="fecha" labelValue="Fecha de nacimiento: " inputType="date" />
                        {formType(userType)}
                        <button type="submit">Registrar</button>
                    </form>
                </div>
            </div>
        </>
    )
}