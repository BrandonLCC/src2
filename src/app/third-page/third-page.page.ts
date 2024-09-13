import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.page.html',
  styleUrls: ['./third-page.page.scss'],
})
export class ThirdPagePage implements OnInit {
  username: string = '';
  mensaje: string = '';
  inputExtractName: string ='';

  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
      // Acceder al estado pasado desde la primera página
      const navigation = this.router.getCurrentNavigation();
      if (navigation && navigation.extras.state) {
        this.username = navigation.extras.state['username'];
      }
  }

  //Si da errores al ingresar datos en la tercera pagina, eliminar esto
  //Esto lo que hace es borrar el nombre y mensaje cuado cambiamos de pagina
  ionViewDidLeave() {
    this.mensaje = '';
    console.log("Mensaje borrado al cambiar de pagina");

  }

  // Función para redirigir a la página de ingreso de usuario y mostrar ventana emergente con mensaje 
  // agregar condicional IF a futuro
  async recoverPassword() {
    //Simulacion de condicion ya que tiene un problema
    if ( this.inputExtractName === this.username && this.username.length > 0) {
    const alert = await this.alertController.create({
      header: '¡Excelente!',
      subHeader: 'Se a enviado un codigo de verificacion a tu correo',
               //Para simular que recuperamos la cotraseña se puede mostrar aqui

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Alert confirmed');
            this.router.navigateByUrl('/first-page'); // Redirige a la página de ingreso  
          },
        },
      ],
    });

    await alert.present();
  }
  
  else {
    this.mensaje='El usuario que has ingresado no existe, porfavor vuelve a intentarlo'

  }

  }
  // Función para volver a la página anterior
  goBack() {
    this.router.navigateByUrl('/first-page');  // Redirige a first-page
  }
}
