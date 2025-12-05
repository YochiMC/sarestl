export function InputForm({ labelValue = "example:", inputType = "text", inputName, inputValue}) {
    return (
        <>
            <label>
                {labelValue}
            </label>
            <input name={inputName} value={inputValue} type={inputType}>
            </input>
        </>
    )
}