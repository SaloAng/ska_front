import { RouterModule, Routes} from '@angular/router';


import { PrincipalComponent } from './Componentes/principal/principal.component';
import { IndexEquiposComponent } from './Componentes/index-equipos/index-equipos.component';
import { AgregarEquiposComponent } from './Componentes/agregar-equipos/agregar-equipos.component';
import {IndexAccesoriosComponent} from './Componentes/index-accesorios/index-accesorios.component';
import {AgregarAccesoriosComponent} from './Componentes/agregar-accesorios/agregar-accesorios.component';
import { LoginComponent } from './Componentes/login/login.component';
import { EditarEquiposComponent } from './Componentes/editar-equipos/editar-equipos.component';
import { EditarAccesoriosComponent } from './Componentes/editar-accesorios/editar-accesorios.component';
import { IndexResponsivasComponent } from './Componentes/index-responsivas/index-responsivas.component';
import { AgregarResponsivasComponent } from './Componentes/agregar-responsivas/agregar-responsivas.component';
import { FormularioKabecComponent } from './Componentes/formulario-kabec/formulario-kabec.component';


export const APP_ROUTES: Routes = [
{ path: '', component: LoginComponent},
{ path: 'Principal', component: PrincipalComponent},
{ path: 'IndexEquipo', component: IndexEquiposComponent},
{ path: 'AgregarEquipo', component: AgregarEquiposComponent},
{ path: 'IndexAccesorio', component: IndexAccesoriosComponent },
{ path: 'AgregarAccesorio', component: AgregarAccesoriosComponent},
{ path: 'Login',  component: LoginComponent },
{ path: 'EditarEquipo',  component: EditarEquiposComponent },
{ path: 'EditarAccesorio',  component: EditarAccesoriosComponent },
{ path: 'IndexResponsiva',  component: IndexResponsivasComponent },
{ path: 'AgregarResponsiva', component: AgregarResponsivasComponent},
{ path: 'FormularioKabec', component: FormularioKabecComponent},


{ path: '**', pathMatch: 'full', redirectTo: ' Principal '}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
