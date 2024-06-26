import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  title= '';
  paso= '';
  paso1: boolean = false;
  paso2: boolean = false;
  paso3: boolean = false;
  modal:boolean = false;
  documents:any;
  genders:any;
  valemail:boolean = false;
  valpin:boolean = false;
  erremail:string = '';
  errpin:string = '';
  registrado:boolean = false;

  form:any = {
    tel: '',
    tipo: '',
    ntipo: '',
    ftipo: '',
    fnac: '',
    gen: '',
    email: '',
    conemail: '',
    pin: '',
    conpin: ''
  }

  constructor( 
    private loadingCtrl: LoadingController,
    private api: ApiService,
    private noti: NotificationsService
  ) { }

  ionViewWillEnter(){
    this.modal = false;
    this.registrado = false;
    this.limpiarForm ();

    this.cargarLoader();
  }

  ngOnInit(  ) {
    
  }

  limpiarForm(){
    this.form.tel = '';
    this.form.tipo = '';
    this.form.ntipo = '';
    this.form.ftipo = '';
    this.form.fnac = '';
    this.form.email = '';
    this.form.conemail = '';
    this.form.pin = '';
    this.form.conpin = '';
  }

  async cargarLoader(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando datos, por favor espere',
      duration: 3000,
    });

    loading.present();

    this.numCelular();
  }

  getDocuments(){
    this.api.documents().subscribe((data:any)=>{
      this.documents = data;
    })
  }

  getGenders(){
    this.api.genders().subscribe((data:any)=>{
      this.genders = data;
    })
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  numCelular(){
    this.paso1 = true;
    this.paso2 = false;
    this.paso3 = false;
    this.title = 'número de celular';
    this.paso = 'assets/img/paso1.svg';
    this.getDocuments();
    this.getGenders();
  }

  datCuenta(){
    this.paso1 = false;
    this.paso2 = true;
    this.paso3 = false;
    this.paso = "assets/img/paso2.svg";
    this.title = '¿cuáles son tus datos?';
  }

  terms(){
    this.paso1 = false;
    this.paso2 = false;
    this.paso3 = true;
    this.paso = "assets/img/paso3.svg";
    this.title = 'finalizar';
  }

  registrarse() {
    this.paso1 = false;
    this.paso2 = false;
    this.paso3 = false;
    this.modal = true;
    this.registrado = false;

    console.log("telefono " + this.form.tel);
    console.log("tipo documento: " + this.form.tipo);
    console.log("número documento: " + this.form.ntipo);
    console.log("fecha expedicion documento: " + this.form.ftipo)
    console.log("fecha nacimiento: " + this.form.fnac);
    console.log("genero: " + this.form.gen);
    console.log("email: " + this.form.email);
    console.log("confirmacion email: "+ this.form.conemail);
    console.log("pin seguridad: "+ this.form.pin);
    console.log("confirmacion pin seguridad: " + this.form.conpin)

    this.noti.success('El usuario ha sido creado exitosamente');

  }

  aceptar(){
    this.paso1 = false;
    this.paso2 = false;
    this.paso3 = false;
    this.modal = false;
    this.registrado = true;
  }

  validarEmail(  ){
    let vemail = this.form.email;
    let vconf = this.form.conemail;

    if(vemail != vconf){
      this.erremail = 'Este campo no coincide con el email';
      this.valemail = false;
    }
    else {
      this.valemail = true;
      this.erremail = '';
    }
  }

  validarPin( ){
    let vpin = this.form.pin;
    let vconp = this.form.conpin;

    if(vpin != vconp){
      this.valpin = false;
      this.errpin = 'Este campo no coincide con el pin';
    }
    else {
      this.valpin = true;
      this.errpin = '';
    }
  }


}
