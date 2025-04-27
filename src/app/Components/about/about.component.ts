import { Component } from '@angular/core';
import { CustomDirective } from '../../Directives/custom.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CustomDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
