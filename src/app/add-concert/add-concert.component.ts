import { Component } from '@angular/core';
import { concert } from '../model/concert.model';
import { concertService } from '../services/concert.service';
import { genre } from '../model/genre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-concert',
  templateUrl: './add-concert.component.html',
  styleUrls: ['./add-concert.component.css']
})

export class AddconcertComponent {
  newconcert = new concert();

  genres! : genre[];

  newIdgenre! : number;

  newgenre! : genre;

  ngOnInit() {
    this.genres = this.concertService.listegenres();
  }

  message!: string;

  constructor(private concertService: concertService , private router :Router,) { }

  addconcert() {
    this.newgenre = this.concertService.consultergenre(this.newIdgenre);
    this.newconcert.genre = this.newgenre;
    this.concertService.ajouterconcert(this.newconcert);
    this.router.navigate(['concerts']);
    }
}
