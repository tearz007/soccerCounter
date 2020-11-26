import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.page.html',
  styleUrls: ['./counter.page.scss'],
})
export class CounterPage implements OnInit {

  homeTeam
  awayTeam
  goal
  constructor(private service: CounterService) {
    this.homeTeam = this.service.homeTeam;
    this.awayTeam = this.service.awayTeam;
  }

  ngOnInit() {
  }

  setGoal(team) {

    if (team == "home") {
      this.service.team1Goal = this.service.team1Goal + 1
    } else {
      this.service.team2Goal = this.service.team2Goal + 1
    }
   let val=this.service.team1.goal
    console.log(val)
  }

}
