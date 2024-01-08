import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";


@Component({
    selector: 'app-root',
    standalone: true,
    template: `

  <app-header/>
  <router-outlet></router-outlet>
  <app-footer/>
  

  `,
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent]
})
export class AppComponent {
  title = 'front-chamado';
}
