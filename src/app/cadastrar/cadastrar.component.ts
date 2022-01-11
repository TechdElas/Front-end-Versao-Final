import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmarSenha: string
  tipoUsuar: string
  conviteUsuar: string
  codigo = "tech2022"

  constructor(
    private authService: AuthService,
    private rota: Router,
    private alertas: AlertasService

  ) { }

  ngOnInit() {
    window.scroll(0, 0)


  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value


  }

  tipoUsuario(event: any) {
    this.tipoUsuar = event.target.value


  }
  conviteUsuario(event: any) {
    this.conviteUsuar = event.target.value


  }

  cadastrar() {
    this.usuario.tipo = this.tipoUsuar

    if (this.usuario.senha != this.confirmarSenha) {
      alert('As senhas estão incorretas!')     
      } 

      if (this.conviteUsuar != this.codigo) {
        alert('Insira o código de acesso correto')
  
  
      }
    
    
    else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.rota.navigate(['/entrar'])
        this.alertas.showAlertSucess('Usuaria cadastrada com sucesso!')
      })
    }

  }

}
