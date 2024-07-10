import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})
export class UsuarioComponent {
  id: any;
  usuario: any;
  loading=true;

  constructor(
    private aRoute: ActivatedRoute,
    private _usuarioService: UsuarioService,
    private route: Router
  ) {
    this.id = this.aRoute.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.getUsuario();

  }

  getUsuario(): void {


    setTimeout(() => {
      this.loading = false;


    },500);
    this._usuarioService.obtenerUsuario(this.id).subscribe((data) => {
      console.log(data);
      this.usuario = data;
      console.log(this.loading);



    });

  }

  volver_dashboard(): void {
    this.route.navigate(['/dashboard']);
  }
}
