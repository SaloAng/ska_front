import { Component, OnInit } from '@angular/core';
import { DataService } from '../list/data.service';
import { Equipos } from '../../Models/equipos/equipos.interface';
import { Router} from '@angular/router';
import { usuarioRol, RolesUser } from '../login/login.component';
import { ServiciosService } from 'src/app/Servicios/servicios.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

let datosUser: RolesUser = {
  rol: '',
  nombre: '',
  id_user: '',
};

export interface DatosEquipo {
  idEquipo: string;
  operacion: string;
}

export let EquipoAE: DatosEquipo = {
  idEquipo: '',
  operacion: ''
};

@Component({
  selector: 'app-index-equipos',
  templateUrl: './index-equipos.component.html',
  styleUrls: ['./index-equipos.component.scss']
})

export class IndexEquiposComponent implements OnInit {
  //equipos: Equipos[];
  MsgError: string;
  equipos: any[];
  equiposBack: any[];
  ifProgreso = false;
  ifResultados = true;
  filterEquipos = '';
  busqueda = new FormControl('');
  valor = '';
  constructor(
    private dataSvc: DataService,
    private router: Router,
    protected servicioConUser: ServiciosService,
    private toastr: ToastrService
    ) { }

  ngOnInit() {
    this.usuarioLogeado();
    

    //this.dataSvc.getAllEquipos().subscribe(data => console.log(data))
    this.dataSvc.getAllEquipos().subscribe(
      response => {
        this.equipos = response.body;
        this.equiposBack = response.body;
        this.ifResultados = false;
        this.ifProgreso = true;
      },
      error => {
        console.log(error);
        this.ifResultados = false;
        this.ifProgreso = true;
        this.mensaje500();
      }
    );
  }

  usuarioLogeado() {
    datosUser = usuarioRol;
    const token = this.servicioConUser.getToken();
    if ( token.length === 0) {
      console.log('error en el acceso');
      this.router.navigate(['Login']);
    } else {
      console.log('acceso correcto');
    }
  }

  editarEquipo(EquipoID: string, tipoOper: string) {
   EquipoAE = { idEquipo : EquipoID, operacion: tipoOper };
  }

  mensaje500() {
    this.toastr.error('Intentar más tarde', 'Error del Servidor ');
  }
  filtrarNoSerie(noSerie: string): any {
    const valor = noSerie;
    if (valor.length < 2 ) {
      this.equipos = this.equiposBack;
    } else {
      const equipoNoNull = this.equipos.filter(item => item.mequipo.numero_serie !== null);
      const equiposFiltro = equipoNoNull.filter(item => item.mequipo.numero_serie.toLowerCase().startsWith(noSerie.toLowerCase()));
      this.equipos = equiposFiltro;
    }
  }
}
