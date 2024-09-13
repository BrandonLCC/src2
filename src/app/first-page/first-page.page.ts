import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.page.html',
  styleUrls: ['./first-page.page.scss'],
})

export class FirstPagePage implements OnInit {
  username: string = ''; // Declara la propiedad username
  password: string = ''; // Declaro la propiedad password
  inputValidoName: boolean = true; //Esto ayudara para saber que input no cumple con la validacion
  inputValidoPass: boolean = true; //Esto ayudara para saber que input no cumple con la validacion
  MensajeValidacion: boolean = true;
  mensaje: string = ''; //Mensaje de la etiqueta p

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {

  }
  ionViewDidLeave() {
    this.mensaje = '';
    console.log("Limpiando datos al cambiar de pagina");
    this.inputValidoName = true
    this.inputValidoPass = true
  }

  //array de caracteres de mayusculas y minusculas
  DatosValidos = /^[A-Za-z]+$/;

  gotoSecondPage() {
    //Usamos la funcion test para la restriccion de caracteres especiales, sus estado devuelve true o false.
    this.inputValidoName = this.DatosValidos.test(this.username);
    
    // Navegar a la segunda página con el nombre de usuario
    //Aplicamos una condicion para que los datos ingresados sean correctos
    if (this.inputValidoName && this.username.length >= 5 && this.password.length >= 10) {
      this.router.navigateByUrl('/second-page', { state: { username: this.username } });
      this.inputValidoName = true;
    } 
    else if (this.username.length < 5) {
      console.log(this.username.length);
      this.mensaje = 'El nombre ingresado no es valido.';
      this.inputValidoName = this.username.length > 5;
    } 
    else if (!this.inputValidoName) {
      this.mensaje = 'No se permiten caracteres especiales.';
    } 
    else if (this.password.length < 10) {
      console.log(this.password.length);
      this.mensaje = 'La contraseña es demasiado corta o no ha sido ingresada.';
      this.inputValidoPass = this.password.length > 10;
    } 
    else {
      console.log("error");
      this.mensaje = 'Error en la validación.';
    }
  
  }

   // Navegación a ThirdPage
   gotoThirdPage() {
    this.inputValidoName = this.DatosValidos.test(this.username);
    this.router.navigateByUrl('/third-page', { state: { username: this.username } });

    } 
  


}
