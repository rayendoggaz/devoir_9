import { genre } from "./genre.model";

export class concert{
    idconcert! : number;
    nomconcert? : string;
    prixconcert? : number;
    dateCreation? : Date;
    genre! : genre;
}