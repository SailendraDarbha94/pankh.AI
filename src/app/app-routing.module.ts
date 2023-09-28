import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileCardComponent } from './shared/profile-card/profile-card.component';
import { CertificatesPageComponent } from './certificates-page/certificates-page.component';
import { CertCardComponent } from './shared/cert-card/cert-card.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'home', component: ProfileCardComponent
  },
  {
    path: 'certificates', component: CertificatesPageComponent
  },
  {
    path: 'cert', component: CertCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
