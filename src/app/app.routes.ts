import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

export const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent ,title:'Home Page'},
  {path:'about', component: AboutComponent,title:'About Page'},
  {path:'portfolio', component: PortfolioComponent,title:'Portfolio Page'},
  {path:'contact', component: ContactComponent,title:'Contact Page' },
  {path:'notFound', component: NotFoundComponent,title:'NotFound Page'},
  {path:'**', component: NotFoundComponent},
];
