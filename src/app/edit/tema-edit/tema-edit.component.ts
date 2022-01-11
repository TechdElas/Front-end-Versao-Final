import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { AlertasService } from 'src/app/service/alertas.service';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  tema: Tema = new Tema()

  constructor(
    private router: Router,
    private temaService: TemaService,
    private route : ActivatedRoute,
    private alertas: AlertasService
    ) { }

  ngOnInit() {

    if(environment.token == ''){
      this.router.navigate(['/menu'])


    }
    if(environment.tipo != 'adm'){
      this.alertas.showAlertInfo('Você precisa ser adm para acessar essa rota')
      this.router.navigate(['/menu'])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdTema(id)
  }


  findByIdTema(id : number){
    this.temaService.getByIdTema(id).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  atualizar(){
    this.temaService.postTema(this.tema).subscribe((resp: Tema)=> {
      this.alertas.showAlertSucess("Tema atualizado com sucesso!")
      this.router.navigate(['/tema'])
    })
  }


}

