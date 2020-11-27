import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/services/counter/counter.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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

  match



  constructor(private service: CounterService, public alertController: AlertController, private route: Router,public toastController: ToastController) {
    this.homeTeam = this.service.homeTeam;
    this.awayTeam = this.service.awayTeam;
    this.goal1 = this.service.team1Goal;
    this.goal2 = this.service.team2Goal;
    this.match=this.service. getMatch()
  }



  ngOnInit() {  
  }


  test(){
    let mat=this.service. getMatch()
    console.log(this.service.home.goal)
   // console.log(mat[0].goal)
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000
    });
    toast.present();
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
        this.presentToast(this.homeTeam + " scored a goal")
        this.goal1 = this.service.team1Goal;
      }

    } else {
      if (this.service.team2Goal > 0) {
        this.service.setSubNumber(team);
        this.goal2 = this.service.team2Goal;
        this.presentToast(this.awayTeam + " scored a goal")
      }
      
    }
  }


  setOffside(team) {
    this.service.setOffside(team)
    if (team == "home") {
      console.log(this.homeTeam + " is offside")
      this.presentToast(this.homeTeam + " is offside")
     
    } else {
      console.log(this.awayTeam + " is offside")
      this.presentToast(this.awayTeam + " is offside")
    }
  }

  setYellow(team) {
    this.service.setyellow(team);
    if (team == "home") {
      console.log(this.homeTeam + " got a yellow card")
      this.presentToast(this.homeTeam + " recived a yellow card")
    } else {
      console.log(this.awayTeam + " got a yellow card")
      this.presentToast(this.awayTeam + " recived a yellow card")
    }
  }

  setRed(team) {
    this.service.setRed(team);
    if (team == "home") {
      console.log(this.homeTeam + " got a red card")
      this.presentToast(this.homeTeam + " recived a red card")
    } else {
      console.log(this.awayTeam + " got a red card")
      this.presentToast(this.awayTeam + " recived a red card")
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
