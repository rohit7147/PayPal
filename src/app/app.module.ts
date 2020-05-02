import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { HeadComponent } from './head/head.component';
import { RatingComponent } from './rating/rating.component';
import { VotesComponent } from './votes/votes.component';
import { AvgcostComponent } from './avgcost/avgcost.component';
import { BodyComponent } from './body/body.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AllComponent } from './all/all.component';
import { SidebarModule } from 'primeng/sidebar';
import { CheckboxModule } from 'primeng/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    RatingComponent,
    VotesComponent,
    AvgcostComponent,
    BodyComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    FormsModule,
    RouterModule,
    SidebarModule,
    CheckboxModule,
    MatChipsModule,
    MatIconModule,
    RouterModule.forRoot([
      {
        path: '', component: BodyComponent,
        children: [
          { path: '', component: AllComponent },
          { path: 'rating', component: RatingComponent },
          { path: 'votes', component: VotesComponent },
          { path: 'avgcost', component: AvgcostComponent },
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
