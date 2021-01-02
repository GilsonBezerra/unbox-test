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

  // public user: User[];
  public users$: Observable<User>;
  public cat$: Observable<User>;

  public foto;
  public fotoSmall;
  public nome;
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
    this.foto = this.activatedRoute.snapshot.paramMap.get('foto');
    this.fotoSmall = this.activatedRoute.snapshot.paramMap.get('fotoSmall');
    this.nome = this.activatedRoute.snapshot.paramMap.get('nome');
    this.rua = this.activatedRoute.snapshot.paramMap.get('rua');
    this.numero = this.activatedRoute.snapshot.paramMap.get('numero');
    this.cidade = this.activatedRoute.snapshot.paramMap.get('cidade');
    this.estado = this.activatedRoute.snapshot.paramMap.get('estado');
    this.pais = this.activatedRoute.snapshot.paramMap.get('pais');
    this.cep = this.activatedRoute.snapshot.paramMap.get('cep');
    this.dataNascimento = this.activatedRoute.snapshot.paramMap.get('dataNascimento');
    this.idade = this.activatedRoute.snapshot.paramMap.get('idade');
    this.telefone = this.activatedRoute.snapshot.paramMap.get('telefone');
    this.email = this.activatedRoute.snapshot.paramMap.get('email');
    
    }

  ngOnInit() {
    console.log(`Resultado dos dados passados ${this.nome}`);
  }
  
  goToHome() {
    this.router.navigate(['/home']);
  }


  
}
