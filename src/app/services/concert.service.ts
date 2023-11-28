import { Injectable } from '@angular/core';
import { concert } from '../model/concert.model';
import { genre } from '../model/genre.model';

@Injectable({
  providedIn: 'root'
})
export class concertService {

  concerts : concert[];
  concert! : concert;
  genres! : genre[];

  constructor() { 

    this.genres = [ {idgenre : 1, nomgenre : "pop music"},
                    {idgenre : 2, nomgenre : "Folk music"},
                    {idgenre : 3, nomgenre : "Alternative Rock"},
                    {idgenre : 4, nomgenre : "HIP HOP"},
                    {idgenre : 5, nomgenre : "electric pop"}];

    this.concerts = [
      { idconcert: 1, nomconcert: "THE ERAS TOUR", prixconcert: 800, dateCreation: new Date("01/14/2022"), genre : {idgenre : 1, nomgenre : "pop"}}, 
      { idconcert: 2, nomconcert: "GUTS TOUR", prixconcert: 450, dateCreation: new Date("12/17/2021"), genre : {idgenre : 5, nomgenre : "electric pop"} },
      { idconcert: 3, nomconcert: "HTE World Tour", prixconcert: 500, dateCreation: new Date("02/20/2020"), genre : {idgenre : 3, nomgenre : "Alternative Rock"} }
    ];
  }

  listeconcerts():concert[] {
    return this.concerts;
  }
  
  ajouterconcert( prod: concert){
    this.concerts.push(prod);
  }

  supprimerconcert( prod: concert){
    //supprimer le concert prod du tableau concerts
    const index = this.concerts.indexOf(prod, 0);
    if (index > -1) {
    this.concerts.splice(index, 1);
    }
    //ou Bien
    /* this.concerts.forEach((cur, index) => {
    if(prod.idconcert === cur.idconcert) {
    this.concerts.splice(index, 1);
    }
    }); */
    }


    consulterconcert(id:number): concert{
      return this.concerts.find(p => p.idconcert == id)!;
          
      }

      trierconcerts(){
        this.concerts = this.concerts.sort((n1,n2) => {
          if (n1.idconcert > n2.idconcert) {
              return 1;
          }
         if (n1.idconcert < n2.idconcert) {
              return -1;
          }
        return 0;
      });
      }
  

      updateconcert(p:concert)
      {
      // console.log(p);
        this.supprimerconcert(p);
        this.ajouterconcert(p);
        this.trierconcerts();
      }

      listegenres():genre[] {
        return this.genres;
      }
        
      consultergenre(id:number): genre{
        return this.genres.find(genre => genre.idgenre == id)!;
      }




      rechercherParGenre(idGenre: number): concert[] {
        console.log("Selected genre ID (Type):", typeof idGenre); 
      
        const filteredConcerts = this.concerts.filter(concert => {
          console.log("Concert with Genre:", concert);
          return concert.genre.idgenre === idGenre;
        });
        console.log("Filtered Concerts:", filteredConcerts);
      
        if (filteredConcerts.length === 0) {
          console.log("Aucun concert trouvé");
        }
      
        return filteredConcerts;
      }  
}