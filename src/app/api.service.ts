import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  user_data: any;
  offlineData: any = {
    checkInStatus: false,
    checkInSync: true,
    checkInData: {

    }
  }

  constructor(public toastController: ToastController, private storage: Storage) { }

  validateInput(input) {
    if (input == null) {
      return false;
    } else if (input.trim().length <= 0) {
      return false;
    }
    return true;
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  public user_data_set(user_data) {
    this.storage.set('user_data', user_data);
    this.user_data = user_data;
  }
  public user_data_get() {
    return this.user_data;
  }

  public clearData() {
    this.storage.clear();
  }

}
