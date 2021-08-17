import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users: User[];

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadAll();
  }

  goToDetails(user: User) {
    this.router.navigate(['/detalhes'], {   
      state: { user: user },
      replaceUrl: true
    });
  }

  public loadAll() {
    this.userService.getAll()
      .subscribe((data) => this.users = data)
  }


}
