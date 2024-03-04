import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CrudService } from './crud.service';
import { Crud } from './crud.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CrudComponent {
  constructor(private crudservice: CrudService, private route: Router) {}

  newCrud: Crud = {
    name: '',
    rollno: '',
    dept: '',
    year: new Int16Array(4),
    mark: new Int16Array(3),
  };

  createCrud(): void {
    this.crudservice.createCrud(this.newCrud).subscribe((createdCrud) => {
      this.newCrud = {
        name: '',
        rollno: '',
        dept: '',
        year: new Int16Array(4),
        mark: new Int16Array(3),
      };
      this.route.navigateByUrl("/list")
    });
  }
}
