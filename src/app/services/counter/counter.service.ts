import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  homeTeam;
  awayTeam;
  team1Goal = 0;
  team2Goal = 0;

  team1Offside = 0
  team2Offside = 0

  team1Yellow = 0
  team2yellow = 0

  team1Red = 0
  team2Red = 0
  constructor() { }

  setTeams(home, away) {
    this.homeTeam = home;
    this.awayTeam = away;
  }

  setNumber(team) {
    if (team == "home") {
      this.team1Goal = this.team1Goal + 1;
    } else {
      this.team2Goal = this.team2Goal + 1;
    }
  }
  setSubNumber(team) {
    if (team == "home") {
      this.team1Goal = this.team1Goal - 1;
    } else {
      this.team2Goal = this.team2Goal - 1;
    }
  }

  setOffside(team) {
    if (team == "home") {
      this.team1Offside = this.team1Offside + 1;
    } else {
      this.team2Offside = this.team2Offside + 1;
    }
  }

  setyellow(team) {
    if (team == "home") {
      this.team1Yellow = this.team1Yellow + 1;
    } else {
      this.team2yellow = this.team2yellow + 1;
    }
  }

  setRed(team) {
    if (team == "home") {
      this.team1Red = this.team1Red + 1;
    } else {
      this.team2Red = this.team2Red + 1;
    }
  }

  reset() {
    this.homeTeam = "";
    this.awayTeam = "";

    this.team1Goal = 0;
    this.team2Goal = 0;

    this.team1Offside = 0;
    this.team2Offside = 0;

    this.team1Yellow = 0;
    this.team2yellow = 0;

    this.team1Red = 0;
    this.team2Red = 0;
  }


}
