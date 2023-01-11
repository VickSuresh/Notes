import { useQuery, UseQueryResult } from "react-query";
import { fetchNotes } from "../api/note";

export const useNotes = (): UseQueryResult => useQuery('allNotes', fetchNotes); 