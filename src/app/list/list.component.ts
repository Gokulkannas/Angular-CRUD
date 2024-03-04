import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { CommonModule } from '@angular/common';
import { Crud } from '../crud/crud.model';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent implements OnInit {
  constructor(private listservice: ListService, private router: Router) {}
  CrudList: Crud[] = [];

  ngOnInit(): void {
    this.getAllList();
  }

  update(id: number) {
    this.router.navigate(['update', id]);
  }

  getAllList() {
    this.listservice.getAllList().subscribe((CrudList) => {
      this.CrudList = CrudList;
    });
  }

  delete(id: number) {
    this.listservice.deleteCrud(id).subscribe();
    this.router.navigate(['list', id]);
    window.location.reload();
  }
}
