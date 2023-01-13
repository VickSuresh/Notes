import { useQuery, UseQueryResult } from "react-query";
import { fetchNotes } from "../api/note";

export interface INote {
    title: string,
    content: string
}

export const useNotes = (): UseQueryResult<INote[]> => useQuery('allNotes', fetchNotes); 