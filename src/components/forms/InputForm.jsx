import styles from '../../assets/styles/Forms.module.css';
export function InputForm({ labelValue = "example:", inputType = "text", inputName, inputValue, inputPlaceholder = "example" }) {
    return (
        <>
            <label htmlFor={inputName} className={styles.etiquetaInput}>
                {labelValue}
                <input name={inputName} value={inputValue} type={inputType} id={inputName} placeholder={inputPlaceholder} className={styles.input}/>
            </label>
        </>
    )
}