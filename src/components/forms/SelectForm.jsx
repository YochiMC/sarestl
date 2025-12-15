import styles from '../../assets/styles/Forms.module.css'

export function SelectForm({ listOptions, labelValue = "example: ", selectName, onFunction = () => { } }) {
    return (
        <>
            <label htmlFor={selectName} className={styles.etiquetaSelector}>
                {labelValue}
                <select name={selectName} onChange={onFunction} id={selectName} className={styles.selector}>
                    {listOptions.map((option) =>
                        <option key={option.id} value={option.value}>{option.value}</option>
                    )}
                </select>
            </label>

        </>
    )
}