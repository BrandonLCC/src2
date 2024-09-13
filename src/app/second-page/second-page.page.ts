import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
})
export class SecondPagePage implements OnInit {
  username: string = ''; // Declara la propiedad username
  constructor(private router: Router) { }


  ngOnInit() {
    // Acceder al estado pasado desde la primera página
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.username = navigation.extras.state['username'];
    }
  }

}
