import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  homeTeam;
  awayTeam;
  team1Goal=0;
  team2Goal=0;

  team1Offside=0
  team2Offside=0
  constructor() { }

  setTeams(home, away) {
    this.homeTeam = home;
    this.awayTeam = away;
  }
  
  setNumber(team){ 
    if (team=="home") {
      this. team1Goal = this. team1Goal +1;
    }else{
      this. team2Goal = this. team2Goal +1;
    }
  }

  setOffside(team){ 
    if (team=="home") {
      this.team1Offside = this.team1Offside +1;
    }else{
      this.team2Offside = this.team2Offside +1;
    }
  }


}
