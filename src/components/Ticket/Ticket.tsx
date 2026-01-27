import { FC } from "react"
import logo from "../../assets/logo-full.svg"
interface TicketProps {
    name: string;
    username: string;
    fileUrl: string;
    id: number;
}

const Ticket: FC<TicketProps> = ({name, username, fileUrl, id}) => {
    
    return (
        <div className="ticket-container">
            <div className="ticket">
                <p className="ticket-id">#{id}</p>
                <div className="ticket-top">
                    <img className="ticket-logo" src={logo} alt="" />
                    <p className="ticket-data">Jan 31, 2025 / Austin, Texas</p>
                </div>
                <div className="ticket-bottom">
                    <img className="ticket-photo" src={fileUrl} alt="" />
                    <div className="ticket-desc">
                        <p className="ticket-name">{name}</p>
                        <p className="ticket-username">{username}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ticket
