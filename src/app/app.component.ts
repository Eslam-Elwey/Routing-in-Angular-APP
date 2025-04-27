import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CustomDirective } from './Directives/custom.directive';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule,CustomDirective,HomeComponent,RouterModule,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo_project';
  inputValue: string = '';
}
