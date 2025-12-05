export function SelectForm({ listOptions, labelValue = "example: ", selectName, onFunction=()=>{}}) {
    return (
        <>
            <label>
                {labelValue}
            </label>
            <select name={selectName} onChange={onFunction}>
                {listOptions.map((option) =>
                    <option key={option.id} value={option.value}>{option.value}</option>
                )}
            </select>
        </>
    )
}