import { FC, useState } from "react"
import FileUpload from "../FileUpload/FileUpload"
import InputField from "../InputField/InputField"
import Button from "../Button/Button"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { changeEmail, changeFile, changeName, changeUsername, showTicket } from "../../store/reducers/FormSlice"
import Modal from "../Modal/Modal"

const FormLayout: FC = () => {
    const [modal, setModal] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const {name, email, username} = useAppSelector(state => state.formReducer)
    const {fileUrl} = useAppSelector(state => state.formReducer.file)
    function onClickBtnGenerate(): void {
        dispatch(showTicket())
    }
    function onChangeNameInput(e: React.ChangeEvent<HTMLInputElement>): void {
        dispatch(changeName(e.target.value))
    }
    function onChangeFileInput(e: React.ChangeEvent<HTMLInputElement>): void {
        const file = e.target.files?.[0];
        if (file && file.size < 500 * 1024) {
        const imageUrl = URL.createObjectURL(file);
        const fileName = file.name
        dispatch(changeFile({fileUrl: imageUrl, fileName: fileName})) 
    } else {
        setModal(true)
    }
    }
    function onChangeEmailInput(e: React.ChangeEvent<HTMLInputElement>): void {
        dispatch(changeEmail(e.target.value))
    }
    function onChangeUsernameInput(e: React.ChangeEvent<HTMLInputElement>): void {
        dispatch(changeUsername(e.target.value))
    }
    function onClickModalBtn(): void {
        setModal(false)
    }
    return (
        <>
           {modal && <Modal onClick={onClickModalBtn}>The file size has exceeded the set limit.</Modal>}
           <h1>Your Journey to Coding Conf <br /> 2025 Starts Here!</h1> 
           <p className="text">Secure your spot at the next year's biggest coding conference.</p>
           <form className="form">
               <FileUpload onChange={onChangeFileInput} label="Upload Avatar" text="Upload your photo (JPG or PNG, max-size: 500KB)"/>
               <InputField placeholder="Kristof Svanteson" onChange={onChangeNameInput} type="text" label="Full Name" value={name} labelFor="name"/>
               <InputField placeholder="kristof1995@gamil.ru" onChange={onChangeEmailInput} type="email" label="Email Adress" value={email} labelFor="email"/>
               <InputField placeholder="@username" onChange={onChangeUsernameInput} type="text" label="GitHab UserName" value={username} labelFor="username"/>
               <Button disabled={fileUrl && name && email && username ? false : true} onClick={onClickBtnGenerate}>Generate My Ticket</Button>
           </form>
        </>
    )
}

export default FormLayout
