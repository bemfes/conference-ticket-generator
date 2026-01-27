import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface File {
    fileName: string;
    fileUrl: string;
}

interface FormState {
    name: string;
    email: string;
    username: string;
    file: File;
    ticketReady: boolean;
    
}

const initialState: FormState = {
    name: '',
    email: '',
    username: '',
    file: {
        fileName: '',
        fileUrl: '',
    },
    ticketReady: false
}

interface changeFileAction {
    fileUrl: string;
    fileName: string;
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        changeFile(state, action: PayloadAction<changeFileAction>) {
            state.file.fileUrl = action.payload.fileUrl
            state.file.fileName = action.payload.fileName
            
        },
        changeName(state, action: PayloadAction<string>) {
            state.name = action.payload
        },
        changeEmail(state, action: PayloadAction<string>) {
            state.email = action.payload
        },
        changeUsername(state, action: PayloadAction<string>) {
            state.username = action.payload
        },
        showTicket(state) {
            state.ticketReady = true
        },
        resetValues(state) {
            state.name = ''
            state.email = ''
            state.username = ''
            state.file.fileName = ''
            state.file.fileUrl = ''
            state.ticketReady = false
        }
    }
})

export default formSlice.reducer

export const {changeName, changeEmail, changeUsername, resetValues, showTicket, changeFile} = formSlice.actions