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

  public users$: Observable<User[]>;
  public users: User[];
  // user = new User();

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.users$ = this.userService.userSubject$;
    this.loadAll();
  }

  goToDetails(user: User) {
    this.router.navigate(['/detalhes', {
      foto: user.picture.large,
      fotoSmall: user.picture.thumbnail,
      nome: user.name.first + ' ' + user.name.last,
      rua: user.location.street.name,
      numero: user.location.street.number,
      cidade: user.location.city,
      estado: user.location.state,
      pais: user.location.country,
      cep: user.location.postcode,
      dataNascimento: user.dob.date,
      idade: user.dob.age,
      telefone: user.phone,
      email: user.email

    }]);
  }

  public loadAll() {
    this.userService.getAll()
      .subscribe((data) => this.users = data)
  }


}
