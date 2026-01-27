import React, { FC } from "react"
import uploadIcon from "../../assets/icon-upload.svg"
import { useAppSelector } from "../../hooks/redux";

interface FileUploadProps {
    label: string;
    text: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
   
}
const FileUpload: FC<FileUploadProps> = ({label, text, onChange}) => {
    const {fileName} = useAppSelector(state => state.formReducer.file)
    
    return (
        <div className="main-input-file-box">
            <label htmlFor="file">{label}</label>
            <div className="input-file-box">
                    <div className="input-file-icon-box"><img src={uploadIcon} alt="" /></div>
                    <p>{fileName || "Click to upload"}</p>
                    
                    <input accept=".png, .jpg, .jpeg" id="file" className="input-file" onChange={onChange} type="file" />
            </div>
                <p className="input-file-box-text">{text}</p>
        </div>
    )
}

export default FileUpload
