import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CounterService } from 'src/app/services/counter/counter.service';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.page.html',
  styleUrls: ['./start-page.page.scss'],
})
export class StartPagePage implements OnInit {
  homeTeam
  awayTeam
  constructor(private router: Router, private serv: CounterService) { }

  ngOnInit() {
  }
  toCounter() {
    this.router.navigate(['counter'])
    this.serv.setTeams(this.homeTeam,this.awayTeam);
  }

}