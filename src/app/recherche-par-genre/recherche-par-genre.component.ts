import { Component, OnInit } from '@angular/core';
import { concertService } from '../services/concert.service';
import { concert } from '../model/concert.model';
import { genre } from '../model/genre.model';

@Component({
  selector: 'app-recherche-par-genre',
  templateUrl: './recherche-par-genre.component.html',
  styleUrls: ['./recherche-par-genre.component.css']
})
export class RechercheParGenreComponent implements OnInit {
  idgenre!: number;
  concerts!: concert[];
  genres!: genre[];

  constructor(private concertService: concertService) {}

  ngOnInit(): void {
    this.genres = this.concertService.listegenres();
  }
  

  onChange(): void {
    const genreId = Number(this.idgenre);
  
    if (!isNaN(genreId)) {
      this.concerts = this.concertService.rechercherParGenre(genreId);
    } else {
      console.error("Invalid genre ID:", this.idgenre);
    }
  }
}
