import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContantComponent } from './contant/contant.component';
import { CourcesComponent } from './cources/cources.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { JavaComponent } from './java/java.component';
import { PythonComponent } from './python/python.component';
import { NodeJsComponent } from './node-js/node-js.component';
import { ExpressComponent } from './express/express.component';
import { JavaScriptComponent } from './java-script/java-script.component';
import { CourcedetailsComponent } from './courcedetails/courcedetails.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services', component:ServicesComponent},
  {path:'contant', component:ContantComponent},
  {path:'cources',
   component:CourcesComponent,
  children:[
    {path:'java', component:JavaComponent},
    {path:'javascript', component:JavaScriptComponent},
    {path:'python', component:PythonComponent},
    {path:'nodejs', component:NodeJsComponent},
    {path:'express', component:ExpressComponent},
  ]
  },
  {path:'courcesdetails/:cid', component:CourcedetailsComponent},
  {path:'**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
