import { Component, OnInit } from '@angular/core';
import { concert } from '../model/concert.model';
import { concertService } from '../services/concert.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit{
  
  concerts!: concert[];
  searchTerm!: string;
  
  constructor(private concertService: concertService) {}

  ngOnInit(): void {
    this.concerts = this.concertService.listeconcerts();
  }
}
