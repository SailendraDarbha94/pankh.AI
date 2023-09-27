import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileCardComponent } from './shared/profile-card/profile-card.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'home', component: ProfileCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
