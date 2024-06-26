import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor( private toastController: ToastController ) { }

  async info( message:any ) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2600,
      position: 'bottom',
      color: 'primary'
    });

    await toast.present();
  }

  async warning( message:any ) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2600,
      position: 'bottom',
      color: 'warning'
    });

    await toast.present();
  }

  async danger( message:any ) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2600,
      position: 'bottom',
      color: 'danger'
    });

    await toast.present();
  }

  async success( message:any ) {
    const toast = await this.toastController.create({
      message:  message,
      duration: 2600,
      position: 'bottom',
      color: 'success'
    });

    await toast.present();
  }
}
