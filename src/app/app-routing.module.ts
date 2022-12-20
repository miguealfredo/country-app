import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapitalComponent } from './countries/pages/capital/capital.component';
import { PaisComponent } from './countries/pages/pais/pais.component';
import { RegionComponent } from './countries/pages/region/region.component';
import { VerPaisComponent } from './countries/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path: '',
    component: PaisComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: RegionComponent,
  },
  {
    path: 'capital',
    component: CapitalComponent,
  },
  {
    path: 'pais/:code',
    component: VerPaisComponent,
  },
  {
    //Cualquier path que no seal el de reavio
    path: '**',
    //Rediregee a la ruta principal
    //Tambien se puede usar un compoennte 404
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    //Ccomo es el ruta principal se coloca forRoot
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
