import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { BrowserModule } from '@angular/platform-browser'

// Import de páginas
import { HomeComponent } from './home/home.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// Import de componentes
import { ToolbarComponent } from '../components/toolbar/toolbar.component';
import { TitleComponent } from '../components/title/title.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetalhesComponent,
    PageNotFoundComponent,
    ToolbarComponent,
    TitleComponent
  ],
  imports: [
    RouterModule,
    MaterialModule,
    BrowserModule

  ]
})
export class PagesModule { }
