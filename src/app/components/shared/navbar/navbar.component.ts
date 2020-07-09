import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { debug } from 'console';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getEmployees(id: string, typecontract: string) {
    if (id.length > 0) {
      this.router.navigate(['/filter', id, typecontract]);
    } else {
      this.router.navigate(['/filter', 0, typecontract]);
    }
  }
}
