import { Component } from '@angular/core';
import { concertService } from '../services/concert.service';
import { ActivatedRoute,Router } from '@angular/router';
import { concert } from '../model/concert.model';
import { genre } from '../model/genre.model';

@Component({
  selector: 'app-update-concert',
  templateUrl: './update-concert.component.html',
  styleUrls: []
})
export class UpdateconcertComponent {

  currentconcert = new concert();
  genres! : genre[];
  updatedgenreId! : number;


  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private concertService: concertService) { }


    ngOnInit() {
      this.genres = this.concertService.listegenres();
      this.currentconcert =
      this.concertService.consulterconcert(this.activatedRoute.snapshot.params['id']);
      this.updatedgenreId=this.currentconcert.genre.idgenre;
      }

      updateconcert()
      { this.currentconcert.genre=this.concertService.consultergenre(this.updatedgenreId);
        this.concertService.updateconcert(this.currentconcert);
        this.router.navigate(['concerts']);
      }
}
