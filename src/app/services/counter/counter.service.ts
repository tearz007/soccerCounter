import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  homeTeam;
  awayTeam;

  team1Yellw=0
  team1Red=0
  team1Offside=0
  team1Goal=0
  team2Yellw=0
  team2Red=0
  team2Offside=0
  team2Goal=0

  team1={yellow:this.team1Yellw,red:this.team1Red,offside:this.team1Offside,goal:this.team1Goal}
  team2={yellow:this.team2Yellw,red:this.team2Red,offside:this.team2Offside,goal:this.team2Goal}
  constructor() { }

  setTeams(home, away) {
    this.homeTeam = home;
    this.awayTeam = away;
  }

 getTeam1(){
   return this.team1;
 }
 getTeam2(){
  return this.team2;
 }



}
