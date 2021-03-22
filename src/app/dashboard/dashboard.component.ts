import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  person: any;
  constructor(public auth: AuthService) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.getData();
    }, 3000);
  }

  getData() {
    this.auth.getTitle().subscribe(res => {
      res.docs.map(doc => {
        this.person = doc.data();
      })
    });
  }

}

