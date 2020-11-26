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
  goal1
  goal2
  constructor(private service: CounterService) {
    this.homeTeam = this.service.homeTeam;
    this.awayTeam = this.service.awayTeam;
    this.goal1 = this.service.team1Goal;
    this.goal2 = this.service.team2Goal;
  }

  ngOnInit() {
  }
  setNum(team) {
    if (team == "home") {

      this.service.setNumber(team);
      console.log("Goal for "+this.homeTeam)
      this.goal1 = this.service.team1Goal;
    } else {
      this.service.setNumber(team);
      console.log("Goal for "+this.awayTeam)
      this.goal2 = this.service.team2Goal;
    }
  }
  setOffside(team) {
    if (team == "home") {
      console.log(this.homeTeam +" is offside")
     
    } else {
      console.log(this.awayTeam +" is offside")
     
    }
  }

  setYellow(team) {
    if (team == "home") {
      console.log(this.homeTeam +" got a yellow card") 
    } else {
      console.log(this.awayTeam +" got a yellow card")  
    }
  }

  setRed(team) {
    if (team == "home") {
      console.log(this.homeTeam +" got a red card")
    } else {
      console.log(this.awayTeam +" got a red card")
    }
  }

  
}
