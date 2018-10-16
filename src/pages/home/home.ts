import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdMobFree, AdMobFreeBannerConfig, AdMobFreeInterstitialConfig } from '@ionic-native/admob-free';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
    constructor(public navCtrl: NavController, public admob: AdMobFree) {
 
    }
 
    showBanner() {
 
        let bannerConfig: AdMobFreeBannerConfig = {
            isTesting: true, // Remove in production
            autoShow: true ,
            id: 'ca-app-pub-3272659636681068/3920220175' ,
        };
 
        this.admob.banner.config(bannerConfig);
 
        this.admob.banner.prepare().then(() => {
            // success
        }).catch(e => console.log(e));
 
    }
 
    launchInterstitial() {
 
        let interstitialConfig: AdMobFreeInterstitialConfig = {
            isTesting: true, // Remove in production
            autoShow: true ,
            id: 'ca-app-pub-3272659636681068/3920220175' ,
        };
 
        this.admob.interstitial.config(interstitialConfig);
 
        this.admob.interstitial.prepare().then(() => {
            // success
        });
 
    }
 
}