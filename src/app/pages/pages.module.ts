import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing module
import { RoutingModule } from './routing.module';

// Custom module
import { SharedModule } from '../shared/shared.module';

// Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
