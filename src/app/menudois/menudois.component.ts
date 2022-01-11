import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menudois',
  templateUrl: './menudois.component.html',
  styleUrls: ['./menudois.component.css']
})
export class MenudoisComponent implements OnInit {
  
  nome = environment.nome
  foto = environment.foto
  id = environment.id

  constructor(
    private router: Router
  ) { }

  ngOnInit(){

    if(environment.token == ''){
      this.router.navigate(['/menu'])
    }

  }


    sair(){

  
      this.router.navigate(['/menu'])
      environment.token = ""
      environment.nome = ""
      environment.foto = ""
      environment.id = 0
    }
  
  }



