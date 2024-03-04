import { Component, OnInit } from '@angular/core';
import { UpdateService } from './update.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Crud } from '../crud/crud.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent implements OnInit {
  constructor(
    private updateservice: UpdateService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  id: number = this.route.snapshot.params['id'];
  crud!: Crud;

  ngOnInit(): void {
    this.getById();
  }

  getById() {
    this.updateservice.getById(this.id).subscribe((result: any) => {
      console.log(result);
      this.crud = result;
    });
  }

  updateCrud(id?: number) {
    this.updateservice.updateCrud(this.id, this.crud).subscribe();
    this.router.navigate(['list']);
  }
}
