import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter/counter.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {
 home={}
 away={}
  constructor(private service: CounterService) { 

    this.home={name:this.service.homeTeam,goal:this.service.team1Goal,offside:this.service.team1Offside,yellow:this.service.team1Yellow,red:this.service.team1Red}
    this.away={name:this.service.awayTeam,goal:this.service.team2Goal,offside:this.service.team2Offside,yellow:this.service.team2yellow,red:this.service.team2Red}
  }

  ngOnInit() {
  }
 


}
