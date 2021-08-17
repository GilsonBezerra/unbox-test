import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  public user: User;
  public users$: Observable<User>;
  public cat$: Observable<User>;

  public foto;
  public fotoSmall;
  public nome;
  public sobrenome;
  public rua;
  public numero;
  public cidade;
  public estado;
  public pais;
  public cep;
  public dataNascimento;
  public idade;
  public telefone;
  public email;



  constructor(
    private activatedRoute : ActivatedRoute,
    private userService : UserService,
    private router : Router
  ) { 
    if(this.router.getCurrentNavigation() !== undefined) {
      const data = this.router.getCurrentNavigation();
      this.user = data.extras.state.user;
      console.log(`Resultado do state`, this.user);  

      this.foto = this.user.picture.large;
      this.fotoSmall = this.user.picture.thumbnail;
      this.nome = this.user.name.first;
      this.sobrenome = this.user.name.last;
      this.rua = this.user.location.street.name;
      this.numero = this.user.location.street.number;
      this.cidade = this.user.location.city;
      this.estado = this.user.location.state;
      this.pais = this.user.location.country;
      this.cep = this.user.location.postcode;
      this.dataNascimento = this.user.dob.date;
      this.idade = this.user.dob.age;
      this.telefone = this.user.phone;
      this.email = this.user.email;
    }
    
    }

  ngOnInit() {
    console.log(`Resultado dos dados passados ${this.nome}`);
  }
  
  goToHome() {
    this.router.navigate(['/home']);
  }


  
}
