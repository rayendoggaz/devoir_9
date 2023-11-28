import { Component } from '@angular/core';
import { concert } from '../model/concert.model';
import { concertService } from '../services/concert.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-concerts',
  templateUrl: './concerts.component.html',
  styleUrls: ['./concerts.component.css']
})
export class concertsComponent {
updateconcert(_t13: concert) {
throw new Error('Method not implemented.');
}
  

  concerts : concert[];

  constructor(private concertService: concertService, public authService: AuthService) {
    this.concerts = concertService.listeconcerts();
  }

  supprimerconcert(p: concert)
  {
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?");

    if (conf)
       this.concertService.supprimerconcert(p);
  }
}
