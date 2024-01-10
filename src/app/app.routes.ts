import { Routes } from '@angular/router';
import { AbrirChamadoComponent } from './components/pages/abrir-chamado/abrir-chamado.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AdmComponent } from './components/pages/adm/adm.component';

export const routes: Routes = [

    {path: 'home', component:HomeComponent},

    {path: 'abrir-chamado', component:AbrirChamadoComponent},

    {path: 'adm', component:AdmComponent},

    {path: '**', redirectTo: 'home'}

];
