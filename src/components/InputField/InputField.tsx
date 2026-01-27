import React, { FC } from "react"

interface InputFiedProps {
    label: string;
    labelFor: string;
    type: string;
    value: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}
const InputField: FC<InputFiedProps> = ({ label, labelFor, type, value, placeholder, onChange }) => {
    return (
        <div className="input-box">
            <label htmlFor={labelFor}>{label}</label>
            <input placeholder={placeholder} className="input" onChange={onChange} id={labelFor} type={type} value={value} />
        </div>
    )
}

export default InputField
