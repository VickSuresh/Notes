import { AutoFixOffSharp } from "@mui/icons-material";
import { AxiosResponse } from "axios";
import axios from "./common";

export const fetchNotes = async (): Promise<AxiosResponse> => {
    const { data } = await axios.get('/notes/getNotes');
    return data;
}

export const createNote = async (body: any): Promise<AxiosResponse> => {
    const { data } = await axios.post('/notes/createNote', body);
    return data;
}

export const updateNote = async (body: any): Promise<AxiosResponse> => {
    const { data } = await axios.put('/notes/updateNote', body);
    return data;
}

export const deleteNote = async (title: string | undefined): Promise<AxiosResponse> => {
    const { data } = await axios.delete(`/notes/deleteNote/${title}`);
    return data;
}

