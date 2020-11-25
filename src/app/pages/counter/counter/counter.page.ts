import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter/counter.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

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



  constructor(private service: CounterService, public alertController: AlertController, private route: Router) {
    this.homeTeam = this.service.homeTeam;
    this.awayTeam = this.service.awayTeam;
    this.goal1 = this.service.team1Goal;
    this.goal2 = this.service.team2Goal;
  }

  ngOnInit() {
    
  }
  setAddNum(team) {
    if (team == "home") {

      this.service.setNumber(team);
      this.goal1 = this.service.team1Goal;
    } else {
      this.service.setNumber(team);
      this.goal2 = this.service.team2Goal;
    }
  }

  setSubNum(team) {
    if (team == "home") {
      if (this.service.team1Goal > 0) {
        this.service.setSubNumber(team);
        this.goal1 = this.service.team1Goal;
      }

    } else {
      if (this.service.team2Goal > 0) {
        this.service.setSubNumber(team);
        this.goal2 = this.service.team2Goal;
      }
      
    }
  }


  setOffside(team) {
    this.service.setOffside(team)
    if (team == "home") {
      console.log(this.homeTeam + " is offside")
     
    } else {
      console.log(this.awayTeam + " is offside")

    }
  }

  setYellow(team) {
    this.service.setyellow(team);
    if (team == "home") {
      console.log(this.homeTeam + " got a yellow card")
    } else {
      console.log(this.awayTeam + " got a yellow card")
    }
  }

  setRed(team) {
    this.service.setRed(team);
    if (team == "home") {
      console.log(this.homeTeam + " got a red card")
    } else {
      console.log(this.awayTeam + " got a red card")
    }
  }

  async presentAlertConfirm() {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Soccer!',
      message: 'Are you sure you want to restart',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            this.reset()
          }
        }
      ]
    });

    await alert.present();
  }

  reset() {
    this.winner();
    this.service.reset();
    this.route.navigate(['start-page'])
    this.goal1 = this.service.team1Goal;
    this.goal2 = this.service.team2Goal;
  }

  winner() {
    let win = ""
    if (this.goal1 > this.goal2) {
      win = this.homeTeam + " won the match"
    }
    else {
      if (this.goal1 < this.goal2) {
        win = this.awayTeam + " won the match"
      } else {
        if (this.goal1 == this.goal2) {
          win = "the match ended in a " + this.goal1 + "-" + this.goal2 + " draw"
        }
      }
    }
    alert(win)
  }

  toStats(){
    this.route.navigate(['stats']);
  }









}
