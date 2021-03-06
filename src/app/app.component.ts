import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
	navigate : any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public afAuth: AngularFireAuth
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.afAuth.user.subscribe(user => {
        if(user){
         // this.router.navigate(["/tabs"]);
        } else {
          this.router.navigate(["/login"]);
        }
      }, err => {
        this.router.navigate(["/login"]);
      }, () => {
        this.splashScreen.hide();
      })
      this.statusBar.styleDefault();
    });
  }
  
   sideMenu()
  {
    this.navigate =
    [
      {
        title : "course",
        url   : "/course",
        icon  : "home"
      },
      {
        title : "chat",
        url   : "/tabs/users",
        icon  : "chatbubbles"
      },
    ]
  }
  
  
}
