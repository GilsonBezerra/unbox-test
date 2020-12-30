import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
    private route: ActivatedRoute,
    private userService: UserService) { 
    this.foto = this.route.snapshot.paramMap.get('foto');
    this.fotoSmall = this.route.snapshot.paramMap.get('fotoSmall');
    this.nome = this.route.snapshot.paramMap.get('nome');
    this.rua = this.route.snapshot.paramMap.get('rua');
    this.numero = this.route.snapshot.paramMap.get('numero');
    this.cidade = this.route.snapshot.paramMap.get('cidade');
    this.estado = this.route.snapshot.paramMap.get('estado');
    this.pais = this.route.snapshot.paramMap.get('pais');
    this.cep = this.route.snapshot.paramMap.get('cep');
    this.dataNascimento = this.route.snapshot.paramMap.get('dataNascimento');
    this.idade = this.route.snapshot.paramMap.get('idade');
    this.telefone = this.route.snapshot.paramMap.get('telefone');
    this.email = this.route.snapshot.paramMap.get('email');
    
    }

  ngOnInit() {
    console.log(`Resultado dos dados passados ${this.nome}`);
    

  }
  



  
}
