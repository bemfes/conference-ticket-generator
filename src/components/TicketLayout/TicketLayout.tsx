import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import Button from "../Button/Button"
import { resetValues } from "../../store/reducers/FormSlice"
import Ticket from "../Ticket/Ticket"

const TicketLayout: FC = () => {
    const {name, email, username} = useAppSelector(state => state.formReducer)
    const {fileUrl} = useAppSelector(state => state.formReducer.file)
    
    const dispatch = useAppDispatch()
    function onClickResetBtn(): void {
        dispatch(resetValues())
    }
    const id = Math.floor(Math.random() * 90000) + 10000
    return (
        <>
           <h1>Congrats, <span className="text-gradient">{name}</span>! <br /> Your ticket is ready!</h1> 
           <p className="text">We've emailed your ticket to <br /> <span className="red-text">{email}</span> and will send updates in <br /> the run to the event</p>
           <Ticket name={name} username={username} fileUrl={fileUrl} id={id}/>
           <Button onClick={onClickResetBtn}>Reset</Button>
        </>
    )
}

export default TicketLayout

