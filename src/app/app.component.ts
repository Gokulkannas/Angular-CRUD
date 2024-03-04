import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateComponent } from './update/update.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,NavbarComponent,UpdateComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'StudentInfo';

}
