import { EmailValidator } from "@angular/forms"
import { Postagem } from "./Postagem"

export class Usuario{
public idUsuario: number
public nome: string
public usuario: EmailValidator
public senha: string
public foto: string
public tipo: string
public postagem: Postagem[]
}
