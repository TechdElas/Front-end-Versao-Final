import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { MenudoisComponent } from './menudois/menudois.component';
import { MenuexternoComponent } from './menuexterno/menuexterno.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  {path:"", redirectTo: "menu", pathMatch:"full"},

  {path:"entrar", component:EntrarComponent},
  {path:"cadastrar", component:CadastrarComponent},
  {path:"fale-conosco", component:FaleConoscoComponent},
  {path:"sobre-nos", component:SobreNosComponent},
  {path:"menu", component:MenuComponent},
  {path: "menuexterno", component:MenuexternoComponent},
  {path: "menudois", component: MenudoisComponent},
  {path: "inicio",  component: InicioComponent},
  {path: 'tema', component: TemaComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent}, 
  {path: "tema-edit/:id", component:TemaEditComponent},
  {path: "tema-delete/:id", component: TemaDeleteComponent},
  {path: "usuario-edit/:id", component:UsuarioEditComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
