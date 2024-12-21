import { Team } from "../interfaces/Team"; 
export type Tournament = {
    id: number;
    pocetak: string; 
    kraj: string;
    mestoOdrzavanja: string; 
    tipTurniraId: number;
    tipTurnira: string; 
    timovi: Team[]; 
    prvoMesto: Team | null;
    drugoMesto: Team | null;
    treceMesto: Team | null;
}