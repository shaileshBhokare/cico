import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ApiService } from '../api.service'
import { PostProvider } from '../../providers/post-provider'
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = 'abc@cico.com';
  password: string = 'abc';

  constructor(private storage: Storage,
    public navCtrl: NavController,
    public apiService: ApiService,
    public postProvider: PostProvider) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.apiService.clearData();
  }


  login() {

    if (!this.apiService.validateInput(this.email)) {
      this.apiService.presentToast("Please enter valid email")
      return
    }
    if (!this.apiService.validateInput(this.password)) {
      this.apiService.presentToast("Please enter valid password")
      return
    } else {


      let formData = {
        "email": this.email,
        "password": this.password
      }

      this.postProvider.postData(formData, 'user/authenticate').subscribe((data) => {

        if (data.code == 1) {
          data.offlineData = this.apiService.offlineData;
          this.apiService.user_data_set(data);
          this.navCtrl.navigateForward("/dashboard", { skipLocationChange: true });
        } else {
          this.apiService.presentToast(data.message)
        }

        console.log(JSON.stringify(data))
      });


    }



  }

}
